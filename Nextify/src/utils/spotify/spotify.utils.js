//** Libraies */
import axios from 'axios';

//** Environment */
import * as  EnvironmentData from '../../config';

const {
    baseUrl,
    authUrl,
    authAccountUrl,
    clientId,
    clientSecret } = EnvironmentData.default.api;

//** generate account Spotify token  */
export const generateAccountToken = async () => {

    let auth = 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'));
    let header = {
        "Authorization": auth,
        'content-type': 'application/x-www-form-urlencoded; '
    };

    return await axios.post(
        authAccountUrl,
        'grant_type=client_credentials',
        { headers: header }
    )
}

//** For new albums in this week - new releases */
export const getNewReleases = async (token, limit = 10) => {
    const config = {
        headers: {
            "Authorization":'Bearer ' + token,
            'content-type': 'application/json '
        }
    };

    return await axios.get(
        (baseUrl + '/browse/new-releases?limit=' + limit),
        config
    )
}