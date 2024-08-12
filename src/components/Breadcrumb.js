import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-600 text-sm mb-4 ml-5">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-2">/</span>}
            <Link to={item.path} className="text-gray-600 hover:text-gray-800">
              {item.label}
            </Link>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;