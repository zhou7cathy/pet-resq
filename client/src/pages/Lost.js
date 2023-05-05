import * as _ from "lodash";
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ANIMALS } from '../utils/queries';

export default function Lost() {
  const { loading, data } = useQuery(QUERY_ANIMALS);

  // Deep clone so that can add extra property to the readonly object.
  const animals = _.cloneDeep(data?.animals) || [];
  const animalTypes = data?.animalTypes || [];

  animals.forEach(a => {
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