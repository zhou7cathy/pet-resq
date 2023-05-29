import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LOST_ANIMALS } from '../utils/queries';
import { Carousel, Image } from 'antd';

export default function Lost() {
  const { loading, data, client } = useQuery(QUERY_LOST_ANIMALS);
  const lostAnimals = data?.lostAnimals || [];
  if (lostAnimals.length!=0) {
    client.resetStore();
  }

  return (
     <div>
      <h2>Lost Pet</h2>
      <div>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {lostAnimals && lostAnimals.map((animal) => (
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
                  {animal.name &&
                  <p>
                    Name: {animal.name} 
                  </p>
                  }
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