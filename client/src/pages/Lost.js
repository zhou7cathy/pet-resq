import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LOST_ANIMALS } from '../utils/queries';

export default function Lost() {
  const { loading, data } = useQuery(QUERY_LOST_ANIMALS);
  const lostAnimals = data?.lostAnimals || [];

  return (
     <div>
      <h2>Lost</h2>
      <div>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {lostAnimals && lostAnimals.map((animal) => (
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