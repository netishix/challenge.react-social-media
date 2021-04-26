import React, { FunctionComponent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { CommentsSection } from '..';
import { IPost } from '../../../../interfaces';

interface PostProps {
  onModalClose: () => void;
  post: IPost;
}

interface PostState {
  show: boolean;
}

const initialState = {
  show: true,
};

const Post: FunctionComponent<PostProps> = (props: PostProps) => {
  const { post, onModalClose } = props;
  const [state, setState] = useState<PostState>(initialState);
  const handleClose = () => {
    onModalClose();
    setState({ ...state, show: false });
  };

  return (
    <>
      <Modal show={state.show} onHide={handleClose} size="lg" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2">
            {post.body}
          </p>
          <p className="small text-right">
            <FontAwesomeIcon icon={faFeatherAlt} className="text-info mr-2" />
            written by User&nbsp;
            <span className="text-info">
              #
              {post.userId}
            </span>
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <CommentsSection postId={post.id} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Post;
