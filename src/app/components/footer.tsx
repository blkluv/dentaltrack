"use client"
import Link from "next/link";
import ScrollToTop from "./scrollToTop";
import { usePathname } from "next/navigation";

export default function Footer() {

  const pathname = usePathname();

  return (
    <div className="px-3 pt-8 pb-4 text-base text-white bg-blue-600 border-t-2 border-black xl:px-6 2xl:px-0 sm:py-6">
      <div className="flex flex-col m-auto max-w-7xl sm:flex-row sm:justify-between sm:items-center">
        <ul className="sm:flex sm:items-center">
          <li>
            <ScrollToTop/>
          </li>
          <li>
            <Link
              href={"/#features"}
              className="block mb-6 font-bold capitalize sm:mb-0 sm:mr-6"
              scroll
            >
              features
            </Link>
          </li>
          <li>
            <Link
              href={"/#pricing"}
              className="block mb-6 font-bold capitalize sm:mb-0 sm:mr-6"
              scroll
            >
              pricing
            </Link>
          </li>
          <li>
            {pathname == "/blog" ?
              <Link
              href={"/"}
              className="block mb-6 font-bold capitalize sm:mb-0 sm:mr-6"
              scroll
            >
              home
            </Link>:
            <Link
              href={"https://tiktok.com/@dentaljobs"}
              className="block mb-6 font-bold capitalize sm:mb-0 sm:mr-6"
              scroll
            >
              TikTok
            </Link>}
          </li>
        </ul>
        <div className="mt-24 sm:mt-0">
          Developed by{" "}
          <Link
            href={"https://viraldental.marketing"}
            target="_blank"
            className="font-bold"
          >
            ViralDental.marketing
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
