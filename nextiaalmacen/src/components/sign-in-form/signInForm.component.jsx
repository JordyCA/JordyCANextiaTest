//** Libraries */
import {
    useState,
    useContext,
} from 'react';

//** Boostrap libraries */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

//** Components */
import Logo from '../logo/logo.component';
import Alerts from '../alerts/alerts.component';
//** Context */,
import { UserContext } from '../../contexts/user/user.context';

//** Utils */
import { generateAccountToken } from '../../utils/nextwms/nextwms.utils';
import { TYPES_ALERTS } from '../../utils/typesAlerts/typeAlerts.utils';

//** Styles */
import './signInForm.style.css';

const defaultFormFlieds = {
    user: '',
    password: ''
}

const SignInFormasync = () => {
    const [formFields, setFormFields] = useState(defaultFormFlieds);
    const { userToken, setUserToken } = useContext(UserContext);

    const onChangeUser = (event) => {
        formFields.user = event.target.value;
        setFormFields({ ...formFields });
    };

    const onChangePassword = (event) => {
        formFields.password = event.target.value;
        setFormFields({ ...formFields });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const getAccoutToken = async () => {
            try {
                const data = await generateAccountToken(formFields.user, formFields.password);
                if (data?.status === 200) {
                    const { data: { access } } = data;
                    setUserToken(access);
                }
            } catch (error) {
                console.log('%csignInForm.component.jsx line:45 errro', 'color: #007acc;', error);
                console.log(error.code);
                window.document.getElementById("signInErr").style.display =  'block';
                setTimeout(() => {
                    window.document.getElementById("signInErr").style.display =  'none';
                }, 5000);
            }
        }

        getAccoutToken();
    }


    return (
        <Row className='signIn__Row' key="signIn">
            <Col>
                <Logo />
                <Alerts typeAlert={TYPES_ALERTS.ERROR} id="signInErr" message="No pudo ingresar, favor de vericar su información."/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText" >
                        <Form.Label>Usuario : </Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu correo eléctronico" onChange={onChangeUser} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={onChangePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Acceder
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default SignInFormasync;