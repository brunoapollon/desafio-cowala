import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';

const Routes: React.FC = function () {
  return (
    <RoutesDOM>
      <Route path="/" element={<HomePage />} />
    </RoutesDOM>
  );
};

export default Routes;
