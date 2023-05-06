import * as _ from "lodash";
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOUNDANIMALS } from '../utils/queries';

export default function Found() {
    const { loading, data } = useQuery(QUERY_FOUNDANIMALS);

  // Deep clone so that can add extra property to the readonly object.
  const foundAnimals = _.cloneDeep(data?.foundAnimals) || [];
  const animalTypes = data?.animalTypes || [];

  foundAnimals.forEach(a => {
    a['animalTypeName'] = animalTypes.find((t) => t._id === a.animalType._id).name;
  });

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