import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      User {
        _id
        name
      }
    }
  }
`;

export const ADD_ANIMAL = gql`
  mutation addAnimal($status: String!, $name: String, $location: String!, $image: [String]!, $description: String!, $animalType: ID!) {
    addAnimal(status: $status, name: $name, location: $location, image: $image, description: $description, animalType: $animalType) {
      _id
      status
      name
      location
      image
      description
      postDate
      animalType{
        _id
      }
    }
  }
`;

export const REMOVE_ANIMAL = gql`
  mutation removeAnimal($animalId: ID!) {
    removeAnimal(animalId: $animalId) {
      _id
    }
  }
`;