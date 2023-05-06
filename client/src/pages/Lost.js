import * as _ from "lodash";
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LOSTANIMALS } from '../utils/queries';

export default function Lost() {
  const { loading, data } = useQuery(QUERY_LOSTANIMALS);

  // Deep clone so that can add extra property to the readonly object.
  const lostAnimals = _.cloneDeep(data?.lostAnimals) || [];
  const animalTypes = data?.animalTypes || [];

  lostAnimals.forEach(a => {
    a['animalTypeName'] = animalTypes.find((t) => t._id === a.animalType._id).name;
  });

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
                  {animal.animalTypeName} 
                </p>
              </div>
            ))}
            </div>
          )}
      </div>
     </div> 
  )
}