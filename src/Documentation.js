import React from 'react';
import { Element } from 'react-scroll';
import { CopyBlock, dracula } from 'react-code-blocks'; // For code highlighting

const Documentation = () => {
  return (
    <div className="container mx-auto flex flex-row">
      {/* Sidebar */}
      <nav className="w-1/4 sticky top-0 p-6">
        <ul className="space-y-4">
          <li><a href="#overview" className="text-lg font-semibold text-gray-800 hover:text-blue-500">Overview</a></li>
          <li><a href="#endpoints" className="text-lg font-semibold text-gray-800 hover:text-blue-500">Endpoints</a></li>
          <li><a href="#pricing" className="text-lg font-semibold text-gray-800 hover:text-blue-500">Pricing</a></li>
          <li><a href="#how-to-use" className="text-lg font-semibold text-gray-800 hover:text-blue-500">How to Use</a></li>
        </ul>
      </nav>

      {/* Documentation content */}
      <div className="w-3/4 prose prose-lg max-w-none px-8">
        <Element name="overview">
          <h1>Undrstnd Developers API Documentation</h1>
          <p>Welcome to the <strong>Undrstnd Developers API</strong>, where you can seamlessly integrate powerful AI models into your applications.</p>
          <h2>Base URL</h2>
          <CopyBlock
            text="https://dev.undrstnd-labs.com/api"
            language="tsx"
            theme={dracula}
            codeBlock
          />
        </Element>

        <Element name="endpoints">
          <h2>Endpoints</h2>
          <h3>1. Model Information Endpoints</h3>
          <p>Get a list of all supported models:</p>
          <CopyBlock
            text="GET https://dev.undrstnd-labs.com/api/models/info"
            language="http"
            theme={dracula}
            codeBlock
          />
          
          <h3>Get Model Details</h3>
          <CopyBlock
            text="GET https://dev.undrstnd-labs.com/api/models/{MODEL_ID}/info"
            language="http"
            theme={dracula}
            codeBlock
          />
          
          <h3>2. Chat Compilation Endpoint</h3>
          <CopyBlock
            text="POST https://dev.undrstnd-labs.com/api"
            language="http"
            theme={dracula}
            codeBlock
          />
          <p>Parameters:</p>
          <ul className="list-disc pl-6">
            <li><strong>stream</strong>: Indicates if the response should be streamed (true/false).</li>
            <li><strong>modelId</strong>: The ID of the model to use.</li>
            <li><strong>system</strong>: A system message (optional).</li>
            <li><strong>prompt</strong>: A simple text input.</li>
            <li><strong>messages</strong>: A list of message objects.</li>
          </ul>

          <h4>Headers:</h4>
          <ul className="list-disc pl-6">
            <li><strong>x-api-key</strong>: Your API key for authorization.</li>
          </ul>

          <h4>Example Request:</h4>
          <CopyBlock
            text={`
              {
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
              }
            `}
            language="json"
            theme={dracula}
            codeBlock
          />

          <h4>Example Response:</h4>
          <CopyBlock
            text={`
              {
                "output": "The weather in San Francisco is sunny with a high of 18°C.",
                "funding": {
                  "amount": "9.999442768",
                  "currency": "eur"
                },
                "usage": {
                  "tokensUsed": 196,
                  "date": "2024-09-01T18:10:22.911Z"
                }
              }
            `}
            language="json"
            theme={dracula}
            codeBlock
          />
        </Element>

        <Element name="pricing">
          <h2>Pricing</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border p-2">Model Name</th>
                <th className="border p-2">Pricing (EUR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Distil Whisper Large v3 En</td>
                <td className="border p-2">€0.052</td>
              </tr>
              <tr>
                <td className="border p-2">Gemma 2 9B Italian</td>
                <td className="border p-2">€0.52</td>
              </tr>
              <tr>
                <td className="border p-2">Mixtral 8x7B</td>
                <td className="border p-2">€0.624</td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>
        </Element>

        <Element name="how-to-use">
          <h2>How to Use the API</h2>
          <p>To test the API, you can use tools like <a href="https://httpie.io" className="text-blue-500 underline">httpie.io</a>.</p>
          <h4>Example Setup:</h4>
          <ol className="list-decimal pl-6">
            <li>Set <code className="bg-gray-100 rounded p-1">x-api-key</code> in the headers.</li>
            <li>Use the endpoint <code className="bg-gray-100 rounded p-1">https://dev.undrstnd-labs.com/api</code>.</li>
            <li>Craft your request using the parameters listed above.</li>
          </ol>
        </Element>
      </div>
    </div>
  );
};

export default Documentation;
