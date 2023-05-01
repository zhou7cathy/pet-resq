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