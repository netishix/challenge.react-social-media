import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { IPost } from '../../../../interfaces';
import './PostThumbnail.scss';
import { Post } from '..';

interface PostThumbnailProps {
  post: IPost;
}

interface PostThumbnailState {
  isPostOpened: boolean;
}

const PostThumbnail: FunctionComponent<PostThumbnailProps> = (props: PostThumbnailProps) => {
  const { post } = props;
  const [state, setState] = useState<PostThumbnailState>({ isPostOpened: false });
  const closePost = () => {
    setState({ ...state, isPostOpened: false });
  };
  return (
    <>
      {
        state.isPostOpened ? <Post post={post} onModalClose={closePost} /> : null
      }
      <div className="col-12 col-md-3 mb-4">
        <div className="card post-card">
          <div className="post-card-degrade" />
          <div className="card-body">
            <h5 className="card-title border-bottom pb-3">
              {post.title}
            </h5>
            <div className="card-text">
              {post.body}
            </div>
            <div className="social-btns">
              <span className="mr-2">
                <FontAwesomeIcon icon={faThumbsUp} className="text-info" />
              </span>
              <span className="mr-4">
                <FontAwesomeIcon icon={faComments} className="text-info" />
              </span>
              <button className="btn btn-link" type="button" onClick={() => setState({ ...state, isPostOpened: true })}>
                Read more...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostThumbnail;
