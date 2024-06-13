import React from 'react';
import { Outlet, BrowserRouter as Router } from 'react-router-dom';
import Markup from './markup/markup';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./vendor/line-awesome/css/line-awesome.min.css";
import "./vendor/font-awesome/css/all.min.css";
import "./vendor/themify/themify-icons.css";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="page-wraper">
        <Markup />
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
