//** Libraries */
import { Link } from "react-router-dom";
//** Boostrap libraries */
import Figure from "react-bootstrap/Figure";
//** Image */
import nextia from "../../assets/img/nextia.png";
const Logo = () => {
    return (
        <Link to="/">
            <Figure>
                <Figure.Image width={271} height={280} alt="171x180" src={nextia} />
            </Figure>
        </Link>
    );
};

export default Logo;
