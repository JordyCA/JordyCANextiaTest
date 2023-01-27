//** Libraries */
import axios from 'axios';

//** General data */
const NEXTWMS_GENERAL = {
    URL_GENERAL: 'https://nextwms-senado-staging.herokuapp.com/api',
    TOKEN: '/token/',
    TICKETS: '/bienes-instrumentales/asset_acquisitions',
    STOCK: '/bienes-instrumentales/inventory',
    MARCA: '/catalogos/autos/marcas'
}


export const generateAccountToken = async (user = "", password = "") => {
    const data = {
        username: user,
        password: password
    }

    return await axios.post(`${NEXTWMS_GENERAL.URL_GENERAL}${NEXTWMS_GENERAL.TOKEN}`, data);
}

export const getTickets = async (token = "") => {
    const config = {
        headers: {
            "Authorization": 'Bearer ' + token,
            'content-type': 'application/json '
        }
    }
    return await axios.get(
        (`${NEXTWMS_GENERAL.URL_GENERAL}${NEXTWMS_GENERAL.TICKETS}`),
        config
    );
}