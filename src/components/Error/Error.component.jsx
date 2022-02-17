import React from 'react';
import { Section } from '../../GlobalStyles';

const Error = ({ type }) => {
  if (type === 'single-product') {
    return (
      <Section>
        <h3>Error getting product</h3>
        <h4>Redirecting...</h4>
      </Section>
    );
  }

  if (type === 'products') {
    return (
      <Section>
        <h3>Error getting products</h3>
        <h4>Redirecting...</h4>
      </Section>
    );
  }

  if (type === 'categories') {
    return (
      <Section>
        <h3>Error getting product categories</h3>
        <h4>Redirecting...</h4>
      </Section>
    );
  }

  return (
    <Section>
      <h2>Error getting data</h2>
    </Section>
  );
};

export default Error;
