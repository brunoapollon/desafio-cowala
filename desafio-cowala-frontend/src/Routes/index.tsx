import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

const Page: React.FC = function () {
  return <h1>Hello World</h1>;
};

const Routes: React.FC = function () {
  return (
    <RoutesDOM>
      <Route path="/" element={<Page />} />
    </RoutesDOM>
  );
};

export default Routes;
