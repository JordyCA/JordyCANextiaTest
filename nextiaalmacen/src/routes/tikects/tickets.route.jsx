//** Libreries */
import {
    useContext,
    useEffect,
    useState
} from 'react';
//** Components */
import Tables from '../../components/tables/tables.components.jsx';
//** Context */
import {UserContext} from '../../contexts/user/user.context.js';
//** Utils */
import {getTickets} from '../../utils/nextwms/nextwms.utils';

const headerTables = [
    "NO. DE ENTRADA",
    "CANTIDAD DE BIENES",
    "FECHA DE CAPTURA",
    "FECHA DE REMISIÓN",
    "NO. DE FACTURA",
    "RECIBIDO EN",
    "USUARIO",
    "ESTATUS"
]

const Tickets = () => {
    const {userToken} = useContext(UserContext);
    const [bodyTables, setBodyTables] = useState({ isCharge : false, data: []});

    //console.log('%ctickets.route.jsx line:7 userToken', 'color: #007acc;', userToken);
    //console.log(bodyTables)

    useEffect(()=>{
       
    }, []);

    const getTicketsData =async () => {
        try {
            if (userToken !== null && !bodyTables.isCharge) {
                const data = await getTickets(userToken);
                let newUsta = {isCharge: true, data: data.data.results};
                setBodyTables(newUsta);
                //setBodyTables({...bodyTables, ["data"]: data} );
            }    
        } catch (error) {
            console.log(error);
        }
            
    }

    getTicketsData();
    return (
        <div className='w-100'>
            <Tables headerTables={headerTables} bodyTables={bodyTables.data} typeTable="tickets"/>
        </div>

        
    )
}

export default Tickets;