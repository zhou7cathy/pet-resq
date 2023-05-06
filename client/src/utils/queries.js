import { gql } from '@apollo/client';

export const QUERY_FAQS = gql`
  query allFAQs {
    FAQs {
      _id
      question
      answer
    }
  }
`;

export const QUERY_LOSTANIMALS = gql`
  query lostAnimals {
    lostAnimals {
      _id
      status
      name
      location
      image
      description
      postDate
      animalType {
        _id
      }
    }
    animalTypes {
      _id
      name
    }
  }
`;

export const QUERY_FOUNDANIMALS = gql`
  query foundAnimals {
    foundAnimals {
      _id
      status
      name
      location
      image
      description
      postDate
      animalType {
        _id
      }
    }
    animalTypes {
      _id
      name
    }
  }
`;

export const QUERY_ANIMAL_TYPES = gql`
  query allAnimalTypes {
    animalTypes {
      _id
      name
    }
  }
`;

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      # animals
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      # animals
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      # animals
    }
  }
`;