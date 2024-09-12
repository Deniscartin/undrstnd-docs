import React from 'react';
import { Element } from 'react-scroll';

const Section = ({ id, title, children }) => {
  return (
    <Element name={id} className="my-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </Element>
  );
};

export default Section;
