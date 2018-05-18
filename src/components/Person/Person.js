import React from 'react';
import myPropTypes from 'prop-types';
import s from './Person.css';

const person = props => (
  <div className={s.main}>
    <button
      onClick={props.delete}
      className={s.button}
    >
      I{'\''}m a Person. My name is {props.name}. My age is {props.age}
    </button>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name} />
  </div>);

person.defaultProps = {
  name: 'No Name',
  age: 0,
  children: [],
  delete: function click() {},
  change: function click() {},
};

person.propTypes = {
  name: myPropTypes.string,
  age: myPropTypes.number,
  children: myPropTypes.node,
  delete: myPropTypes.func,
  change: myPropTypes.func,
};

export default person;
