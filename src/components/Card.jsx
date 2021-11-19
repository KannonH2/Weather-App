import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {

  const { min, max, name, img, onClose, id } = props;

  return (
    <div className={`${"card"} ${props.primary ? "primary" : ""}`}>
      <div>
        <button onClick={onClose} style={{ display: 'none' }}>X</button>
      </div>
      <Link to={`/ciudad/${id}`}>
        <h5 className="name" style={{ textDecoration: 'underline' }}>{name}</h5>
      </Link>
      <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt={name} />
      <div className="temps">
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
      </div>
    </div>
  );
};

// Deberia estar en un archivo aparte
function Temp({ label, temp }) {
  return (
    <div className="temp">
      <span>{label}</span>
      <span>{temp}°</span>
    </div>
  );
};
