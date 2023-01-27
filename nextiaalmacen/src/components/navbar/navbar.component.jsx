//**Libraries */
import {
    Fragment,
    useContext,
    useEffect
} from "react";
//** Components */
import Nav from "../nav/nav.component";
import Logo from "../logo/logo.component";
//** Context */
import { UserContext } from "../../contexts/user/user.context";

const NavBar = () => {
    const { userToken } = useContext(UserContext);

    const menu = [
        {
            id: 1,
            name: 'Entradas',
            url: '/entradas',
        },
        {
            id: 2,
            name: 'Inventario',
            url: '/inventario',
        },
        {
            id: 3,
            name: 'Marcas',
            url: '/marcas',
        }
    ];

    if (userToken !== null) {
        return (
            <div key="navBar">
                <Logo />
                <br />
                {
                    menu.map((data) => {
                        return <Nav nameText={data.name} url={data.url} id={data.id} />
                    })
                }
            </div>
        );
    }

    return (
        <Fragment></Fragment>
    )
}

export default NavBar;