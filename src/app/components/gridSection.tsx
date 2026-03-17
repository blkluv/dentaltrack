"use client";
import { useContext } from "react";
import { motion, useTransform } from "framer-motion";
import { ScrollYProgressContext } from "../lib/context";

export default function GridSection() {
  const { scrollYProgress } = useContext<any>(ScrollYProgressContext);

  // Text Animations
  const titleOpacityA = useTransform(scrollYProgress, [0, 0.15, 0.29, 0.3], [0.6, 1, 1, 0.6]);
  const scaleA = useTransform(scrollYProgress, [0, 0.15, 0.29, 0.3], [0, 1, 1, 0]);
  
  const titleOpacityB = useTransform(scrollYProgress, [0.3, 0.31, 0.39, 0.4], [0.6, 1, 1, 0.6]);
  const titleTranslateYB = useTransform(scrollYProgress, [0.3, 0.31, 0.39, 0.4], [70, -40, -40, -50]);
  
  const titleOpacityC = useTransform(scrollYProgress, [0.4, 0.41, 0.49, 0.5], [0.6, 1, 1, 1]);
  const titleTranslateYC = useTransform(scrollYProgress, [0.4, 0.41, 0.49, 0.5], [0, -120, -120, -130]);

  // SVG Alignment Animation
  // This moves the SVG from its starting position (Audit) down to Clients and then to Bookings
  // Adjust the 'px' values (0, 150, 300) to match the physical height of your text blocks
  const imgMoveY = useTransform(
    scrollYProgress,
    [0.15, 0.31, 0.45], // Breakpoints for Audit, Clients, and Bookings
    [0, 160, 320]       // Vertical offset in pixels
  );

  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.6],
    [0, 1, 1, 0]
  );

  return (
    <div className="z-0 pb-16 sm:px-3 xl:px-6 2xl:px-0 sm:my-24" id="features">
      <div className="z-0 relative max-w-7xl m-auto border-b-2 sm:border-2 border-black sm:rounded-2xl bg-neutral-100 px-3 py-9 sm:p-9 lg:pb-12 sm:drop-shadow-[8px_8px_0px_#000000]">
        
        {/* Animated Desktop Side Graphic */}
        <div className="absolute hidden w-1/3 pointer-events-none lg:block right-12 top-40">
          <motion.div 
            style={{ y: imgMoveY, opacity: imgOpacity }}
            className="flex justify-center"
          >
            <img 
              src="/time-check.svg" 
              alt="Process Graphic" 
              className="w-full max-w-[280px] h-auto drop-shadow-xl"
            />
          </motion.div>
        </div>

        <div className="relative z-20">
          <div className="font-bold text-5xl sm:text-6xl lg:text-7xl max-w-3xl mb-12 tracking-[-0.016em]">
            Our Process
          </div>

          <div className="hidden lg:block">
            {/* AUDIT */}
            <motion.div className="h-32 mb-24">
              <motion.div style={{ opacity: titleOpacityA }} className="mb-1 text-4xl font-bold capitalize">
                Audit
              </motion.div>
              <motion.p style={{ translateY: scaleA, opacity: scaleA }} className="max-w-lg text-lg text-neutral-600">
                We audit your existing paid ads, SEO and social media presence to identify where you stand in comparison to your top 3 competitors near you.
              </motion.p>
            </motion.div>

            {/* CLIENTS */}
            <motion.div className="h-32 mb-24">
              <motion.div style={{ opacity: titleOpacityB, translateY: titleTranslateYB }} className="mb-1 text-4xl font-bold capitalize">
                Clients
              </motion.div>
              <motion.p style={{ translateY: paragraphTranslateYB, opacity: paragraphOpacityB }} className="max-w-lg text-lg text-neutral-600">
                Once we put into action your new viral dental marketing strategy the leads start coming in and we help you convert them into paying patients.
              </motion.p>
            </motion.div>

            {/* BOOKINGS */}
            <div className="h-32">
              <motion.div style={{ opacity: titleOpacityC, translateY: titleTranslateYC }} className="mb-1 text-4xl font-bold capitalize">
                Bookings
              </motion.div>
              <motion.p style={{ translateY: paragraphTranslateYC, opacity: paragraphOpacityC }} className="max-w-lg text-lg text-neutral-600">
                More bookings and free patient content: We create a TikTok AR effect for your dental office that pays patients when their videos go viral.
              </motion.p>
            </div>
          </div>

          {/* Mobile Version stays static for better readability */}
          <div className="flex flex-col space-y-12 lg:hidden">
             {/* ... mobile text points ... */}
          </div>
        </div>
      </div>
    </div>
  );
}