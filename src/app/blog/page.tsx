"use client"
import { useContext, useEffect, useRef } from "react";
import { MainHeightContext } from "../lib/context";

export default function Page() {

  const mainRef = useRef<HTMLDivElement>(null)
  const {mainHeight, setMainHeight} = useContext<any>(MainHeightContext)

  useEffect(() => {
    setMainHeight(mainRef.current?.clientHeight)
  },[mainRef, setMainHeight])

  useEffect(() => {
    const handleResize = () => {
      setMainHeight(mainRef.current?.clientHeight)
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setMainHeight])

  return (
    <main ref={mainRef}>
      <div className="p-5 border-2 mt-4 mx-3 text-center min-h-[80vh] flex items-center justify-center bg-gray-50 rounded-lg">
        <div>
          <h2 className="mb-2 text-2xl font-bold">Coming Soon</h2>
          <p className="text-gray-600">Our blog posts are being written. Check back for dental marketing insights, case studies, and industry trends.</p>
        </div>
      </div>
      {/* PaymentOptions removed - doesn't belong on blog page */}
    </main>
  );
}