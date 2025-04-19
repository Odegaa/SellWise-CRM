/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './components/routes/Router';

const client = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </QueryClientProvider>
);

export { App };
