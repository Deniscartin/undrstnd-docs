import React, { useState } from 'react';
import Section from './Section';


const HowToUse = () => {
  const [showDemo, setShowDemo] = useState(false);

  const handleOpenDemo = () => setShowDemo(true);
  const handleCloseDemo = () => setShowDemo(false);

  return (
    <Section id="how-to-use" title="How to Use the API">
      <div className="text-lg mb-6">
        <p className="mb-4">
          To get started with our API, you can use tools like <a href="https://httpie.io" className="text-gray-700 underline">HTTPie</a> to send POST requests. Below is a step-by-step guide to setting up your API request.
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg ">
          <h4 className="text-xl font-semibold mb-2">Step-by-Step Guide:</h4>
          <ol className="list-decimal ml-6 text-gray-700">
            <li className="mb-2">Include your API key in the <code className="bg-gray-700 px-1 text-white rounded">x-api-key</code> header.</li>
            <li className="mb-2">Send the request to our API endpoint: <code className="bg-gray-700 text-white px-1 rounded">https://dev.undrstnd-labs.com/api</code>.</li>
            <li>Include the required parameters in your request body.</li>
          </ol>
        </div>
      </div>

    
    </Section>
  );
};

export default HowToUse;
