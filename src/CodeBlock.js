import React, { useState } from 'react';

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#282a36] text-[#f8f8f2] rounded-lg p-4 mb-6">
      <pre className="whitespace-pre-wrap">{code}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded hover:bg-gray-700"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeBlock;
