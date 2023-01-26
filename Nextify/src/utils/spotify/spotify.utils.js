//** Libraies */
import axios from 'axios';

//** Environment */
import * as  EnvironmentData from '../../config';

const SPOTIFY_ROUTES = {
    NEW_RELASES: '/browse/new-releases',
    FEATURED_PLAYLIST: '/browse/featured-playlists',
    CATEGORIES: '/browse/categories',
    ME: '/me',
    USERS: '/users/'
}

const {
    baseUrl,
    account,
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
        (`${baseUrl}${SPOTIFY_ROUTES.NEW_RELASES}?limit=${limit}`),
        config
    );
}

//** Get playlist spotify  */
export const getFeaturedPlaylists = async (token, limit = 10) => {
    const config = {
        headers: {
            "Authorization":'Bearer ' + token,
            'content-type': 'application/json '
        }
    };

    return await axios.get(
        (`${baseUrl}${SPOTIFY_ROUTES.FEATURED_PLAYLIST}?limit=${limit}`),
        config
    );
}

//** Get Categories spotify  */
export const getCategories = async (token, limit = 10) => {
    const config = {
        headers: {
            "Authorization":'Bearer ' + token,
            'content-type': 'application/json '
        }
    };

    return await axios.get(
        (`${baseUrl}${SPOTIFY_ROUTES.CATEGORIES}?limit=${limit}`),
        config
    );
}

//** Get spotify User */
export const getUserData = async (token) => {
    const config = {
        headers: {
            "Authorization":'Bearer ' + token,
            'content-type': 'application/json '
        }
    };

    return await axios.get(
        (`${baseUrl}${SPOTIFY_ROUTES.USERS}${account}`),
        config
    );
}
