import React, { useState } from 'react';

const Faq = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="max-w-lg mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform ${
                index === activeIndex ? 'transform rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3.464A6 6 0 1 1 10 15.5a.5.5 0 0 1 0-1A5 5 0 1 0 10 4.464V7.5a.5.5 0 0 1-1 0V4.464a6 6 0 0 1 0 11.072V15.5a.5.5 0 0 1 1 0v-3.036a6 6 0 0 1 0-11.072V3.464z"
              />
            </svg>
          </div>
          {index === activeIndex && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};
