//** Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

//** Styles */
import '../../styles/button-dark/_button-dark.scss';


const buttonDark = ({isDarkModeActive, className, onClick}) => {
    return (
        <button className={className} onClick={onClick}>
            <FontAwesomeIcon icon={isDarkModeActive ? faSun : faMoon} />
        </button>
    );
}

export default buttonDark;