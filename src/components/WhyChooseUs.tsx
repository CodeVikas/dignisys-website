import React from "react";
import { Layers, DollarSign, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Broad Expertise & Versatility",
    description:
      "Founded by professionals with deep experience across technology, travel, logistics, shipping, software development, federal contracting, BPO management, and tech enablement enabling them to deliver consistent, high-quality services tailored to diverse business needs.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective, Timely, and Efficient Services",
    description:
      "A startup committed to offering cost-effective, timely solutions that help clients enhance business operations and achieve their objectives with efficiency.",
  },
  {
    icon: Zap,
    title: "Efficiency, Trust & Technology-Driven Execution",
    description:
      "Our logistics network leverages clear, effective communication, process optimization, and modern tech to maximize freight efficiency and reduce back-haul wastage.",
  },
  {
    icon: Clock,
    title: "Convenience, Affordability & 24/7 Support",
    description:
      "Positioned as a cutting-edge travel reservation service, offering affordable pricing, safe booking systems, and round-the-clock travel agent support.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <section id="industries" className="py-20 bg-[#163053] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 ">
            <div className="space-y-2 pb-8 ">
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#F9A826] leading-[40px] tracking-[2px] uppercase ">
               our key USP’s
              </h2>{" "}
              <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-semibold text-white  tracking-normal font-['Inter']">
                Why Choose Us
              </h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 cursor-pointer items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-['Manrope'] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-white/60 leading-relaxed font-['Manrope'] pt-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-7xl mx-auto  sm:px-6 relative  z-10"></div>
      </section>
    </>
  );
}
