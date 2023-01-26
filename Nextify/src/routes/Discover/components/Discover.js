//** Libraries */
import React, { Component } from "react";
//** Components */
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
//** Styles */
import "../styles/_discover.scss";
//** Utils */
import { 
  generateAccountToken, 
  getNewReleases, 
  getFeaturedPlaylists, 
  getCategories,
  getUserData, } from '../../../utils/spotify/spotify.utils';
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
      isChargedReleases: false,
      isChargedPlayList: false,
      isChargedCategories: false,
      isChargeUser: false,
    };
  }

  
  componentDidUpdate() {
    const chargeNewReleases = async () => {
      if (this.context.tokenUser !== null && !this.state.isChargedReleases) {
        const { data } = await getNewReleases(this.context.tokenUser);
        this.setState({
          newReleases: data.albums.items,
          isChargedReleases: true,
        });
      }
    }

    const chargeNewFeaturedPlaylist = async () => {
      if (this.context.tokenUser !== null && !this.state.isChargedPlayList) {
        const {data} = await getFeaturedPlaylists(this.context.tokenUser);
        this.setState({
          playlists: data.playlists.items,
          isChargedPlayList: true,
        });
      }
    }

  const chargeCategories = async () => {
    if (this.context.tokenUser !== null && !this.state.isChargedCategories) {
      const {data} = await getCategories(this.context.tokenUser); 
      this.setState({
        categories: data.categories.items,
        isChargedCategories: true,
      });
    }
  }

  const chargeUser = async () => {
    if (this.context.tokenUser !== null && !this.state.isChargeUser) {
      const {data} = await getUserData(this.context.tokenUser);
      this.context.addUserData(data);
      this.setState({
        isChargeUser: true
      });
    }
  }
  
  try {
    chargeNewReleases();
    chargeNewFeaturedPlaylist();
    chargeCategories();
    chargeUser();
  } catch (e) {
    console.log(e)
  }
    
  }

  render() {
    const { newReleases, playlists, categories} = this.state;

    const createToken = async () => {
      if ( this.context.tokenUser === null) {
        const { data: { access_token } } = await generateAccountToken();
        this.context.addToken(access_token);
      }
    }

    createToken();

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
