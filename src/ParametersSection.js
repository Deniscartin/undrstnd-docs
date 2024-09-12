import React from 'react';
import { FaBookmark, FaIdBadge,FaAndroid, FaFileAlt, FaComments } from 'react-icons/fa';

const ParameterSection = () => {
  return (
    <section id="parameters" className="mb-8 p-6  rounded-lg ">
      <h2 className="text-3xl font-bold mb-4 ">Parameters:</h2>
      <p className="mb-4 text-gray-600">Here are the key parameters for interacting with this endpoint:</p>
      <ul className="list-disc pl-6 space-y-4">
        <li className="flex items-start space-x-2">
          <FaBookmark className=" mt-1" />
          <div>
            <span className="font-semibold">stream (Boolean):</span>
            <p className=" bg-gray-100 p-2 rounded">
              Indicates whether the response should be streamed. Set to 
              <span className="bg-gray-200 rounded px-2 py-1 ml-1 text-red-600 font-mono">true</span> 
              for streaming or 
              <span className="bg-gray-200 rounded px-2 py-1 ml-1 text-red-600 font-mono">false</span> 
              for a regular response.
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <FaIdBadge className=" mt-1" />
          <div>
            <span className="font-semibold">modelId (string):</span>
            <p className=" bg-gray-100 p-2 rounded">
              The ID of the model you wish to use.
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <FaAndroid className=" mt-1" />
          <div>
            <span className="font-semibold">system (string):</span>
            <p className=" bg-gray-100 p-2 rounded">
              A system message that is part of the prompt context (optional).
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <FaFileAlt className=" mt-1" />
          <div>
            <span className="font-semibold">prompt (string):</span>
            <p className=" bg-gray-100 p-2 rounded">
              A simple text input. You can either use 
              <span className="bg-gray-200 rounded px-2 py-1 ml-1 text-red-600 font-mono">prompt</span> 
              or 
              <span className="bg-gray-200 rounded px-2 py-1 ml-1 text-red-600 font-mono">messages</span>, 
              but not both.
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <FaComments className=" mt-1" />
          <div>
            <span className="font-semibold">messages (array):</span>
            <p className=" bg-gray-100 p-2 rounded">
              A list of message objects for a conversational history. Supports full conversation context without hallucinations. You can either use 
              <span className="bg-gray-200 rounded px-2 py-1 ml-1 text-red-600 font-mono">prompt</span> 
              or 
              <span className="bg-gray-200 rounded px-2 py-1 ml-1 text-red-600 font-mono">messages</span>, 
              but not both.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ParameterSection;
