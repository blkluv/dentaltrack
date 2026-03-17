"use client";
import { useContext } from "react";
import { motion, useTransform } from "framer-motion";
import { ScrollYProgressContext } from "../lib/context";

export default function GridSection() {
  const { scrollYProgress } = useContext<any>(ScrollYProgressContext);

  // Animation transforms for the text sections
  const titleOpacityA = useTransform(
    scrollYProgress,
    [0, 0.15, 0.29, 0.3],
    [0.6, 1, 1, 0.6]
  );
  const scaleA = useTransform(
    scrollYProgress,
    [0, 0.15, 0.29, 0.3],
    [0, 1, 1, 0],
    { clamp: false }
  );

  const titleOpacityB = useTransform(
    scrollYProgress,
    [0.3, 0.31, 0.39, 0.4],
    [0.6, 1, 1, 0.6]
  );
  const titleTranslateYB = useTransform(
    scrollYProgress,
    [0.3, 0.31, 0.39, 0.4],
    [70, -40, -40, -50]
  );
  const paragraphOpacityB = useTransform(
    scrollYProgress,
    [0.3, 0.31, 0.39, 0.4],
    [0, 1, 1, 0]
  );
  const paragraphTranslateYB = useTransform(
    scrollYProgress,
    [0.3, 0.31, 0.39, 0.4],
    [0, -40, -40, -50]
  );

  const titleOpacityC = useTransform(
    scrollYProgress,
    [0.4, 0.41, 0.49, 0.5],
    [0.6, 1, 1, 1]
  );
  const titleTranslateYC = useTransform(
    scrollYProgress,
    [0.4, 0.41, 0.49, 0.5],
    [0, -120, -120, -130]
  );
  const paragraphOpacityC = useTransform(
    scrollYProgress,
    [0.4, 0.41, 0.49, 0.5],
    [0, 1, 1, 1]
  );
  const paragraphTranslateYC = useTransform(
    scrollYProgress,
    [0.4, 0.41, 0.49, 0.5],
    [0, -120, -120, -130]
  );

  return (
    <div className="z-0 pb-16 sm:px-3 xl:px-6 2xl:px-0 sm:my-24" id="features">
      <div className="z-0 relative max-w-7xl m-auto border-b-2 sm:border-2 border-black sm:rounded-2xl bg-neutral-100 px-3 py-9 sm:p-9 lg:pb-12 sm:drop-shadow-[8px_8px_0px_#000000]">
        <div className="z-20">
          <div className="font-bold text-5xl sm:text-6xl lg:text-7xl max-w-3xl mb-10 tracking-[-0.016em]">
            Our Process
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:block">
            <motion.div className="mb-12">
              <motion.div
                style={{ opacity: titleOpacityA }}
                className="mb-1 text-3xl font-bold capitalize"
              >
                Audit
              </motion.div>
              <motion.p
                style={{ translateY: scaleA, opacity: scaleA }}
                className="max-w-lg text-lg"
              >
                We audit your existing paid ads, SEO and social media
                presence to identify where you stand in comparison to
                your top 3 competitors near you.
              </motion.p>
            </motion.div>

            <motion.div className="mb-12">
              <motion.div
                style={{ opacity: titleOpacityB, translateY: titleTranslateYB }}
                className="mb-1 text-3xl font-bold capitalize"
              >
                Clients
              </motion.div>
              <motion.p
                style={{
                  translateY: paragraphTranslateYB,
                  opacity: paragraphOpacityB,
                }}
                className="max-w-lg text-lg"
              >
                Once we put into action your new viral dental marketing strategy
                the leads start coming in and we help you convert them into
                paying patients.
              </motion.p>
            </motion.div>

            <div className="">
              <motion.div
                style={{ opacity: titleOpacityC, translateY: titleTranslateYC }}
                className="mb-1 text-3xl font-bold capitalize"
              >
                Bookings
              </motion.div>
              <motion.p
                style={{
                  translateY: paragraphTranslateYC,
                  opacity: paragraphOpacityC,
                }}
                className="max-w-lg text-lg"
              >
                More bookings and free patient content: We create a TikTok AR effect
                for your dental office that pays patients when their videos go viral.
              </motion.p>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="flex flex-col lg:hidden">
            <div className="relative mb-10">
              <div className="mb-2 text-3xl font-bold capitalize sm:text-4xl lg:mb-1">
                Audit
              </div>
              <p className="text-xl lg:mb-0">
                We audit your existing paid ads, SEO and social media
                presence to identify where you stand in comparison to
                your top 3 competitors near you.
              </p>
            </div>

            <div className="mb-10">
              <div className="mb-2 text-3xl font-bold capitalize sm:text-4xl lg:mb-1">
                Clients
              </div>
              <p className="text-xl lg:mb-0">
                Once we put into action your new viral dental marketing strategy
                the leads start coming in and we help you convert them into
                paying patients.
              </p>
            </div>

            <div className="">
              <div className="mb-2 text-3xl font-bold capitalize sm:text-4xl lg:mb-1">
                Bookings
              </div>
              <p className="text-xl lg:mb-0">
                More bookings and free patient content: We create a TikTok AR effect
                for your dental office that pays patients when their videos go viral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}