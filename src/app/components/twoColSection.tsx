import OnViewAppHist from "./animation/onViewAppHist";
import OnViewTaggin from "./animation/onViewTagging";
import LgCard from "./cards/lgCard";

export default function TwoColSection() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-3 m-auto xl:px-6 2xl:px-0 md:grid-cols-2 md:gap-8 lg:gap-16 max-w-7xl">
        <LgCard
          title="Google Ads Managed By People Who Understand Dentistry"
          description={`Most "Google Ads experts" have never set foot in a dental office — they bid on "dentist near me" and call it a day. We're different. We're Google Certified (actually certified, not just claiming it), and we know the difference between an $800 implant patient and an $80 cleaning patient. We bid on what actually pays: implants, Invisalign, crowns, and emergencies.`}
          icon={<OnViewTaggin/>}
        />
        <LgCard
          title="We'll Outperform Your Last Agency Or You Don't Pay A Dime"
          description={`Here's how confident we are: We'll run YOUR marketing for 30 days. Side by side with whatever you're doing now. Same budget. Same timeline. If we don't generate MORE patients than your previous agency (or your in-house efforts), you get a 100% refund. Every penny. No fine print. No "exclusions." Just results. You either get more patients. Or you get your money back. That's it.`}
          icon={<OnViewAppHist/>}
        />
      </div>
    </>
  );
}