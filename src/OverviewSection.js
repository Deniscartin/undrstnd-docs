import React from 'react';
import CodeBlock from './CodeBlock';

const Overview = () => {
  return (
    <section id="overview" className="p-6 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Undrstnd Developers API Documentation</h2>
      
      <div className=" p-4 mb-6 rounded-lg bg-white ">
        <p className="mb-4 text-gray-700">
          Welcome to the <strong className="text-gray-700">Undrstnd Developers API</strong>, where you can seamlessly integrate powerful AI models into your applications. Our API allows you to interact with a range of AI models designed for various use cases, from chat functionalities to advanced reasoning tasks. Below, you’ll find details on how to use our endpoints, parameters, pricing, and more.
        </p>
      </div>

      <div className="p-4 rounded-lg bg-white ">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Base URL</h3>
        <p className="mb-4 text-gray-700">
        All API requests should be sent to the following base URL:
        </p>
        <CodeBlock code={`https://dev.undrstnd-labs.com/api`} />
      </div>
    </section>
  );
};

export default Overview;
