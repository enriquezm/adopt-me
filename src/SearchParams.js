import React from 'react';
import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'cow'];

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');

  const breeds = ['breed1', 'breed2', 'breed3'];

  function updateLocation(e) {
    return setLocation(e.target.value);
  }

  return (
    <div className='search-params'>
      <form>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            onChange={updateLocation}
            value={location}
            placeholder='Location'
          />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>--Select an animal--</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select
            id='breed'
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option>--Select a Breed--</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
