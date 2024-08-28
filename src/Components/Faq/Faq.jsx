import React, { useState } from 'react';
import './Faq.css';
import { useTranslation } from 'react-i18next';

const AccordionItem = ({ title, isOpen, onToggle, index, children }) => {
  return (
    <div className="accordion-item">
      <button
        onClick={() => onToggle(index)}
        className="accordion-title"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

function Faq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="container faq-container">
        <ul className="faq-list">
          <AccordionItem
            title={t('faq.fat_title_1')}
            isOpen={openIndex === 0}
            onToggle={handleToggle}
            index={0}
          >
            <p>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p>
          </AccordionItem>
          <AccordionItem
            title={t('faq.fat_title_2')}
            isOpen={openIndex === 1}
            onToggle={handleToggle}
            index={1}
          >
            <p>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p>
          </AccordionItem>
          <AccordionItem
            title={t('faq.fat_title_3')}
            isOpen={openIndex === 2}
            onToggle={handleToggle}
            index={2}
          >
            <p>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p>
          </AccordionItem>
          <AccordionItem
            title={t('faq.fat_title_4')}
            isOpen={openIndex === 3}
            onToggle={handleToggle}
            index={3}
          >
            <p>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p>
          </AccordionItem>
        </ul>
      </div>
    </div>
  );
}

export default Faq;
