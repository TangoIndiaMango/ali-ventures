/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of wood do you work with?",
    answer: "We work with a variety of woods including oak, maple, walnut, cherry, and pine. We also source exotic woods for special projects upon request."
  },
  {
    question: "Do you offer custom designs?",
    answer: "Absolutely! We specialize in custom designs tailored to our clients' specific needs and preferences. We'll work closely with you to bring your vision to life."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the complexity and size of the work. Small pieces might take 2-3 weeks, while larger custom furniture could take 6-8 weeks. We'll provide a more accurate timeline during our initial consultation."
  },
  {
    question: "Do you offer delivery and installation services?",
    answer: "Yes, we offer both delivery and installation services for our products. We ensure that your piece is safely transported and properly set up in your space."
  },
  {
    question: "What is your warranty policy?",
    answer: "We stand behind the quality of our work. All our products come with a 1-year warranty against defects in materials and workmanship. For specific warranty details, please contact us."
  }
];

const FAQItem = ({ question, answer }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E28268]">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-amber-900">{question}</span>
        {isOpen ? <ChevronUp className="text-amber-700" /> : <ChevronDown className="text-amber-700" />}
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-amber-800">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;