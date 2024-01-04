import { useState } from 'react';
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)


  return (
    <div className="App">
      <h1>Puppy List</h1>
      {puppies.map((puppy) => {
        return (
          <p onClick={()=> setFeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      { featPupId && <p>{ featPupId }</p> }

      {featPupId && (
        <div className='featuredPup'>
          <h1>Featured Pup</h1>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
