import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className="go-back">
      <Link to="/">
        <button className="btn btn-danger btn-close">
          Cancel
        </button>
      </Link>
    </div>
  )
}

export default BackButton;