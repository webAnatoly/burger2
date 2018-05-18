import React from 'react';
import s from './App.css';
import Person from './Person/Person';
import getUnicRandomNumber from '../myLib/getUnicRandomNumber';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.secondPersonId = getUnicRandomNumber() + Math.random();
    this.state = {
      persons: [
        { id: getUnicRandomNumber() + Math.random(), name: 'Tolik', age: 28 },
        { id: this.secondPersonId, name: 'Manu', age: 29 },
        { id: getUnicRandomNumber() + Math.random(), name: 'Stepha', age: 26 },
      ],
      showPersons: false,
    };
    this.deletePersonHandler = this.deletePersonHandler.bind(this);
    this.togglePersonsHandler = this.togglePersonsHandler.bind(this);
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
    const person = this.state.persons.findIndex(p => p.id === id);
    const newPersons = [...this.state.persons];
    newPersons[person].name = event.target.value;
    this.setState(newPersons);
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              let result = null;
              if (person.id === this.secondPersonId) {
                result = (
                  <Person
                    name={person.name}
                    age={person.age}
                    delete={() => this.deletePersonHandler(index)}
                    change={event => this.nameChangeHandler(event, person.id)}
                    key={person.id}
                  >
                    This is between {'"tags"'} Person component, passed as children property (props.children)
                  </Person>
                );
              } else {
                result = (
                  <Person
                    name={person.name}
                    age={person.age}
                    delete={() => this.deletePersonHandler(index)}
                    change={event => this.nameChangeHandler(event, person.id)}
                    key={person.id}
                  />
                );
              }
              return result;
            })
          }
        </div>
      );
    }

    return (
      <div className={s.main}>
        <h1>Welcome to react!</h1>
        <p>I{'\''}m a react application</p>
        <button
          className={s.button}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
