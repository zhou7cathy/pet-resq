import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOUND_ANIMALS } from '../utils/queries';

export default function Found() {
  const { loading, data } = useQuery(QUERY_FOUND_ANIMALS);
  const foundAnimals = data?.foundAnimals || [];

  return (
    <div>
      <h2>Found</h2>
      <div>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {foundAnimals && foundAnimals.map((animal) => (
              <div key={animal._id}>
                <p>
                  {animal.status} 
                </p>
                <p>
                  {animal.name} 
                </p>
                <p>
                  {animal.description} 
                </p>
                <p>
                  {animal.animalType.name} 
                </p>
              </div>
            ))}
            </div>
          )}
      </div>
    </div> 
  )
}