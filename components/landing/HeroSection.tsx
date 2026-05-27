'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeDownVariant = {
    initial: { opacity: 0, y: -20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const fadeUpVariant = {
    initial: { opacity: 0, y: 32 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const slideUpVariant = {
    initial: { y: '110%' },
    animate: (custom: number) => ({
      y: 0,
      transition: {
        delay: 0.4 + custom * 0.14,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className={`relative min-h-screen flex flex-col ${inter.className} text-black uppercase tracking-widest font-semibold`}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <nav className="flex items-center justify-end px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
          {/* Hamburger */}
          <motion.button
            custom={5}
            initial="initial"
            animate="animate"
            variants={fadeDownVariant}
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 shrink-0"
          >
            <span className="w-4 h-0.5 bg-white"></span>
            <span className="w-4 h-0.5 bg-white"></span>
            <span className="w-4 h-0.5 bg-white"></span>
          </motion.button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-white flex flex-col px-5 pt-5 pb-8"
            >
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <a
                href="#work"
                className="mt-auto flex items-center gap-2 text-xl font-semibold text-[#5E0ED7]"
              >
                JOIN THE CLUB <ArrowUpRight size={24} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Row (middle section) */}
        <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
          <div className="flex flex-row items-center gap-5 sm:gap-8 md:gap-10 text-right">
            {[
              { number: '300', label: 'ACTIVE\nMEMBERS', custom: 2 },
              { number: '200', label: 'OPEN SOURCE\nPROJECTS', custom: 3 },
              { number: '100', label: 'HACKATHONS\nWON', custom: 4 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                custom={stat.custom}
                initial="initial"
                animate="animate"
                variants={fadeUpVariant}
                className="flex flex-col items-end"
              >
                <div className="font-semibold flex items-start" style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}>
                  <span className="text-[#5E0ED7] text-[0.5em] leading-[1.2] mt-[0.1em]">+</span>
                  <span className="text-black leading-none">{stat.number}</span>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-black tracking-widest font-semibold whitespace-pre-line leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
          
          {/* Row A */}
          <div className="flex flex-row items-center justify-between gap-4">
            <motion.p
              custom={5}
              initial="initial"
              animate="animate"
              variants={fadeUpVariant}
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-black max-w-[130px] sm:max-w-[160px] md:max-w-xs uppercase leading-relaxed m-0"
            >
              Empowering Minds <br />
              Through Code <br />
              And Innovation
            </motion.p>

            <motion.a
              href="#work"
              custom={6}
              initial="initial"
              animate="animate"
              variants={fadeUpVariant}
              className="flex items-center gap-1 sm:gap-2 text-base sm:text-xl md:text-2xl font-semibold text-[#5E0ED7] whitespace-nowrap uppercase"
            >
              JOIN THE CLUB <ArrowUpRight className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
            </motion.a>
          </div>

          {/* Row B */}
          <div className="flex flex-row items-end justify-between gap-3 sm:gap-4">
            <motion.div
              custom={7}
              initial="initial"
              animate="animate"
              variants={fadeUpVariant}
              className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0 text-left md:text-right"
            >
              <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-relaxed m-0">
                A community of developers dedicated to mastering modern web technologies and software engineering.
              </p>
            </motion.div>

            <div className="flex flex-col items-end">
              {['Code', 'Create', 'Deploy'].map((word, index) => (
                <div key={word} className="overflow-hidden leading-[0.88]">
                  <motion.div
                    custom={index}
                    initial="initial"
                    animate="animate"
                    variants={slideUpVariant}
                    className="font-semibold uppercase text-black m-0 p-0"
                    style={{ fontSize: 'clamp(2rem, 9vw, 9rem)' }}
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
