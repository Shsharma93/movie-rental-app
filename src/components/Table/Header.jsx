import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortUp,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';

const Heading = ({ title }) => {
  return (
    <Consumer>
      {context => {
        const { handleSort, sortOrder } = context.state;
        let sort, style, icon;
        if (Object.keys(title)[0] !== '') {
          sort = () => handleSort(Object.keys(title)[0]);
          style = { cursor: 'pointer' };
          const sortIcon =
            sortOrder === 'asc'
              ? faSortUp
              : sortOrder === 'desc'
              ? faSortDown
              : faSort;
          icon = <FontAwesomeIcon icon={sortIcon} color='#dc3545' size='sm' />;
        }
        return (
          <th style={style} onClick={sort}>
            {Object.values(title)} {icon}
          </th>
        );
      }}
    </Consumer>
  );
};

export default Heading;

Heading.propTypes = {
  title: PropTypes.object
};
