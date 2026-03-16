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
              We Pay Your Patients To Go Viral
            </div>
            <p className="mb-4 text-xl text-white md:font-medium md:max-w-xl">
              We create branded TikTok AR effects that make it fun for patients
              to share their experience, whether through video reviews,
              before-and-afters, or office gaming. If their content goes viral,
              we pay them!
            </p>
            {/* <div className="mb-1 text-xl text-white md:font-bold md:max-w-xl">
                Want to be notified when ViralDental.marketing is available?
              </div> */}
            <Link href="https://calendly.com/viraldentalmarketing/audit" passHref>
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