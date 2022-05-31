/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import getHeroByName from '../../helpers/getHeroByName';
import HeroItem from '../heroes/HeroItem';

import './search.css';

export default function SerachScreen() {
  const navigate = useNavigate();
  const locationParams = useLocation();
  const { q = '' } = queryString.parse(locationParams.search);

  const [{ search }, handleInput] = useForm({ search: q });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);
  };

  const heroes = useMemo(() => getHeroByName(q), [q]);

  return (
    <>
      <div className="s130">
        <form onSubmit={handleSearch}>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                autoComplete="off"
                placeholder="¿Que estas buscando?"
                name="search"
                value={search}
                onChange={handleInput}
              />
            </div>
            <div className="input-field second-wrap">
              <button className="btn-search text-uppercase" type="submit">Buscar</button>
            </div>
          </div>
          { heroes.length > 0 ? (
            <small className="info">
              mostrando alrededor de:
              {' '}
              { heroes.length }
              {' '}
              resultados
            </small>
          ) : (<span className="info">ex. Spiderman, Capital Marvel, Silver...</span>) }
        </form>
      </div>
      {
        heroes.length > 0 && (
          <div className="w-100">
            <h4> Resultados </h4>
            <hr />
            {heroes.map((hero) => <HeroItem key={hero.id} {...hero} />) }
          </div>
        )
      }
    </>
  );
}
