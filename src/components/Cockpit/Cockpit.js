import React from 'react';
import myPropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import s from './Cockpit.css';

const cockpit = (props) => {
  const buttonClassStyles = [s.button];
  const paragraphStyles = [];
  if (props.personsLength <= 2) { paragraphStyles.push(s.red); }
  if (props.personsLength <= 1) { paragraphStyles.push(s.bold); }
  if (props.hoverOn) { buttonClassStyles.push(s.secondHover); }
  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={paragraphStyles.join(' ')}>
        I{'\''}m a react application
      </p>
      <button
        className={buttonClassStyles.join(' ')}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </Aux>
  );
};

export default cockpit;

cockpit.defaultProps = {
  clicked: function click() { },
  personsLength: 0,
  hoverOn: false,
  title: 'Welcome',
};

cockpit.propTypes = {
  clicked: myPropTypes.func,
  personsLength: myPropTypes.number,
  hoverOn: myPropTypes.bool,
  title: myPropTypes.string,
};
