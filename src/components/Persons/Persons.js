import React from 'react';
import Person from './Person/Person';

const persons = props => props.persons.map((person, index) => {
  let result = null;
  if (person.id === props.secondPersonId) {
    result = (
      <Person
        name={person.name}
        age={person.age}
        delete={() => props.clicked(index)}
        change={event => props.changed(event, person.id)}
        key={person.id}
        position={index}
      >
        This is between {'"tags"'} Person component, passed as children property (props.children)
      </Person>
    );
  } else {
    result = (
      <Person
        name={person.name}
        age={person.age}
        delete={() => props.clicked(index)}
        change={event => props.changed(event, person.id)}
        key={person.id}
        position={index}
      />
    );
  }
  return result;
});

export default persons;
