import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOUND_ANIMALS } from '../utils/queries';
import { Image } from 'antd';

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
              <div key={animal._id} className='post-container'>
                <div>
                  {animal.image.map((image) => (
                  <Image
                    className='post-img'
                    key={image}
                    width={300}
                    height={200}
                    src={image}
                  />
                  ))}
                </div>
                <div className='post-detail'>
                  <p>
                    Post Since: {animal.postDate} 
                  </p>
                  <p>
                    {animal.status} 
                  </p>
                  <p>
                    {animal.animalType.name} 
                  </p>
                  <p>
                    {animal.name} 
                  </p>
                  <p>
                    {animal.description} 
                  </p>
                </div>
              </div>
            ))}
            </div>
          )}
      </div>
    </div> 
  )
}