//** Libraries */
import React, { Component } from "react";

/** Environment */
import * as  EnvironmentData from '../../../config';

const {authUrl, clientId, responseType} = EnvironmentData.default.api;
const redirect = window.location.origin + "/callback";

export default class Login extends Component{
    constructor() {
        super();
    }

    componentDidMount() {
        
    }

    render() {
        console.log()
        return(
            <div>Hola k hace
                <a href={`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect}/callback&response_type=${responseType}`}>aqui</a>
            </div>
        )
    }
}