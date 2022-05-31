import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
