//** Libraries */
import {
    useContext,
    Fragment
} from 'react';
import { 
    Outlet
} from 'react-router-dom'
//** Components */
// import HomePrin from '../../components/home/home.component';
import SignInFormasync from '../../components/sign-in-form/signInForm.component';
//** Contexts */
import { UserContext } from '../../contexts/user/user.context';
//** Styles */
import './home.style.css';

const Home = () => {
    const {userToken} = useContext(UserContext);
    console.log('%chome.route.jsx line:19 userToken', 'color: #007acc;', userToken);
    return (
        <Fragment>
            {
                userToken === null && <SignInFormasync />    
            }
            <Outlet />
        </Fragment>
    )

}

export default Home;