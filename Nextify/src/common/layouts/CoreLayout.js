import React, {useContext} from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import { UserContext } from '../../contexts/user/user.context';

function CoreLayout({ children , history }) {
  const {userData} = useContext(UserContext);
  return (
    <div className="main">
      <SideBar userData={userData}/>
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">
          {children}
        </div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
