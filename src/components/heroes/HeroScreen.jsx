/* eslint-disable camelcase */
import React, { useMemo } from 'react';
import {
  useParams, Navigate, useNavigate,
} from 'react-router-dom';
import getHeroById from '../../helpers/getHeroById';

export default function HeroScreen() {
  const { id: heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleGoHome = () => navigate('/');
  const handleGoBack = () => navigate(-1);

  const {
    id, superhero, alter_ego, publisher, first_appearance, characters,
  } = hero;

  return (
    <div className="animate__animated animate__fadeIn">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <button type="button" className="btn p-0" onClick={handleGoHome}>
              Inicio
            </button>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <button type="button" className="btn p-0" onClick={handleGoBack}>
              {publisher}
            </button>
          </li>
          <li className="breadcrumb-item active">
            {superhero}
          </li>
        </ol>
      </nav>
      <div className="row mt-5">
        <div className="col-4 animate__animated animate__slideInLeft">
          <img src={`/assets/images/${id}.jpg`} className="img-thumbnail" alt={superhero} />
        </div>
        <div className="col-8">
          <h3 className="fw-bold">
            {superhero}
          </h3>

          <ul className="list-group list-group-flush mb-4">
            <li className=" list-group-item">
              <span className="fw-bold">Alías:</span>
              {' '}
              {alter_ego}
            </li>
            <li className="fw-light list-group-item">
              <span className="fw-bold">Creador:</span>
              {' '}
              {publisher}
            </li>
            <li className="fw-light list-group-item">
              <span className="fw-bold">Creador:</span>
              {' '}
              {first_appearance}
            </li>
            <li className="fw-light list-group-item">
              <span className="fw-bold">Personajes:</span>
              {' '}
              {characters}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
