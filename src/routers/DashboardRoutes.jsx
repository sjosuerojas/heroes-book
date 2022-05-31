import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SerachScreen from '../components/search/SerachScreen';
import LayoutDashboard from '../components/template/LayoutDashboard';
import Navbar from '../components/template/Navbar';

export default function DashboardRoutes() {
  return (
    <>
      <Navbar />
      <LayoutDashboard>
        <Routes>
          <Route path="/" element={<SerachScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="hero/:id" element={<HeroScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="search" element={<SerachScreen />} />
        </Routes>
      </LayoutDashboard>
    </>
  );
}
