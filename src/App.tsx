import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import '@/setting/fontawesome';
import '@/setting/reactmodal';
import TopPageContainer from '@/containers/TopPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={TopPageContainer} />
  </BrowserRouter>
);

export default withCookies(App);
