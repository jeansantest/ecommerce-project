import React from 'react';
import { IconContext } from 'react-icons';
import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';

function Rating({ rating }) {
  return (
    <IconContext.Provider
      value={{ color: '#CCCC00', className: 'global-class-name' }}
    >
      <div>
        {rating >= 1 ? (
          <BsStarFill />
        ) : rating >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {rating >= 2 ? (
          <BsStarFill />
        ) : rating >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {rating >= 3 ? (
          <BsStarFill />
        ) : rating >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {rating >= 4 ? (
          <BsStarFill />
        ) : rating >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {rating >= 5 ? (
          <BsStarFill />
        ) : rating >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </div>
    </IconContext.Provider>
  );
}

export default Rating;
