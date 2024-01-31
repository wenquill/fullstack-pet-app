import React from 'react';

function Pagination ({ filter, pets, changePage }) {
  return (
    <div>
      <button
        disabled={filter.page === 1}
        onClick={() => changePage(filter.page - 1)}
      >
        {'<'}
      </button>
      <button
        disabled={pets.length < filter.results}
        onClick={() => changePage(filter.page + 1)}
      >
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;
