"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    title: "Material Selection",
    description: "We carefully select the finest sustainable woods, considering grain, color, and durability for each unique project.",
    image: "/material-selection.jpeg"
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "Our expert craftsmen create detailed designs, blending traditional techniques with modern aesthetics to suit your needs.",
    image: "/chopandplan.jpeg"
  },
  {
    id: 3,
    title: "Precision Cutting",
    description: "Using state-of-the-art tools, we cut and shape the wood with utmost precision, ensuring every piece fits perfectly.",
    image: "/cutandchop.jpeg"
  },
  {
    id: 4,
    title: "Skilled Craftsmanship",
    description: "Our artisans apply their expertise in joinery, carving, and assembly, bringing the design to life with meticulous attention to detail.",
    image: "/skilledpersons.jpeg"
  },
  {
    id: 5,
    title: "Finishing Touches",
    description: "We apply high-quality finishes to protect the wood and enhance its natural beauty, ensuring longevity and a stunning appearance.",
    image: "/arrangedprod.jpeg"
  }
]

export default function WoodCraftingProcess() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
  }

  return (
    <section className="py-16 bg-[#F5F0EB]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#502B21] mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Wood Crafting Process
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={processSteps[currentStep].image}
                    alt={processSteps[currentStep].title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-100 object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold text-[#502B21] mb-4">
                    {processSteps[currentStep].title}
                  </h3>
                  <p className="text-[#502B21] mb-4">
                    {processSteps[currentStep].description}
                  </p>
                  <div className="text-[#502B21] font-semibold">
                    Step {currentStep + 1} of {processSteps.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevStep}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-[#502B21] hover:bg-[#D2B48C] transition duration-300"
            aria-label="Previous step"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextStep}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-[#502B21] hover:bg-[#D2B48C] transition duration-300"
            aria-label="Next step"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full ${
                currentStep === index ? 'bg-[#502B21]' : 'bg-[#D2B48C]'
              } transition duration-300`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}