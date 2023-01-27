//** Libraries */
import { 
    Outlet,
} from 'react-router-dom'
//** Components */
import HomePrin from '../../components/home/home.component';
//** Styles */
import './home.style.css';

const Home = () => {
    return (
        <div>
            <HomePrin />
            <Outlet />
        </div>
    )

}

export default Home;