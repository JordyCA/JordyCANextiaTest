//** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//** Components */
import GeneralRoutes from './routes';
import CoreLayout from './common/layouts/CoreLayout';

//** Contexts */
import { UserProvider } from './contexts/user/user.context';

import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CoreLayout>
          <GeneralRoutes />
        </CoreLayout>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
