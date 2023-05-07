import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Button} from 'antd';

const Profile = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(
    userId ? QUERY_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/me" />;
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

  return (
    <div>
      <h2>
        Your Profile
      </h2>
      <div>
        {user.animals && user.animals.map((animal) => (
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
      <Link to="/pet-resq">
        <Button>
          &larr; Go Back
        </Button>
      </Link>
    </div>
  );
};

export default Profile;
