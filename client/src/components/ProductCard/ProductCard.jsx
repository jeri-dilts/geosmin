import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
  console.log(props);

  return (
    <div className='productCard'>
      <Link className='card' to={`/products/${props._id}`}>
        <img className='card-imgURL' src={props.imgURL} alt='' />
      </Link>
      <div className='card-title'>{props.title}</div>
    </div>
  );
};

export default ProductCard;