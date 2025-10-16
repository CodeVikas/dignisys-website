import { Smartphone, Users, Clock, Award } from "lucide-react";
import BgImage from "../Assests/Group.png";

const stats = [
  {
    icon: Smartphone,
    value: "200",
    label: "Custom Apps",
  },
  {
    icon: Users,
    value: "45",
    label: "Happy Customers",
  },
  {
    icon: Clock,
    value: "3560",
    label: "Hours of Work",
  },
  {
    icon: Award,
    value: "750",
    label: "Development Awards",
  },
];

export default function Stats() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[34px] lg:text-[42px] font-bold text-gray-900 leading-[60px] font-['Inter']">
            Company Success
          </h2>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
          style={{
            backgroundImage: "url('" + BgImage + "')",
            backgroundSize: "contain", // or "cover" if you prefer
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "400px", // Adjust as needed
          }}
        >
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-[48px] sm:text-[60px] md:text-[78px]  font-normal font-['Lato'] text-gray-900 mb-2 text-center leading-none">
                  {stat.value}
                </div>

                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-['Manrope']">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
