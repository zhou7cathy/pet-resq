import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ANIMALS } from '../utils/queries';

export default function Lost() {
  const { loading, data } = useQuery(QUERY_ANIMALS);
  const animals = data?.animals || [];

  return (
     <div>
      <h2>Lost</h2>
      <div>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {animals && animals.map((animal) => (
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
              </div>
            ))}
            </div>
          )}
      </div>
     </div> 
  )
}