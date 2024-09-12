"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  { id: 1, text: "Exceptional craftsmanship! The attention to detail is remarkable.", author: "Emma S." },
  { id: 2, text: "Their work truly captures the essence of nature in every piece.", author: "Michael L." },
  { id: 3, text: "Sustainable and beautiful. Couldn't be happier with my purchase.", author: "Sarah T." },
  { id: 4, text: "The quality of their woodwork is unmatched. Highly recommended!", author: "David R." },
  { id: 5, text: "A perfect blend of traditional techniques and modern design.", author: "Olivia P." },
]

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[50vh] w-full">
      <Image
        src="/nature-bg.png"
        alt="Nature background with green leaves"
        fill
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-4xl aspect-[3/1] mb-8">
          <Image
            src="/overlay-image.png"
            alt="Woodworking tools on a wooden surface"
            fill
            className="rounded-lg shadow-xl"
          />
          <p className="absolute text-2xl text-black font-bold p-6 text-center">
              We believe in sustainable practices and creating pieces that will be cherished for generations.
            </p>
        </div>
        <div className="w-full max-w-2xl bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6 text-center"
            >
              <p className="text-lg text-gray-800 mb-4">&ldquo;{reviews[currentReview].text}&rdquo;</p>
              <p className="text-sm text-gray-600 font-semibold">- {reviews[currentReview].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}