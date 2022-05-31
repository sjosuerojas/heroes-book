/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HeroItem({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) {
  return (
    <div className="col">
      <div className="card my-4">
        <div className="row g-0">
          <div className="col-4">
            <img src={`/assets/images/${id}.jpg`} className="img-fluid rounded-start" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">
                {superhero}
              </h5>
              <p className="small">
                <span className="badge bg-primary">
                  {publisher}
                </span>
              </p>

              <p className="card-text mb-0">
                {alter_ego}
              </p>

              {
                  (alter_ego !== characters) && (
                  <p className="text-muted small mb-0">
                    {characters}
                  </p>
                  )
              }
              <p className="card-text">
                <small className="text-muted mb-0">
                  {first_appearance}
                </small>
              </p>
              <Link to={`/hero/${id}`}>
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroItem.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
