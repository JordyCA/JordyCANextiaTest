import { Fragment } from 'react';
import { Link} from 'react-router-dom';
//** Boostrap Libraries */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//** Css */
import './nav.style.css'

const Nav = ({nameText, url, id}) => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" key={id}>
                <Container>
                    <Navbar.Brand>
                        <Link to={url} className="nav__link">{nameText}</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />

        </Fragment>

    )
}

export default Nav;