import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="py-2 bg-light">
      <div className="container">
        <div className="row justify-content-center py-3 small">
          <span className="px-3">
            Made with&nbsp;
            <FontAwesomeIcon icon={faHeart} className="text-danger" />
            &nbsp;by&nbsp;
            <a href="https://github.com/netishix" target="_blank" rel="noreferrer">netishix</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
