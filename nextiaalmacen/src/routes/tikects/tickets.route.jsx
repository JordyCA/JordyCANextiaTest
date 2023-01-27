import {
    useContext
} from 'react';
import {UserContext} from '../../contexts/user/user.context.js'
const Tickets = () => {
    const {userToken} = useContext(UserContext);
    console.log('%ctickets.route.jsx line:7 userToken', 'color: #007acc;', userToken);
    return (
        <div> tickets </div>
    )
}

export default Tickets;