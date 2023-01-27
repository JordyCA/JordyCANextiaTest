//** Libraries */
import {
    useContext
} from 'react';

//** Components */
import SignInFormasync from '../sign-in-form/signInForm.component';
//** Contexts */
import { UserContext } from '../../contexts/user/user.context';
const HomePrin = () => {
    const {userToken} = useContext(UserContext);
    console.log(userToken);

    if  (userToken === null) {
        return (
            <SignInFormasync />
        )
    } else {
        return (
            <p>Estas logeado</p>
        );
    }
   
}

export default HomePrin;