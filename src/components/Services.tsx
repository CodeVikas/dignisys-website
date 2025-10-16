import {
  Truck,
  Plane,
  HeartPulse,
  FileText,
  Code,
  Headphones,
  ArrowRight,
  Dot,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Logistics",
    href: "logistics",
    description:
      "Dignisys Limited. provide cutting technology offerings apart from providing a great and unique customer service and time savings products.",
  },
  {
    icon: Plane,
    title: "Travels",
    href: "travels",
    description:
      "Dignisys Limited. is providing excellent Domestic and International Holidays travel based on your requirement on planning a honeymoon, solo trip..",
  },
  {
    icon: Headphones,
    title: "BPO",
    href: "bpo",
    points: [
      "Intelligent Finance Operations",
      "Sourcing and Procurement",
      "Supply Chain",
      "Compliance as a Service",
    ],
  },
  {
    icon: FileText,
    title: "KPO",
    href: "kpo",
    description:
      "The scope of KPO business includes preparation of accounts, tax returns, computer aided simulation, engineering and development, financial services.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    href: "healthcare",
    description:
      "Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease,",
  },
  {
    icon: Code,
    title: "Software Solution",
    href: "software",
    description:
      "The market is booming every day with continuous demand for creative and customised software development.",
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[34px] lg:text-[42px] font-bold text-gray-900 leading-[60px] font-['Inter']">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-black leading-relaxed font-['Manrope'] pt-4">
            Dignisys Limited. is newly startup providing cost effective timely
            services to different industries, enabling them to enhance their
            business and maximize their efficiencies to achieve their
            organizational mission & goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 bg-[#F6F6F6] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                  <Icon className="w-10 h-10 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {service.title}
                </h3>
                {service.points ? (
                  <ul className="text-black/70 mb-6 leading-relaxed py-2 flex-grow space-y-1">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Dot size={22} className="mt-1 text-black" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-black/70 mb-6 leading-relaxed py-2 flex-grow">
                    {service.description}
                  </p>
                )}

                <button
                  onClick={() => {
                    navigate(`/services/${service?.href}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-3 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg mt-auto w-fit"
                >
                  Know More
                  <ArrowRight size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
