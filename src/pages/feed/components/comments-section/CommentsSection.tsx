import React, {
  ChangeEvent, FormEvent, FunctionComponent, useEffect, useRef, useState,
} from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { faComments, faPencilAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Comment } from '..';
import { IComment } from '../../../../interfaces';
import { addComment } from '../../../../store/comments/actions';
import getRandomInt from '../../../../lib/utils';

import './CommentsSection.scss';
import CommentService from '../../../../services/CommentService';

interface CommentsSectionProps {
  postId: number,
}

interface CommentSectionState {
  isLoadingComments: boolean,
  comments: IComment[],
  errors: string [],
  form: {
    name: string;
    email: string;
    body: string;
  }
}

const initialState = {
  isLoadingComments: false,
  comments: [],
  errors: [],
  form: {
    name: '',
    email: '',
    body: '',
  },
};

const CommentsSection: FunctionComponent<CommentsSectionProps> = (props: CommentsSectionProps) => {
  const { postId } = props;
  const [state, setState] = useState<CommentSectionState>(initialState);
  const {
    isLoadingComments, comments, form, errors,
  } = state;
  const dispatch = useDispatch();

  // Get local comments from redux store
  const localComments = useSelector((reduxState: RootStateOrAny) => reduxState.comments)
    .filter((comment: IComment) => comment.postId === postId);
  // Scroll to bottom on new comments
  const commentListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    commentListRef.current!.scrollTop = commentListRef.current!.scrollHeight;
  }, [localComments.length]);

  // Fetch comments on component mount
  useEffect(() => {
    setState({ ...state, isLoadingComments: true });
    const getComments = async () => {
      const apiComments = await CommentService.getCommentsByPost(postId);
      setState({ ...state, isLoadingComments: false, comments: apiComments });
    };
    getComments();
  }, []);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...state.form, [name]: value };
    setState({ ...state, form: updatedForm });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, body } = form;
    if (name !== '' && email !== '' && body !== '') {
      // Save new comment with redux and reset form
      const newComment: IComment = {
        id: getRandomInt(200, 1000),
        postId,
        name,
        email,
        body,
      }
      dispatch(addComment(newComment));
      setState({
        ...state,
        errors: [],
        form: {
          name: '',
          email: '',
          body: '',
        },
      })
    } else {
      // Update state with an error
      setState({ ...state, errors: ['Please complete all the fields.'] })
    }
  };

  return (
    isLoadingComments
      ? (
        <div>
          <FontAwesomeIcon icon={faSpinner} className="mr-2" spin />
          <span>Loading comments...</span>
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <h5 className="comments-title text-muted pb-2 m-0">
              <FontAwesomeIcon icon={faComments} className="text-info mr-2" />
              Comments
            </h5>
            <div className="row comments-list p-2 pb-4 mb-4" ref={commentListRef}>
              <div className="col-12">
                {
                  comments
                    .map((comment: IComment) => <Comment key={comment.id} comment={comment} />)
                }
                {
                  localComments
                    .map((comment: IComment) => <Comment key={comment.id} comment={comment} />)
                }
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="text-muted mb-3">
                  <FontAwesomeIcon icon={faPencilAlt} className="text-info mr-2" />
                  Add new comment
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-6 col-md-4">
                      <label htmlFor="comment-name" className="form-label">Your name</label>
                      <input onChange={handleValueChange} value={form.name} name="name" type="text" className="form-control" id="comment-name" placeholder="John Doe" />
                    </div>
                    <div className="col-6 col-md-4">
                      <label htmlFor="comment-email" className="form-label">Your email</label>
                      <input onChange={handleValueChange} value={form.email} name="email" type="text" className="form-control" id="comment-email" placeholder="john.doe@gmail.com" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="comment-textarea" className="form-label">Your comment</label>
                      <textarea onChange={handleValueChange} value={form.body} name="body" id="comment-textarea" className="form-control" />
                    </div>
                  </div>
                  {
                      errors.length > 0 ? (
                        <p className="text-danger small">
                          {errors.join('. ')}
                        </p>
                      ) : null
                    }
                  <div className="row">
                    <div className="col-12 text-right">
                      <button className="btn btn-info" type="submit">Send comment</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )

  );
}

export default CommentsSection;
