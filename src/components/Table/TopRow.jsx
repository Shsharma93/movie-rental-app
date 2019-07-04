import React from 'react';
import Header from './Header';
import Row from './Row';

const TopRow = () => {
  const rowHeader = [
    { title: 'Title' },
    { 'genre.name': 'Genre' },
    { numberInStock: 'Stock' },
    { dailyRentalRate: 'Rate' },
    { '': '' },
    { '': '' }
  ];

  return (
    <thead>
      <Row
        item={rowHeader.map((el, i) => (
          <Header key={i} title={el} />
        ))}
      />
    </thead>
  );
};

export default TopRow;
