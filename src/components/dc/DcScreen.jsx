import React from 'react';
import HeroList from '../heroes/HeroList';

export default function DcScreen() {
  return (
    <div>
      <h1>DcScreen</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
}
