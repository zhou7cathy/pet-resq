import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FAQS } from '../utils/queries';

export default function Found() {
  const { loading, data } = useQuery(QUERY_FAQS);
  const faqs = data?.FAQs || [];

  return (
    <div>
      <h2>FAQs</h2>
      <div>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {faqs && faqs.map((faq) => (
              <div key={faq._id}>
                <p>
                  {faq.question} 
                </p>
                <p>
                  {faq.answer} 
                </p>
              </div>
            ))}
            </div>
          )}
      </div>
    </div> 
  )
}