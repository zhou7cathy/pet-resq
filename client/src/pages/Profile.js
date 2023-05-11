import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_ANIMAL } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Carousel, Button, Space, Image} from 'antd';

const Profile = () => {
    // Remove animal post
    const [removeAnimal, { error }] = useMutation(REMOVE_ANIMAL, {
      update(cache, { data: { removeAnimal } }) {
        try {
          cache.writeQuery({
            query: QUERY_ME,
            data: { me: removeAnimal },
          });
        } catch (e) {
          console.error(e);
        }
      },
    });
  
    const handleRemoveAnimal = async (animal) => {
      try {
        const { data } = await removeAnimal({
          variables: { animalId: animal._id },
        });
      } catch (err) {
        console.error(err);
      }
    };

  const { userId } = useParams();

  const { loading, data } = useQuery(
    userId ? QUERY_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  if (!user.animals.length) {
    return (
      <div>
        <div className='profile'>
        <h2>
          Your Profile
        </h2>
        <h3>
          Hello {user.name}. You haven't reported any lost or found pets yet. <br></br>
          Press the report button to report the pet.
        </h3>
        <Link  to="/report-pet">
            <Space wrap>
              <Button>Report Pet</Button>
            </Space>
        </Link>
      </div>
        <Link to="/">
          <Button>
            &larr; Home
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">
        <Button className='home-btn'>
          &larr; Home
        </Button>
      </Link>
      <div className='profile'>
        <h2>
          Your Profile
        </h2>
        <h3>
          Hello {user.name}. Your report has been posted to lost and found page. <br></br>
          Press the report button to report another pet.
        </h3>
        <Link  to="/report-pet">
          <Space wrap>
            <Button>Report Pet</Button>
          </Space>
        </Link>
      </div>
      <div>
        {user.animals && user.animals.map((animal) => (
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
            <div className='post-btns'>
              <Button className='post-btn' type="primary" htmlType='submit' 
                onClick={() => handleRemoveAnimal(animal)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
      </div>
      {/* <Link to="/">
        <Button>
          &larr; Home
        </Button>
      </Link> */}
    </div>
  );
};

export default Profile;
