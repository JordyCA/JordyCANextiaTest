//** Libraries Boostrap */
import Alert from 'react-bootstrap/Alert';

//**Styles */
import './alerts.styles.css';

const Alerts = ({ typeAlert, id, message }) => {
    return (
        <div id={id} className="alerts__div">
            <Alert key={typeAlert} variant={typeAlert}>
                {message}
            </Alert>
        </div>
        
    )

}
export default Alerts;