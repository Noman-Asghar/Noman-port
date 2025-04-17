"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utlis";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client
  }, []);

  if (!isClient) {
    return null; // Prevent SSR issues
  }

  const { scrollYProgress } = useScroll({
    container: containerRef.current ? containerRef : undefined, // Bind only if containerRef is initialized
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((current) => {
      if (typeof current === "number") {
        const previous = scrollYProgress.getPrevious() || 0;
        const direction = current - previous;

        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          setVisible(direction < 0);
        }
      }
    });

    return () => {
      unsubscribe(); // Cleanup listener
    };
  }, [scrollYProgress]);

  return (
    <div ref={containerRef}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] bg-black-100 rounded-full shadow-lg z-[5000] px-10 py-5 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};