import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
