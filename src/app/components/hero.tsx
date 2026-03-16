import Image from "next/image";
import NotifyBtn from "./notifyBtn";
import MobileApp from "/public/mobile-app.webp";
import Header from "./header";
import OnViewChat from "./animation/onViewChat";
import Link from "next/link";

export default function Hero({heroRef}:any) {

  return (
    <div ref={heroRef} >
      <Header />
      <div className="px-3 pt-6 pb-8 bg-blue-600 border-b-2 border-b-black md:pt-16 md:pb-16 lg:px-0">
        <div className="relative flex flex-wrap justify-end w-full m-auto max-w-7xl md:px-3 xl:px-6 2xl:px-0 md:flex-nowrap md:justify-between">
          <div className="z-20 w-full mb-10 sm:mb-16">
            <div className="leading-none max-w-2xl text-[clamp(48px,_13vw,_96px)] md:text-[clamp(72px,_7.8vw,_96px)] font-extrabold drop-shadow-[0_4px_0_#141414] sm:drop-shadow-[0_4px_0_#141414] tracking-[-0.016em] text-white mb-8 text-outline">
              Dental Marketing That Actually Works
            </div>
            <p className="mb-4 text-xl text-white md:font-medium md:max-w-xl">
              You've been sold the dream before. Fancy pitch. Big promises.
              Then absolutely nothing. We get it. Here's the difference:
              We'll audit your current marketing for free. If we can't
              generate MORE patients than your last agency,
              we don't deserve your business
            </p>
            {/* <div className="mb-1 text-xl text-white md:font-bold md:max-w-xl">
                Want to be notified when DentalTrack is available?
              </div> */}
            <Link href="/free-audit" passHref>
              <NotifyBtn text={"Claim Your Free Marketing Audit"} style="" />
            </Link>
          </div>
          <div className="relative md:absolute md:right-0 md:top-0 h-[clamp(400px,_100vw,_576px)] md:h-full w-[500px] md:w-[clamp(72px,_28vw,_328px)]">
            <OnViewChat style="absolute z-10 bottom-6 md:hidden lg:block"/>
            <div className="h-[clamp(400px,_100vw,_576px)] md:h-full w-[clamp(72px,_50vw,_328px)] md:w-[clamp(72px,_28vw,_328px)]">
              <Image
                src={MobileApp}
                alt="mobile app view"
                className="z-0 object-contain"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                priority={true}
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}