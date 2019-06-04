import React from 'react';
import Header from './Header';
import Row from './Row';

const TopRow = () => {
  const rowHeader = ['Title', 'Genre', 'Stock', 'Rate', ''];
  return (
    <thead>
      <Row
        item={rowHeader.map(el => (
          <Header key={el} title={el} />
        ))}
      />
    </thead>
  );
};

export default TopRow;
