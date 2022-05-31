import React from 'react';
import PropTypes from 'prop-types';

export default function LayoutDashboard({ children }) {
  return (
    <div className="container py-5">
      { children }
    </div>
  );
}

LayoutDashboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
