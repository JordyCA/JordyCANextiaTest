//** Libraries */
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
//** Boostrap Libraries */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//**Components */
import NavBar from '../../components/navbar/navbar.component';

const Navigation = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col sm={4}><NavBar /></Col>
                    <Col sm={8} className="d-flex align-items-center"><Outlet/></Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Navigation;