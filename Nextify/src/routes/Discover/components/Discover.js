import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
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
