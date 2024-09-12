import React from 'react';
import CodeBlock from './CodeBlock';

const EndpointsSection = () => {
  return (
    <section id="endpoints" className="p-6  ">
      <h2 className="text-3xl font-bold mb-6 ">
        Endpoints
      </h2>

      <div className="p-4 mb-6 rounded-lg bg-white ">
        <h3 className="text-xl font-semibold mb-2">1. Model Information Endpoints</h3>
        <p className="mb-2 text-gray-700">Get a list of all supported models:</p>
        <CodeBlock code={`GET https://dev.undrstnd-labs.com/api/models/info`} />
      </div>

      <div className=" p-4 mb-6 rounded-lg bg-white ">
        <h3 className="text-xl font-semibold mb-2">Get Model Details</h3>
        <p className="mb-2 text-gray-700">Retrieve detailed information about a specific model:</p>
        <CodeBlock code={`GET https://dev.undrstnd-labs.com/api/models/{MODEL_ID}/info`} />
      </div>

      <div className=" p-4 rounded-lg bg-white ">
        <h3 className="text-xl font-semibold mb-2">2. Chat Compilation Endpoint</h3>
        <p className="mb-2 text-gray-700">Compile chat data for further processing:</p>
        <CodeBlock code={`POST https://dev.undrstnd-labs.com/api`} />
      </div>
    </section>
  );
};

export default EndpointsSection;
