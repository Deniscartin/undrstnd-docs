import React from 'react';
import CodeBlock from './CodeBlock';

const ApiUsageSection = () => {
  return (
    <section id="api-usage" className="p-6 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">API Usage</h2>

      <div className=" p-4 mb-6 rounded-lg bg-white ">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Headers</h3>
        <p className="mb-4 text-gray-700">
          <strong>x-api-key:</strong> your API key for authorization. To request an API key, contact us at{' '}
          <a href="mailto:info@undrstnd-labs.com" className="text-blue-600">info@undrstnd-labs.com</a>.
        </p>
      </div>

      <div className=" p-4 mb-6 rounded-lg bg-white ">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Example Request</h3>
        <CodeBlock
          code={`{
  "stream": false,
  "system": "groq",
  "modelId": "mixtral-8x7b-32768",
  "messages": [
    {
      "name": "system",
      "content": "Hello, how can I help you?",
      "role": "system"
    },
    {
      "name": "user",
      "content": "What is the weather like in San Francisco?",
      "role": "user"
    }
  ]
}`}
        />
      </div>

      <div className=" p-4 mb-6 rounded-lg bg-white ">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Example Response</h3>
        <CodeBlock
          code={`{
  "output": "The weather in San Francisco is sunny with a high of 18°C.",
  "funding": {
    "amount": "9.999442768",
    "currency": "eur"
  },
  "usage": {
    "tokensUsed": 196,
    "date": "2024-09-01T18:10:22.911Z"
  }
}`}
        />
      </div>

      
    </section>
  );
};

export default ApiUsageSection;
