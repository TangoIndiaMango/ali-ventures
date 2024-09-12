"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServicesCard from "../components/services-card";

const teamMembers = [
  {
    name: "John Doe",
    role: "Master Craftsman",
    image: "/worker1.jpg",
  },
  {
    name: "Aliyu Haruna",
    role: "Director",
    image: "/director.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Sustainability Expert",
    image: "/worker2.jpg",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <div className="bg-[#F5F0EB] text-[#502B21]">
      <motion.div
        className="bg-[#502B21] text-white py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h1 className="font-bold text-4xl mb-6" {...fadeInUp}>
            Our Story
          </motion.h1>
          <motion.p className="text-lg leading-relaxed" {...fadeInUp}>
            Welcome to ALI Ventures, where craftsmanship meets innovation in the
            world of woodwork. Founded on a passion for sustainable and
            high-quality wood products, we are dedicated to transforming natural
            materials into exquisite creations for your home and business. At
            ALI Ventures, our mission is to blend traditional woodworking
            techniques with modern design to deliver products that are both
            functional and aesthetically pleasing. With a commitment to
            environmental responsibility, we source our materials from
            sustainable forests, ensuring that every piece we create contributes
            to a greener planet. Our team of skilled artisans and designers
            brings years of expertise to every project, from custom furniture
            and cabinetry to unique wooden accents. We take pride in our
            meticulous attention to detail and our ability to turn your vision
            into reality. Whether you&apos;re looking to enhance your living
            space or elevate your business environment, ALI Ventures is your
            trusted partner in wood craftsmanship. Join us on a journey where
            quality, creativity, and sustainability come together to create
            exceptional wood products. Today, ALI Ventures Carpentry
            continues to create pieces that capture the essence of nature while
            showcasing the highest levels of craftsmanship.
          </motion.p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-rows-2 gap-12">
          <motion.div
            className="w-full flex flex-col md:flex-row gap-5 justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 relative w-full aspect-[5/3]">
              <Image
                src="/our-mision.png"
                alt="Our Mission"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Our Mission
              </h2>
              <p className="text-base md:text-lg">
                At ALI Ventures our mission is to blend the artistry
                of woodworking with the beauty of nature. We are dedicated to
                crafting woodwork that not only stands as functional pieces but
                also as stunning reflections of the natural world. Our
                commitment to sustainable practices ensures that every creation
                is not just a masterpiece but a responsible choice for our
                planet.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row gap-3 justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Our Vision
              </h2>
              <p className="text-base md:text-lg mb-6">
                We envision a world where the warmth and beauty of wood enhances
                every space, connecting people with nature in their daily lives.
                Our goal is to be at the forefront of innovative, sustainable
                woodworking, setting new standards in the industry for
                eco-friendly practices and design excellence. We strive to
                inspire a deeper appreciation for craftsmanship and the natural
                world, one piece at a time.
              </p>
            </div>
            <div className="relative w-full aspect-[5/3]">
              <Image
                src="/our-vision.png"
                alt="Our Vision"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-[#502B21] text-white rounded-lg my-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white text-[#502B21] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-lg">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="bg-[#995542] place-content-center place-items-center px-4 grid md:grid-cols-2 lg:grid-cols-4">
        <ServicesCard
          svgImage="tree.svg"
          title="Nature Inspired"
          description="We draw inspiration from the natural world, incorporating the essence of wood and its surroundings into each project."
        />
        <ServicesCard
          svgImage="saw.svg"
          title="Craftsmanship"
          description="Our skilled artisans bring decades of expertise to every piece, ensuring the highest quality and attention to detail."
        />
        <ServicesCard
          svgImage="sustainability.svg"
          title="Sustainability"
          description="We are committed to sustainable practices, using responsibly sourced materials to protect our environment."
        />
        <ServicesCard
          svgImage="precision.svg"
          title="Precision"
          description="From design to installation, our precision and commitment to excellence set us apart."
        />
      </div>
    </div>
  );
};

export default About;
