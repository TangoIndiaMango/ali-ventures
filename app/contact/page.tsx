/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MapEmbed from "../components/map-embed";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#F5F0EB] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#502B21] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#502B21] mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#502B21] mr-4" />
                <p className="text-[#502B21]">(+234) 8036 07 2340</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#502B21] mr-4" />
                <p className="text-[#502B21]">aliyuharuna@yahoo.com</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#502B21] mr-4" />
                <p className="text-[#502B21]">Road A2 Oba</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-[#502B21] mr-4" />
                <p className="text-[#502B21]">
                  Mon-Fri: 9am-6pm, Sat: 10am-4pm
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-[#502B21] mb-6">
                Visit Our Workshop
              </h2>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/architecture-wood.jpg"
                  alt="ALIVEntures Workshop"
                  fill
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-[#502B21] mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#502B21] mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-[#D2B48C] focus:outline-none focus:ring-2 focus:ring-[#502B21]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#502B21] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-[#D2B48C] focus:outline-none focus:ring-2 focus:ring-[#502B21]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#502B21] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-[#D2B48C] focus:outline-none focus:ring-2 focus:ring-[#502B21]"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#502B21] text-white py-3 rounded-md font-semibold hover:bg-[#8B4513] transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#502B21] mb-6 text-center">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden h-96">
            <MapEmbed />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
