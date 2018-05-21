import React from 'react';
import myPropTypes from 'prop-types';
import WithClass from '../../../hoc/WithClass';
import s from './Person.css';

class Person extends React.Component {
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    return (
      <WithClass cssClasses={s.main}>
        <button
          onClick={this.props.delete}
          className={s.button}
        >
          I{'\''}m a Person. My name is {this.props.name}. My age is {this.props.age}
        </button>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp; }}
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
        <p>Just for test {this.state.a}</p>
      </WithClass>);
  }
}

Person.defaultProps = {
  name: 'No Name',
  age: 0,
  children: [],
  delete: function click() {},
  change: function click() {},
  position: 0,
};

Person.propTypes = {
  name: myPropTypes.string,
  age: myPropTypes.number,
  children: myPropTypes.node,
  delete: myPropTypes.func,
  change: myPropTypes.func,
  position: myPropTypes.number,
};

export default Person;
