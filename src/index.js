import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createHashHistory } from 'history';

import Detail from './pages/Detail';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Detail}/>
  </BrowserRouter>,
  document.getElementById('app')
);
