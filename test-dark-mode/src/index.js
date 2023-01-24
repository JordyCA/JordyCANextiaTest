//** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';

//** Contexts */

import { DarkMode } from './contexts/dark-mode.context';

//** Routes */
import Routes from './routes';

//** Sytles */
import './styles/_main.scss';

ReactDOM.render(
  <DarkMode>
    <AppContainer>
      <Routes />
    </AppContainer>
  </DarkMode>,
  document.getElementById('root')
);
