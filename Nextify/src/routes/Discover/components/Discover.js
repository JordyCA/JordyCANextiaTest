//** Libraries */
import React, { Component, useEffect } from "react";
//** Components */
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
//** Styles */
import "../styles/_discover.scss";
//** Utils */
import { testing } from '../../../utils/spotify/spotify.utils';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }
  componentDidMount() 
  { 
    console.log(testing())
  } 
  
  render() {
    const { newReleases, playlists, categories } = this.state;

   

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
