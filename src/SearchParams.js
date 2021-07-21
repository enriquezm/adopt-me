import React from 'react';
import { useState, useEffect } from 'react';
import Pet from './Pet';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'cow'];

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  const breeds = ['breed1', 'breed2', 'breed3'];

  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await response.json();
    setPets(json.pets);
  }

  function updateLocation(e) {
    return setLocation(e.target.value);
  }

  function updateAnimal(e) {
    return setAnimal(e.target.value);
  }

  function updateBreed(e) {
    return setBreed(e.target.value);
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
            onChange={updateAnimal}
            onBlur={updateAnimal}
          >
            <option value=''></option>
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
            onChange={updateBreed}
            onBlur={updateBreed}
          >
            <option value=''></option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
