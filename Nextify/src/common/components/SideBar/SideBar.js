import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Avatar } from "../../../assets/images/avatar.svg";
import "./_sidebar.scss";

function renderSideBarOption(link, icon, text, { selected } = {}) {
  return (
    <div
      className={cx("sidebar__option", {
        "sidebar__option--selected": selected,
      })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
}

export default function SideBar( {userData}) {
  console.log('%cSideBar.js line:28 userData', 'color: #007acc;', userData);
  console.log(userData.external_urls?.spotify);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>{userData.display_name ? userData.display_name : "Sin acceso."}</p> 
        {
          userData.external_urls?.spotify ? (<a href={userData.external_urls?.spotify} target="_blank">Tu perfil en spotify</a> ) :""
        }
      </div>
      <div className="sidebar__options">
        {renderSideBarOption("/", faHeadphonesAlt, "Descubre", {
          selected: true,
        })}
        {renderSideBarOption("/search", faSearch, "Buscar")}
        {renderSideBarOption("/favourites", faHeart, "Favoritos")}
        {renderSideBarOption("/playlists", faPlayCircle, "Playlists")}
      </div>
    </div>
  );
}
