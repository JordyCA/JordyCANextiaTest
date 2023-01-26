//** Libraries */
import React, { Component } from "react";
//** Components */
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
//** Styles */
import "../styles/_discover.scss";
//** Utils */
import { generateAccountToken, getNewReleases } from '../../../utils/spotify/spotify.utils';
//** Contexts */
import { UserContext } from '../../../contexts/user/user.context'
export default class Discover extends Component {
  static contextType = UserContext;

  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      isChargedReleases:  false,
    };
    
  //  console.log(this.context);
  }

  componentDidUpdate() {
    
    const chargeNewReleases = async () => {
      if ( this.context.tokenUser !== null && !this.state.isChargedReleases) {
        console.log(this.context.tokenUser);
        const {data} = await getNewReleases(this.context.tokenUser);
        this.setState({
          newReleases: data.albums.items,
          isChargedReleases: true,
        });
      }
    }

    
    chargeNewReleases();
    
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    const createToken = async () => {
      if ( this.context.tokenUser === null ) {
        const {data:{ access_token }} = await generateAccountToken();
        console.log(access_token)
        this.context.addToken(access_token);
      } else {
        //console.log('%cDiscover.js line:37 this.context.tokeUser', 'color: #007acc;', this.context.tokeUser);
      }
    }

    createToken();
    

    console.log( this.state.newReleases );
    //console.log('%cDiscover.js line:45 this.context.tokenUser', 'color: #007acc;', this.context.tokenUser);
    return (
      <div className="discover">
        <DiscoverBlock
          text="NUEVO ESTA SEMANA"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock text="PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock
          text="ENCUENTRA"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
