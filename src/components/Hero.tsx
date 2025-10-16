import { ArrowRight } from "lucide-react";
import BgImage from "../Assests/Bg.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen relative pt-16 sm:pt-20 bg-cover bg-center bg-no-repeat sm:bg-none"
      style={{
       backgroundImage: window.innerWidth >= 640 ? `url('${BgImage}')` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto  sm:px-6  py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pt-10 px-6 ">
            <h1 className="text-[32px] md:text-[34px] lg:text-[48px] font-bold text-gray-900 sm:leading-tight md:leading-[56px] lg:leading-[62px]  tracking-normal font-['Inter']">
              Accelerating Your Business with Integrated Tech, BPM & Logistics
              Solutions
            </h1>

            <p className="text-base sm:text-sm md:text-lg lg:text-xl text-black leading-relaxed font-['Manrope']">
              Dignisys brings software development, process optimization,
              travel, logistics, BPO/KPO, and healthcare services—empowering
              organizations to operate smarter, scale faster, and embrace an
              AI-ready future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg w-fit"
              >
                Get In Touch
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
