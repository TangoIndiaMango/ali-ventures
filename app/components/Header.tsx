/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MOBILE_NAV_ITEMS = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "About Us", href: "/about" },
  { id: 2, name: "Services", href: "/services" },
  { id: 3, name: "Portfolio", href: "/portfolio" },
  { id: 4, name: "Contact Us", href: "/contact" },
];

const DESKTOP_NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isActive = (path: any) => pathname === path;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
      className="flex justify-between items-center px-8 py-5 bg-[#502B21] text-white font-semibold text-xl"
    >
      <div className="overflow-y-hidden">
        <motion.div
          variants={hideNavItemsVariant}
          className="uppercase text-sm"
        >
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={70} height={80} />
          </Link>
        </motion.div>
      </div>
      <div className="overflow-y-hidden">
        <motion.div
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
          className="uppercase text-xs cursor-pointer md:hidden"
        >
          <HamburgerMenuIcon color="#ffffff" fontSize={24} />
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {DESKTOP_NAV_ITEMS.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`px-5 py-3 rounded-md text-md transition-all duration-300  ${
                  isActive(item.href)
                    ? "border border-amber-500"
                    : "border-transparent"
                }`}
                onClick={() => console.log(`clicked ${item.name}`)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isMobile && (
        <motion.div
          variants={mobileMenuVariant}
          className="fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-amber-900 md:hidden z-10"
        >
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
            className="self-end mt-9 mr-11 uppercase text-xs text-white bg-transparent border-none font-inherit cursor-pointer"
          >
            <XIcon />
          </motion.button>
          <motion.ul variants={ulVariant} className="list-none mt-10">
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li
                whileTap={{ scale: 0.95 }}
                key={navItem.id}
                className="my-5 overflow-y-hidden user-select-none hover:italic cursor-pointer"
              >
                <motion.div
                  variants={liVariant}
                  className="text-center capitalize text-3xl"
                >
                  <Link
                    href={navItem.href}
                    className="p-4 rounded-md text-md "
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {navItem.name}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={fadeInVariant}
            className="mt-20 flex flex-col md:flex-row px-4 items-center gap-5 justify-center"
          >
            <h5 className="font-bold">+234 80 3607 2340</h5>
            <h5 className="font-bold">aliyuharuna@yahoo.com</h5>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
