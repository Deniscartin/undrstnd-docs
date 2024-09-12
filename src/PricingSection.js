import React from 'react';
import Modal from './Modal'; // Import the Modal component

const Pricing = () => {
  const [selectedModel, setSelectedModel] = React.useState(null);

  const models = [
    {
      id: "distil-whisper-large-v3-en",
      active: true,
      name: "Distil Whisper Large v3 English",
      description: "Distil-Whisper is a smaller version of the Whisper model that was proposed in the paper Robust Knowledge Distillation via Large-Scale Pseudo Labelling. This English version of Distil-Whisper is optimized for English speech recognition.",
      developer: "@distil-whisper",
      provider: "HuggingFace",
      source: "https://huggingface.co/distil-whisper/distil-large-v3",
      tags: [
        "distil-whisper",
        "large",
        "v3",
        "english"
      ],
      maxFileSize: 26214400,
      pricing: 0.052
    },
    {
      id: "gemma2-9b-it",
      active: true,
      name: "Gemma 2 9B Italian",
      description: "Gemma 2 is a large-scale multilingual language model developed by Google. This Italian version of Gemma 2 is optimized for Italian language tasks.",
      developer: "@google",
      provider: "HuggingFace",
      source: "https://huggingface.co/google/gemma-2-9b-it",
      tags: [
        "gemma",
        "9b",
        "italian"
      ],
      maxContextWindow: 8192,
      pricing: 0.52
    },
    {
      id: "gemma-7b-it",
      active: true,
      name: "Gemma 7B Italian",
      description: "Gemma is a large-scale multilingual language model developed by Google. This Italian version of Gemma is optimized for Italian language tasks.",
      developer: "@google",
      provider: "HuggingFace",
      source: "https://huggingface.co/google/gemma-1.1-7b-it",
      tags: [
        "gemma",
        "7b",
        "italian"
      ],
      maxContextWindow: 8192,
      pricing: 0.182
    },
    {
      id: "llama3-groq-70b-8192-tool-use-preview",
      active: true,
      name: "Llama 3 Groq 70B Tool Use (Preview)",
      description: "Llama 3 Groq is a version of the Llama model developed by Groq. This 70B parameter version of Llama 3 Groq is optimized for tool use tasks.",
      developer: "@groq",
      provider: "HuggingFace",
      source: "https://huggingface.co/Groq/Llama-3-Groq-70B-Tool-Use",
      tags: [
        "llama",
        "3",
        "groq",
        "70b",
        "tool-use",
        "preview"
      ],
      maxContextWindow: 8192,
      pricing: 2.314
    },
    {
      id: "llama3-groq-8b-8192-tool-use-preview",
      active: true,
      name: "Llama 3 Groq 8B Tool Use (Preview)",
      description: "Llama 3 Groq is a version of the Llama model developed by Groq. This 8B parameter version of Llama 3 Groq is optimized for tool use tasks.",
      developer: "@groq",
      provider: "HuggingFace",
      source: "https://huggingface.co/Groq/Llama-3-Groq-8B-Tool-Use",
      tags: [
        "llama",
        "3",
        "groq",
        "8b",
        "tool-use",
        "preview"
      ],
      maxContextWindow: 8192,
      pricing: 0.494
    },
    {
      id: "llama-3.1-405b",
      active: false,
      name: "Llama 3.1 405B",
      description: "Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture.",
      developer: "@meta-llama",
      provider: "HuggingFace",
      source: "https://huggingface.co/meta-llama/Meta-Llama-3.1-405B",
      tags: [
        "llama",
        "3.1",
        "405b"
      ],
      maxContextWindow: 131072,
      pricing: 5.2
    },
    {
      id: "llama-3.1-70b-versatile",
      active: true,
      name: "Llama 3.1 70B Versatile",
      description: "Llama 3.1 is a version of the Llama model developed by Meta. This 70B parameter version of Llama 3.1 is optimized for a variety of tasks.",
      developer: "@meta-llama",
      provider: "Github",
      source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
      tags: [
        "llama",
        "3.1",
        "70b",
        "versatile"
      ],
      maxContextWindow: 131072,
      pricing: 2.314
    },
    {
      id: "llama-3.1-8b-instant",
      active: true,
      name: "Llama 3.1 8B Instant",
      description: "Llama 3.1 is a version of the Llama model developed by Meta. This 8B parameter version of Llama 3.1 is optimized for fast inference.",
      developer: "@meta-llama",
      provider: "Github",
      source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
      tags: [
        "llama",
        "3.1",
        "8b",
        "instant"
      ],
      maxContextWindow: 131072,
      pricing: 0.598
    },
    {
      id: "llama-guard-3-8b",
      active: true,
      name: "Llama Guard 3 8B",
      description: "Llama Guard 3 is a version of the Llama model developed by Meta. This 8B parameter version of Llama Guard 3 is optimized for security and privacy tasks.",
      developer: "@meta-llama",
      provider: "HuggingFace",
      source: "https://huggingface.co/meta-llama/Llama-Guard-3-8B",
      tags: [
        "llama",
        "guard",
        "3",
        "8b"
      ],
      maxContextWindow: 8192,
      pricing: 0.52
    },
    {
      id: "llama3-70b-8192",
      active: true,
      name: "Meta Llama 3 70B",
      description: "Llama 3 is a version of the Llama model developed by Meta. This 70B parameter version of Llama 3 is optimized for a variety of tasks.",
      developer: "@meta-llama",
      provider: "HuggingFace",
      source: "https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct",
      tags: [
        "llama",
        "3",
        "70b"
      ],
      maxContextWindow: 8192,
      pricing: 2.054
    },
    {
      id: "llama3-8b-8192",
      active: true,
      name: "Meta Llama 3 8B",
      description: "Llama 3 is a version of the Llama model developed by Meta. This 8B parameter version of Llama 3 is optimized for a variety of tasks.",
      developer: "@meta-llama",
      provider: "HuggingFace",
      source: "https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct",
      tags: [
        "llama",
        "3",
        "8b"
      ],
      maxContextWindow: 8192,
      pricing: 0.208
    },
    {
      id: "mixtral-8x7b-32768",
      active: true,
      name: "Mixtral 8x7B",
      description: "Mixtral is a large-scale multilingual language model developed by Mistral. This 8x7B parameter version of Mixtral is optimized for a variety of tasks.",
      developer: "@mistralai",
      provider: "HuggingFace",
      source: "https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1",
      tags: [
        "mixtral",
        "8x7b"
      ],
      maxContextWindow: 32768,
      pricing: 0.624
    },
    {
      id: "whisper-large-v3",
      active: true,
      name: "Whisper Large v3",
      description: "Whisper is a large-scale speech recognition model developed by OpenAI. This version of Whisper is optimized for speech recognition tasks.",
      developer: "@openai",
      provider: "OpenAI",
      source: "https://huggingface.co/openai/whisper-large-v3",
      tags: [
        "whisper",
        "large",
        "v3"
      ],
      maxFileSize: 26214400,
      pricing: 0.061
    }
  ];
  

  const handleRowClick = (model) => {
    setSelectedModel(model);
  };

  const handleCloseModal = () => {
    setSelectedModel(null);
  };

  return (

      <div id="pricing" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 font-bold">
              <th className="py-3 px-6 text-left">Model Name</th>
              <th className="py-3 px-6 text-left">Pricing (EUR)</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr
                key={model.id}
                className="bg-gray-50 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(model)}
              >
                <td className="py-3 px-6">{model.name}</td>
                <td className="py-3 px-6">€{model.pricing.toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
    
        {selectedModel && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-2xl font-bold mb-2">{selectedModel.name}</h2>
            <p className="mb-2"><strong>Description:</strong> {selectedModel.description}</p>
            <p className="mb-2"><strong>Developer:</strong> {selectedModel.developer}</p>
            <p className="mb-2"><strong>Provider:</strong> {selectedModel.provider}</p>
            <p className="mb-2"><strong>Source:</strong> <a href={selectedModel.source} target="_blank" rel="noopener noreferrer" className="text-blue-500">{selectedModel.source}</a></p>
            <p className="mb-2"><strong>Tags:</strong> {selectedModel.tags.join(', ')}</p>
            <p className="mb-2"><strong>Max File Size:</strong> {selectedModel.maxFileSize ? `${selectedModel.maxFileSize / 1024 / 1024} MB` : 'N/A'}</p>
            <p className="mb-2"><strong>Pricing:</strong> €{selectedModel.pricing.toFixed(3)}</p>
          </Modal>
        )}
      </div>
        
  );
};

export default Pricing;
