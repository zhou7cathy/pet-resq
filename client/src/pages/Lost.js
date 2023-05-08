import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LOST_ANIMALS } from '../utils/queries';
import {
  Image,
} from 'antd';

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
                {animal.image.map((image) => (
                <Image
                  key={image}
                  width={200}
                  src={image}
                />
                ))}
              </div>
            ))}
            </div>
          )}
      </div>
     </div> 
  )
}