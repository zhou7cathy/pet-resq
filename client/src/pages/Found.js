import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOUND_ANIMALS } from '../utils/queries';
import { Carousel, Image } from 'antd';

export default function Found() {
  const { loading, data, client } = useQuery(QUERY_FOUND_ANIMALS);
  const foundAnimals = data?.foundAnimals || [];
  if (foundAnimals.length!=0) {
    client.resetStore();
  }

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
                  <Image.PreviewGroup>
                    <Carousel  dotPosition= 'left'>
                      {animal.image.map((image) => (
                      <Image
                        className='post-img'
                        key={image}
                        width={300}
                        height={200}
                        src={image}
                      />
                      ))}
                    </Carousel>
                  </Image.PreviewGroup>
                </div>
                <div className='post-detail'>
                  <p>
                    Post Since: {animal.postDate} 
                  </p>
                  <p>
                    Pet Status: {animal.status} 
                  </p>
                  <p>
                    Location: {animal.location} 
                  </p>
                  <p>
                    Aniaml Type: {animal.animalType.name} 
                  </p>
                  <p>
                    Description: {animal.description} 
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