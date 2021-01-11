import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <div className='productCard'>
      <Link className='card' to={`/product/${props._id}`}>
        <img className='card-imgURL' src={props.imgURL} alt='' />
      </Link>
      <div className='card-title'>{props.itemName}</div>
      <div className='card-price'>{props.price}</div>
    </div>
  );
};

export default ProductCard;