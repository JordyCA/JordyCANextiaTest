//** Libraries */
import { Routes, Route } from 'react-router-dom';

//** Routes Componets */
import Navigation from './routes/navigation/navigation.route.jsx';
import Home from './routes/home/home.route.jsx';
import Tickets from './routes/tikects/tickets.route.jsx';

//** Contexts */
import { UserProvider } from './contexts/user/user.context';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/entradas' element={<Tickets />} />
      </Route>
    </Routes>
  );
}

export default App;
