"use client";
import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    content: string;
    isOpen: boolean;
    toggleAccordion: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordionItem ${isOpen ? 'open' : ''}`}>
      <div className="flex-row accordionTitle" onClick={toggleAccordion}>
        <h4>{title}</h4>
        <span className="circle"><i className="fa-regular fa-plus"></i></span>
      </div>
        <div className="accordionContent">
          <p>{content}</p>
        </div>
    </div>
  );
};

export default Accordion;
 