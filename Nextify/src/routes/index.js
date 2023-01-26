//** Libraries */
import React from 'react';
import {Routes, Route} from 'react-router-dom';
//** Route Components */
import Discover from './Discover';

export default function GeneralRoutes() {
  // Here you'd return an array of routes
  return (
    <Routes>
      <Route path='/' element={<Discover />}/>
    </Routes>
    
    );
}
