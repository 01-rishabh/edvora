import React from "react";
import PropTypes from "prop-types";

function Card(props) {

  return (
    <div className='card col-4 nice-card'>
      <img className="w-25 h-25 rounded d-inline-block" src={props.src}></img>
      <p className="text-white">{props.name}</p>
      <p className="text-white">$ {props.price}</p>
      <p className="text-white">{props.brandName}</p>
      <p className="text-white">{props.location}</p>
      <p className="text-white">{props.description}</p>
      <p className="text-white">Date: {props.date.slice(0, 10)}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Card;
