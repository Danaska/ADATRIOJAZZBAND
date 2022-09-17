import React from 'react';
import { Link } from 'react-router-dom';

function QuienesItem(props) {
  return (
    <>
      <li className='cards__itemq'>
        <Link className='cards__item__linkq' to={props.path}>
          <figure className='cards__item__pic-wrapq'>
          <figure className='cards__item__pic-wrap2q' >
            <img
              className='cards__item__imgq'
              alt='Concert'
              src={props.src}
            />
          </figure>
          </figure>
          <div className='cards__item__infoq'>
            <h5 className='cards__item__textq'>{props.text}</h5>
          </div>
          </Link>
      </li>
    </>
  );
}
export default QuienesItem;
