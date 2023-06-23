import React, { useState } from 'react';
import './ClientCarousel.css';

const ClientCarousel = ({ clients }) => {
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    setCurrent(index);
  }

  return (
    <section className="carousel">
      {clients.map((client, index) => (
        <div className={`carousel__slide ${index === current ? "active" : ""}`} key={index}>
          <img src={client.image} alt={`${client.name} logo`} className="carousel__image" />
          <div className="carousel__text">
            <h2>{client.name}</h2>
            <p>{client.description}</p>
            <button className="read-more">Read more</button>
          </div>
        </div>
      ))}
      <div className="carousel__indicators">
        {clients.map((_, idx) => (
          <button
            className={`carousel__indicator ${idx === current ? "active" : ""}`}
            onClick={() => handleClick(idx)}
            key={idx}
            aria-label={`Slide ${idx+1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientCarousel;
