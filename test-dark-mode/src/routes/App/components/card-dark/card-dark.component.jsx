//** Libraries */
import { Fragment, useContext } from 'react';

//** Components */
import ButtonDark from '../button-dark/button-dark.component';

//** Contexts */
import { DarkModeContext } from '../../../../contexts/dark-mode.context';

//** Styles */
import '../../../../styles/_dark-mode.scss';

const CardDark = () => {
  const { isDarkModeActive, setNewStatusDark } = useContext(DarkModeContext);

  console.log('%ccard-dark.component.jsx line:16 isDarkModeActive', 'color: #007acc;', isDarkModeActive);

  const updateStatusDark = () => setNewStatusDark(isDarkModeActive);

  return (
    <Fragment>
      <div className={`app ${isDarkModeActive ? "dark-mode" : ""}`}  >
        <div className="level">
          <div>
            <h1 className="title">Dark Mode Challenge</h1>
          </div>

          {/* --The button that should toggle dark mode-- */}
          <ButtonDark
            isDarkModeActive={isDarkModeActive}
            className={`app__dark-mode-btn icon level-right ${isDarkModeActive ? "__brightness-mode-btn" : ""}`}
            onClick={updateStatusDark} />

        </div>

        <div className="columns">
          <div className="column">
            <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
          </div>
          <div className="column">
            <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>

        <section className="section">
          <div className="buttons level-right">
            <a className="button is-primary">Save</a>
            <a className="button is-link">Submit</a>
          </div>
        </section>
      </div>

    </Fragment>
  );
}

export default CardDark;