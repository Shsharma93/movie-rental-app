import React from 'react';
import Page from './Page';
import _ from 'lodash';
import { Consumer } from '../../context';

const pagination = () => {
  return (
    <Consumer>
      {context => {
        const {
          itemCount,
          pageSize,
          handlePageChange,
          currentPage
        } = context.state;
        const pageCount = Math.ceil(itemCount / pageSize);
        if (pageCount === 1) return null;
        const pages = _.range(1, pageCount + 1);
        return (
          <nav aria-label='Page navigation example'>
            <ul className='pagination justify-content-center'>
              {pages.map(p => (
                <Page
                  text={p}
                  key={p}
                  classes={p === currentPage ? 'page-item active' : 'page-item'}
                  onPageChange={() => handlePageChange(p)}
                />
              ))}
            </ul>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default pagination;
