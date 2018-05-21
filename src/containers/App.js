import React from 'react';
import myPropTypes from 'prop-types';
import s from './App.css';
import Persons from '../components/Persons/Persons';
import getUnicRandomNumber from '../myLib/getUnicRandomNumber';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import anotherHoc from '../hoc/anotherHoc';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.secondPersonId = getUnicRandomNumber() + Math.random();
    this.state = {
      persons: [
        { id: getUnicRandomNumber() + Math.random(), name: 'Tolik', age: 28 },
        { id: this.secondPersonId, name: 'Manu', age: 29 },
        { id: getUnicRandomNumber() + Math.random(), name: 'Stepha', age: 26 },
        { id: getUnicRandomNumber() + Math.random(), name: 'Karl', age: 47 },
      ],
      showPersons: false,
    };
    this.deletePersonHandler = this.deletePersonHandler.bind(this);
    this.togglePersonsHandler = this.togglePersonsHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }

  togglePersonsHandler() {
    this.setState((prevState) => {
      const result = !prevState.showPersons;
      return ({ showPersons: result });
    });
  }

  deletePersonHandler(personIndex) {
    const personsCopy = [...this.state.persons];
    personsCopy.splice(personIndex, 1);
    this.setState({ persons: personsCopy });
  }

  nameChangeHandler(event, id) {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const copyPersons = [...this.state.persons];
    copyPersons[personIndex].name = event.target.value;
    this.setState(copyPersons);
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            secondPersonId={this.secondPersonId}
            changed={this.nameChangeHandler}
            clicked={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      // <WithClass cssClasses={s.main}>
      <Aux>
        <Cockpit
          title={this.props.title}
          clicked={this.togglePersonsHandler}
          personsLength={this.state.persons.length}
          hoverOn={this.state.showPersons}
        />
        {persons}
      </Aux>
      // </WithClass>
    );
  }
}

export default anotherHoc(App, s.main);

App.defaultProps = {
  title: '',
};

App.propTypes = {
  title: myPropTypes.string,
};
