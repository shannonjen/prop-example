import React from 'react'
import Person from './Person'
const People = ({people}) => {
  return (
    <div className="collection">
      { people.map(person => <Person key={ person.id } person = {person} /> ) }
    </div>
  )
}

export default People
