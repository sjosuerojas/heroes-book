/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import getHeroByPublisher from '../../helpers/getHeroeByPublisher';
import HeroItem from './HeroItem';

export default function HeroList({ publisher }) {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <div className="row row-cols-1 row-cols-md-3 g-3">
        { heroes.map((hero) => (
          <HeroItem key={hero.id} {...hero} />
        )) }
      </div>
    </div>
  );
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
