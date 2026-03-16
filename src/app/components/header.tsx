"use client";
import Link from "next/link";
import NotifyBtn from "./notifyBtn";
import Image from "next/image"; 
import { useContext } from "react";
import { IsMenuOpenContext, MainHeightContext, PricingScrollPositionContext } from "../lib/context";
import { usePathname } from "next/navigation";

export default function Header() {
  const { menuOpen, setMenuOpen }: any = useContext(IsMenuOpenContext);
  const {priceScroll, setPriceScroll} = useContext<any>(PricingScrollPositionContext);
  const {mainHeight, setMainHeight} = useContext<any>(MainHeightContext);
  const pathname = usePathname();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      return setMenuOpen(false);
    }
    return;
  };
  const handlePricingClick = () => {
    if (window.innerWidth < 1024) {
      setMenuOpen(false);
      window.scrollTo(0,(mainHeight - (priceScroll * 2.1)));
      return;
    }
    window.scrollTo(0,((mainHeight * 1.5) - (priceScroll * 1.7)));
    return;
  };

  console.log("ITS GONNA SCROLL TO:", (mainHeight * 1.5) - priceScroll)

  return (
    <div className="relative px-3 py-3 bg-blue-600 md:py-2 xl:px-6 2xl:px-0">
        <div className="flex flex-wrap items-center justify-between m-auto max-w-7xl">
          <div className="z-40 flex items-center">
            <div className="p-1 bg-white rounded">
              <img 
                src="/logo.svg" 
                alt="Viral Dental Marketing Logo"
                className="w-auto max-h-10 [&>svg]:fill-black"
                onError={(e) => {
                  console.log('Image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
          </div>
          <nav
            className={`${
              menuOpen ? "animate-fade-in" : "animate-fade-out"
            } md:transition-none md:duration-0 z-30 fixed md:relative md:animate-fade-in top-0 left-0 w-full md:w-auto h-full md:h-auto bg-blue-600 flex flex-col md:flex-row md:items-center pt-16 md:pt-0 overflow-y-auto`}
          >
            <Link
              href={"/"}
              className={`${pathname === "/blog" ? '':'hidden' } text-white font-bold md:mr-6 text-xl p-3 md:p-0 border-t-2 md:border-t-0`}
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              href={"/#features"}
              className="p-3 text-xl font-bold text-white border-t-2 md:mr-6 md:p-0 md:border-t-0"
              onClick={handleClick}
            >
              Features
            </Link>
            <div
              // href={"/#pricing"}
              className={`${pathname === "/blog" ? 'md:mr-12':'md:mr-6' } text-white hover:cursor-pointer font-bold text-xl p-3 md:p-0 border-y-2 md:border-y-0 border-dotted`}
              onClick={handlePricingClick}
            >
              Plans
            </div>
            <Link
              href={"https://www.instagram.com/dentaljobmemes"}
              className={`${pathname === "/blog" ? 'hidden':'' } text-white font-bold md:mr-12 text-xl p-3 md:p-0 border-b-2 md:border-y-0 border-dotted`}
              onClick={handleClick}
            >
              Instagram
            </Link>
            <div className="flex flex-col flex-grow justify-end p-3 md:p-0.5">
              <div className="mb-2 text-lg font-bold text-center text-white capitalize md:hidden">
                Want to go viral?
              </div>
              <div onClick={handleClick}>
                <Link 
                  href="https://tiktok.com/@dentaljobs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <NotifyBtn
                    text={"TikTok"}
                    style="md:w-fit w-full text-center"
                  />
                </Link>
              </div>
            </div>
          </nav>
          <button
            className="z-40 block md:hidden hover:cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="open menu"
          >
            <svg
              width="39"
              height="33"
              viewBox="0 0 39 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="35"
                height="7"
                rx="3.5"
                fill="black"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="3"
                y="14"
                width="35"
                height="7"
                rx="3.5"
                fill="black"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="3"
                y="25"
                width="35"
                height="7"
                rx="3.5"
                fill="black"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="1"
                y="1"
                width="35"
                height="7"
                rx="3.5"
                fill="white"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="1"
                y="12"
                width="35"
                height="7"
                rx="3.5"
                fill="white"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="1"
                y="23"
                width="35"
                height="7"
                rx="3.5"
                fill="white"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
    </div>
  );
}