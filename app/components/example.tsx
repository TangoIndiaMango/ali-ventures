"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XIcon } from "lucide-react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const MOBILE_NAV_ITEMS = [
  { id: 0, navTitle: "home" },
  { id: 1, navTitle: "showreel" },
  { id: 2, navTitle: "services" },
  { id: 3, navTitle: "about" },
  { id: 4, navTitle: "contact" }
]

const DESKTOP_NAV_ITEMS = [
  { name: "Home", href: "#" },
  { 
    name: "Services", 
    href: "#",
    submenu: [
      { name: "Service 1", href: "#" },
      { name: "Service 2", href: "#" },
      { name: "Service 3", href: "#" },
    ]
  },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
]

export default function Component() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  }

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }

  return (
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="flex justify-between px-11 py-9"
      >
        <div className="overflow-y-hidden">
          <motion.h1 
            variants={hideNavItemsVariant}
            className="uppercase text-sm"
          >
            Design Agency
          </motion.h1>
        </div>
        <div className="overflow-y-hidden">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="uppercase text-xs cursor-pointer md:hidden"
          >
            <HamburgerMenuIcon color="#ffffff" fontSize={24}/>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {DESKTOP_NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-white"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-amber-900 ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.submenu.map((subitem) => (
                            <a
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-beige hover:bg-gray-700"
                              role="menuitem"
                            >
                              {subitem.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>
        {isMobile && (
            <motion.div 
            variants={mobileMenuVariant} 
            className="fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-amber-900 md:hidden"
          >
            <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
              className="self-end mt-9 mr-11 uppercase text-xs text-white bg-transparent border-none font-inherit cursor-pointer"
            >
              <XIcon/>
            </motion.button>
            <motion.ul variants={ulVariant} className="list-none mt-10">
              {MOBILE_NAV_ITEMS.map(navItem => (
                <motion.li 
                  whileTap={{ scale: 0.95 }} 
                  key={navItem.id}
                  className="my-5 overflow-y-hidden user-select-none hover:italic cursor-pointer"
                >
                  <motion.div variants={liVariant} className="text-center capitalize text-3xl">
                    {navItem.navTitle}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInVariant} className="mt-20 flex">
              <h5 className="font-normal mr-10">+852 5650 2233</h5>
              <h5 className="font-normal">hi@designagency.com</h5>
            </motion.div>
          </motion.div>
        )}
      </motion.nav>
  )
}``