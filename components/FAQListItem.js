"use client";

import { useState } from "react";

const FAQListItem = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b pb-2">
      <button
        className="font-bold text-left w-full py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {qa.question}
      </button>
      {isOpen && (
        <div className="text-sm text-base-content/80 mt-1 break-words max-w-full">
          {qa.answer}
        </div>
      )}
    </li>
  );
};

export default FAQListItem;
