"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Precision Wood Cutting",
    description: "Get precise wood cutting for any construction project, from roofing sheets to structural components. Our advanced equipment ensures accuracy and efficiency for all your construction needs.",
    image: "/cutandchop.jpeg",
  },
  {
    id: 2,
    title: "Custom Wood Sizing",
    description: "Whether you need specific dimensions for framing, flooring, or other construction applications, we provide custom wood sizing to meet your exact specifications.",
    image: "/custom-wood-resize.jpeg",
  },
  {
    id: 3,
    title: "Roofing Sheets",
    description: "Specializing in cutting and supplying roofing sheets for various construction projects. Our durable wood sheets are designed to meet industry standards and provide reliable protection.",
    image: "/wooden-roof.webp",
  },
  {
    id: 4,
    title: "Timber for Structural Use",
    description: "We provide high-quality timber suitable for structural applications, including beams, joists, and columns. Our timber is carefully cut and prepared to ensure it meets your building requirements.",
    image: "/timber-structural-use.jpeg",
  },
  {
    id: 5,
    title: "Specialty Wood Cutting",
    description: "From intricate patterns to custom shapes, our specialty wood cutting services cater to unique project requirements, offering flexibility and precision for any design challenge.",
    image: "/specialty-wood-cutting.jpeg",
  },
  {
    id: 6,
    title: "Sustainable Wood Solutions",
    description: "We offer sustainably sourced wood options for all our projects, ensuring you receive eco-friendly materials that do not compromise on quality or performance.",
    image: "/sustainable-wood-solutions.jpg",
  },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <div className="bg-[#F5F0EB] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-[#502B21] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Wood Crafting Services
        </motion.h1>

        <motion.p
          className="text-lg text-[#502B21] mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At ALIVEntures, we offer a wide range of wood crafting services to bring warmth, beauty, and functionality to your space. Our team of skilled artisans combines traditional techniques with modern innovation to deliver exceptional results.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#502B21] mb-2">{service.title}</h2>
                <AnimatePresence>
                  {expandedService === service.id ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#502B21]"
                    >
                      {service.description}
                    </motion.p>
                  ) : (
                    <motion.p
                      initial={{ opacity: 1, height: 'auto' }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#502B21] line-clamp-2"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="mt-4 flex items-center text-[#502B21] hover:text-[#8B4513] transition-colors duration-300"
                >
                  {expandedService === service.id ? (
                    <>
                      Read Less <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#502B21] mb-4">Ready to start your wood project?</h2>
          <p className="text-lg text-[#502B21] mb-6">Contact us for a consultation and bring your vision to life.</p>
          <a
            href="#contact"
            className="inline-block bg-[#502B21] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#8B4513] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}