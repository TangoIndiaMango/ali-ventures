"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "construction", name: "Construction Projects" },
  { id: "custom", name: "Custom Woodwork" },
  { id: "structural", name: "Structural Timber" },
  { id: "roofing", name: "Roofing Solutions" },
  { id: "sustainable", name: "Sustainable Practices" },
  { id: 'cutting', name: 'Wood Cutting' },
  { id: 'machine', name: 'Machine Work' },
  { id: 'trees', name: 'Our Trees' },
];

const portfolioItems = [
  // Construction Projects
  { id: 1, category: 'construction', image: '/construction-project1.jpeg', title: 'Commercial Building Framework' },
  { id: 2, category: 'construction', image: '/construction-project2.jpeg', title: 'Residential Framing' },
  { id: 3, category: 'construction', image: '/construction-project3.jpg', title: 'Office Space Renovation' },
  { id: 4, category: 'construction', image: '/construction-project4.jpeg', title: 'Industrial Facility Framework' },

  // Custom Woodwork
  { id: 5, category: 'custom', image: '/wood-furniture.webp', title: 'Bespoke Wooden Panels' },
  { id: 6, category: 'custom', image: '/custom-woodwork2.webp', title: 'Unique Wood Carvings' },
  { id: 7, category: 'custom', image: '/custom-woodwork3.jpg', title: 'Custom Shelving Units' },
  { id: 8, category: 'custom', image: '/custom-woodwork4.jpg', title: 'Tailored Wood Furniture' },

  // Structural Timber
  { id: 9, category: 'structural', image: '/arrangedprod.jpeg', title: 'Reinforced Timber Beams' },
  { id: 10, category: 'structural', image: '/structural-timber2.jpg', title: 'Load-Bearing Columns' },
  { id: 11, category: 'structural', image: '/structural-timber3.jpeg', title: 'Timber Frame Construction' },
  { id: 12, category: 'structural', image: '/structural-timber4.jpeg', title: 'Sturdy Roof Trusses' },

  // Roofing Solutions
  { id: 13, category: 'roofing', image: '/roofing-solutions1.jpg', title: 'Wooden Roofing Sheets Installation' },
  { id: 14, category: 'roofing', image: '/roofing-solutions2.jpeg', title: 'Custom-Cut Roofing Panels' },
  { id: 15, category: 'roofing', image: '/roofing-solutions3.jpeg', title: 'Durable Roof Decking' },
  { id: 16, category: 'roofing', image: '/roofing-solutions4.jpeg', title: 'Weather-Resistant Roof Sections' },

  // Sustainable Practices
  { id: 19, category: 'sustainable', image: '/sustainable-practices3.jpeg', title: 'Wood Products' },
  { id: 20, category: 'sustainable', image: '/sustainable-wood-solutions.jpg', title: 'Green Building Materials' },
  { id: 17, category: 'sustainable', image: '/sustainable-practices1.webp', title: 'Eco-Friendly Timber Sourcing' },
  { id: 18, category: 'sustainable', image: '/sustainable-practices2.png', title: 'Sustainable Forest Management' },

  // Wood Cutting
  { id: 21, category: 'cutting', image: '/wood-cutting1.jpeg', title: 'Precision Cutting for Framework' },
  { id: 23, category: 'cutting', image: '/wood-cutting3.jpeg', title: 'Detailed Wood Cutting Process' },
  { id: 24, category: 'cutting', image: '/cutandchop.jpeg', title: 'High-Precision Wood Slices' },
  { id: 22, category: 'cutting', image: '/wood-cutting2.jpeg', title: 'Custom Sizing for Construction' },

  // Machine Work
  { id: 25, category: 'machine', image: '/machine-work1.jpg', title: 'CNC Router in Action' },
  { id: 26, category: 'machine', image: '/machine-work2.jpeg', title: 'Advanced Wood Cutting Machinery' },
  { id: 27, category: 'machine', image: '/machine-work3.jpg', title: 'High-Tech Wood Shaping' },
  { id: 28, category: 'machine', image: '/machine-work4.jpg', title: 'Precision Milling Equipment' },

  // Our Trees
  { id: 29, category: 'trees', image: '/our-trees1.jpeg', title: 'Sustainable Forest Overview' },
  { id: 30, category: 'trees', image: '/our-trees2.jpg', title: 'Healthy Tree Growth' },
  { id: 31, category: 'trees', image: '/our-trees3.jpg', title: 'Responsible Harvesting Practices' },
  { id: 32, category: 'trees', image: '/sustainable-practices3.jpeg', title: 'Forest Management Techniques' },
];


export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(0);

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#F5F0EB] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#502B21] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Woodcraft Portfolio
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "all"
                ? "bg-[#502B21] text-white"
                : "bg-[#D2B48C] text-[#502B21]"
            } transition duration-300`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? "bg-[#502B21] text-white"
                  : "bg-[#D2B48C] text-[#502B21]"
              } transition duration-300`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(0)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition duration-300 transform hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredItem === item.id ? 1 : 0,
                    y: hoveredItem === item.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                >
                  <h3 className="text-white text-xl font-semibold text-center px-4">
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
