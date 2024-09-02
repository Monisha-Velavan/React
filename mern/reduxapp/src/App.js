import React from 'react';
import logo from './logo.svg';
import './App.css';
import{ Provider } from 'react-redux';
import { myStore } from './redux/Config';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Web from './Web';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerPaths = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/home", element: <Home/> },
  { path: "/about", element: <About/> },
  { path: "/contact", element: <Contact/> },
  {path: "/Web", element: <Web/>}
]);

function App() {
  return (
    <Provider store = {myStore}>
    <div className="App">
      <RouterProvider router={routerPaths} />      
    </div>
    </Provider>
  );
}

export default App;