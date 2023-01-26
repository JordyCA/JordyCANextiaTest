//** Libraries */
import React from 'react';
import {Routes, Route} from 'react-router-dom';
//** Route Components */
import Discover from './Discover';
import Login from './Login'

export default function GeneralRoutes() {
  // Here you'd return an array of routes
  return (
    <Routes>
      <Route path='/' element={<Discover />}/>
      <Route path='/Login' element={<Login />}/>
    </Routes>
    
    );
}
