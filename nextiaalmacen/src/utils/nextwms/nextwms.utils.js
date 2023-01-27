//** Libraries */
import axios from 'axios';

//** General data */
const NEXTWMSGENERAL = {
    URL_GENERAL: 'https://nextwms-senado-staging.herokuapp.com/api',
    TOKEN: '/token/', 
    TICKETS: '/bienes-instrumentales/asset_acquisitions',
    STOCK: '/bienes-instrumentales/inventory', 
    MARCA :'/catalogos/autos/marcas'
}


export const generateAccountToken = async (user="", password="") => {
    const data = {
        username: user,
        password: password
    }

    return await axios.post(`${NEXTWMSGENERAL.URL_GENERAL}${NEXTWMSGENERAL.TOKEN}`, data);
}