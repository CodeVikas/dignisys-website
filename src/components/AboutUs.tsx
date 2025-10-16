import React from "react";
import AboutUsImage from "../Assests/Image (3).png";

export default function AboutUs() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-20 bg-white relative ">
      <div className=" mx-auto px-6  sm:px-6 relative z-10">
        <h2 className="text-[20px] sm:text-[22px] md:text-[24px]  font-bold text-[#F9A826] leading-[40px] tracking-[2px] uppercase pb-5">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="space-y-8 ">
            <h1 className="text-[32px] md:text-[34px] lg:text-[38px] font-semibold text-black  tracking-normal font-['Inter']">
              Dignisys is a start-up venture by a team of investors and
              professional with multitude of experience.
            </h1>
          </div>
          <div className="space-y-8 ">
            <p className="text-lg text-black leading-[36px] font-['Manrope']">
              Experience in technology, travel, logistics, shipping, software
              development, federal contracting, BPO management and technology
              enablers.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="space-y-8 pt-10">
            <img src={AboutUsImage} alt="aboutImage" />
          </div>
          <div className="space-y-8 pt-8">
            <p className="text-lg text-black leading-[36px] font-['Manrope']">
              Using this vast pool of knowledge and experience Dignisys has the
              skills and backing to deliver outstanding and consistent services
              to our business partners and clients, enabling them to expand
              their business and maximize their efficiencies to achieve their
              organizational mission & goals. We say its start of something big
              and you are welcome to join us in our journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
