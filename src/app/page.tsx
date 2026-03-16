'use client'
import Hero from "./components/hero";
import GridSection from "./components/gridSection";
import Footer from "./components/footer";
import Form from "./components/form";
import PaymentOptions from "./components/paymentOptions";
import TwoColSection from "./components/twoColSection";
import XlCard from "./components/cards/xlCard";
import QueryClientComponent from "./components/queryClientComponent";
import { useContext, useEffect, useRef, useState } from "react";
import { MainHeightContext } from "./lib/context";

export default function Home() {

  const mainRef = useRef<HTMLDivElement>(null)
  const {mainHeight, setMainHeight} = useContext<any>(MainHeightContext)
  const [heroHeight, setHeroHeight] = useState(0)
  const heroRef = useRef<any>(null)

  useEffect(() => {
      setMainHeight(mainRef.current?.clientHeight)
  },[mainRef, setMainHeight])

  useEffect(() =>{
    setHeroHeight(heroRef.current?.clientHeight * 0.95)
  }, [heroHeight])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeroHeight(heroRef.current?.clientHeight * 0.95)
      setMainHeight(mainRef.current?.clientHeight)

    });
    return window.removeEventListener("resize", () => {
      setHeroHeight(heroRef.current?.clientHeight * 0.95)
      setMainHeight(mainRef.current?.clientHeight)
    });
  }, [setMainHeight])


  return (
    <main ref={mainRef} className="lg:sticky" style={{ top: `-${heroHeight}px`}}>
      <Hero heroRef={heroRef} />
      <GridSection />
      <div className="px-3 m-auto mb-12 max-w-7xl md:mb-24 xl:px-6 2xl:px-0">
        <XlCard
          content={{
            title: "TikTok Is The New Google (And Your Competition Is Already On It)",
            description:
              "70% of patients under 40 discover dentists on TikTok before Google. True story. Show your staffs personality by making light of your common client pain points to generate more leads and build trust with potential patients.",
          }}
          image={"appointment-list.svg"}
          reverse={false}
        />
        <XlCard
          content={{
            title: "AI That Actually Does Something (Not Just A Chatbot)",
            description:
              "We integrate AI into everything your practice already uses—phones, X-rays, front desk, and reviews. It answers after-hours calls, assists with diagnoses, automates reminders and insurance tasks, and texts happy patients for 5-star reviews. Your team does less. Your practice does more. Patients never notice the difference.",
          }}
          image={"office-list.svg"}
          reverse={true}
        />
      </div>
      <TwoColSection />
      <PaymentOptions content={{}} />
      {/* <QueryClientComponent>
        <Form />
      </QueryClientComponent> */}
      <Footer />
    </main>
  );
}
