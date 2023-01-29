//** Libraries */
import {
    Fragment,
    useContext
} from 'react';
import { Outlet } from 'react-router-dom';
//** Boostrap Libraries */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//** Contexts */
import { UserContext } from '../../contexts/user/user.context';
//**Components */
import NavBar from '../../components/navbar/navbar.component';

const Navigation = () => {
    const { userToken } = useContext(UserContext);
    return (
        <Fragment>
            <Container>
                
                    {
                        userToken !== null ? (
                            <Row>
                            <Col sm={4}><NavBar /></Col>
                            <Col sm={8} className="d-flex align-items-center"><Outlet /></Col>
                            </Row>
                        ) : (
                            <Row>
                                <Col className="d-flex align-items-center"><Outlet /></Col>
                            </Row>
                        )
                    }
                

            </Container>
        </Fragment>
    );
}

export default Navigation;