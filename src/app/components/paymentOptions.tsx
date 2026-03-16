"use client";
import { useContext, useEffect, useRef, useState } from "react";
import PlanCard from "./cards/planCard";
import { PricingScrollPositionContext } from "../lib/context";

// ✨ ADD YOUR TIERS HERE ✨
const monthlyPlans = [
  {
    title: "The Foundation",
    price: "2,500",
    yearlyPrice: "30,000",
    type: "month",
    stripeLink: "https://buy.stripe.com/8x28wPfdff5k1Kn9vj5wI1J",
    features: [
      "Complete marketing audit & strategy",
      "Local SEO optimization",
      "Google Business Profile management",
      "5 targeted blog posts/month",
      "Monthly performance reporting",
      "Best for: Single-location practices ready to grow",
    ],
    disabled: false,
    cta: "SUBSCRIBE",
  },
  {
    title: "The Accelerator",
    price: "4,500",
    yearlyPrice: "54,000",
    type: "month",
    stripeLink: "https://buy.stripe.com/eVq6oHc13f5k88L0YN5wI1K",
    features: [
      "Everything in Foundation",
      "Google Ads management (high-value procedure targeting)",
      "TikTok/Instagram content creation (4 posts/month)",
      "Review generation campaign",
      "Best for: Growing practices ready to scale",
    ],
    disabled: false,
    cta: "SUBSCRIBE",
  },
  {
    title: "The Dominator",
    price: "7,500",
    yearlyPrice: "90,000",
    type: "month",
    stripeLink: "https://buy.stripe.com/28E3cvaWZ6yO1Kn9vj5wI1L",
    features: [
      "Everything in Accelerator",
      "Multi-location management (up to 3 offices)",
      "TikTok AR Effect for gaming",
      "TikTok AR Effect for backdrop",
      "TikTok AR Effect for Video reviews",
      "Custom viral video content office content creation (4 posts/month)",
      "Best for: Multi-location practices and DSOs",
    ],
    disabled: false,
    cta: "SUBSCRIBE",
  },
];

const yearlyPlans = [
  {
    title: "The Foundation",
    price: "30,000",
    monthlyPrice: "2,500/mo",
    type: "year",
    stripeLink: "https://buy.stripe.com/8x28wPfdff5k1Kn9vj5wI1J",
    features: [
      "Complete marketing audit & strategy",
      "Local SEO optimization",
      "Google Business Profile management",
      "5 targeted blog posts/month",
      "Monthly performance reporting",
      "Best for: Single-location practices ready to grow",
      "✨ Save $6,000 vs. monthly",
    ],
    disabled: false,
    cta: "SUBSCRIBE",
  },
  {
    title: "The Accelerator",
    price: "54,000",
    monthlyPrice: "4,500/mo",
    type: "year",
    stripeLink: "https://buy.stripe.com/eVq6oHc13f5k88L0YN5wI1K",
    features: [
      "Everything in Foundation",
      "Google Ads management (high-value procedure targeting)",
      "TikTok/Instagram content creation (4 posts/month)",
      "Review generation campaign",
      "Best for: Growing practices ready to scale",
      "✨ Save $10,800 vs. monthly",
    ],
    disabled: false,
    cta: "SUBSCRIBE",
  },
  {
    title: "The Dominator",
    price: "90,000",
    monthlyPrice: "7,500/mo",
    type: "year",
    stripeLink: "https://buy.stripe.com/28E3cvaWZ6yO1Kn9vj5wI1L",
    features: [
      "Everything in Accelerator",
      "Multi-location management (up to 3 offices)",
      "Reputation management dashboard",
      "Competitor conquesting campaigns",
      "TikTok AR Effect for Video reviews",
      "Custom viral video content office content creation (4 posts/month)",
      "Best for: Multi-location practices and DSOs",
      "✨ Save $18,000 vs. monthly",
    ],
    disabled: false,
    cta: "SUBSCRIBE",
  },
];

function RenderCards(planType: string) {
  if (planType === "yearly") {
    return yearlyPlans.map((plan, index) => (
      <PlanCard key={index} content={plan} />
    ));
  }
  return monthlyPlans.map((plan, index) => (
    <PlanCard key={index} content={plan} />
  ));
}

export default function PaymentOptions() {
  const [planType, setPlanType] = useState("monthly");
  const pricingRef = useRef<HTMLDivElement>(null);
  const {priceScroll, setPriceScroll} = useContext<any>(PricingScrollPositionContext);

  useEffect(() => {
    setPriceScroll(pricingRef.current?.clientHeight as number)
  },[setPriceScroll])

  return (
    <div
      className="flex flex-col items-center px-3 pt-24 pb-32 m-auto max-w-7xl xl:px-6 2xl:px-0 sm:pt-36"
      id="pricing"
      ref={pricingRef}
    >
      <div className="text-4xl sm:text-5xl text-center font-bold capitalize mb-9 tracking-[-0.016em]">
        Choose your subscription plan
      </div>
      <div className="flex mb-7 sm:justify-center">
        <div className="relative mr-4">
          <button
            className={`absolute top-0 left-0 ${
              planType !== "monthly" ? "-translate-x-1 -translate-y-1" : ""
            } duration-75 border-black border-2 py-2 px-5 font-bold text-black text-lg rounded-lg z-10 bg-white`}
            onClick={() => setPlanType("monthly")}
          >
            Monthly
          </button>
          <div className="px-5 py-2 text-lg font-bold text-black bg-black border-2 border-black rounded-lg">
            Monthly
          </div>
        </div>
        <div className="relative">
          <button
            className={`absolute top-0 left-0 ${
              planType !== "yearly" ? "-translate-x-1 -translate-y-1" : ""
            } duration-75 border-black border-2 py-2 px-6 font-bold text-black text-lg rounded-lg z-10 bg-white`}
            onClick={() => setPlanType("yearly")}
          >
            Yearly
          </button>
          <div className="relative px-6 py-2 text-lg font-bold text-black bg-black border-2 border-black rounded-lg">
            Yearly
            <svg
              className="absolute -right-7 sm:-right-1/4 top-5 sm:-top-5 -rotate-12"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10H13C15.1217 10 17.1566 10.8429 18.6569 12.3431C20.1571 13.8434 21 15.8783 21 18V20M3 10L9 16M3 10L9 4"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute text-xl font-bold truncate sm:text-2xl -right-10 sm:-right-28 -bottom-7 sm:bottom-1/4">
              20% OFF
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-flow-col gap-4 p-1 overflow-y-auto xl:gap-0">
        {RenderCards(planType)}
      </div>
    </div>
  );
}