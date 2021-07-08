import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  
  const getPageNumbers = (result = [], index = 1) => {
    if (index === Math.ceil(totalPosts / postsPerPage)) {
      return [...result, index];
    }
    return getPageNumbers([...result, index], index+1);
  };

  console.log('-->', getPageNumbers());

  return (
    <nav>
      <ul className="pagination">
        {getPageNumbers().map((number) => (
          <li key={number} className="page-item">
            <a onClick={ () => paginate(number) } className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
