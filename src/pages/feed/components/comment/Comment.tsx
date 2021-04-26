import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { IComment } from '../../../../interfaces';

interface CommentProps {
  comment: IComment;
}

const Comment: FunctionComponent<CommentProps> = (props: CommentProps) => {
  const { comment } = props;
  return (
    <div className="col-12 p-2 border-bottom">
      <div className="row">
        <div className="col-12">
          <p className="mb-1">
            <FontAwesomeIcon icon={faUser} className="text-info mr-2" />
            {`${comment.name.substr(0, 20)} <${comment.email.toLowerCase()}>`}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="pl-4">
            {comment.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
