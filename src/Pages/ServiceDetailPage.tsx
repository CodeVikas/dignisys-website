import { useParams } from "react-router-dom";
import { servicesData } from "../utils/service";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) return <div className="text-center mt-20 text-red-500">Service not found</div>;

  return (
    <div className="min-h-screen pt-24 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className={`bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-16 text-black/70 rounded-2xl mb-12`}>
          <div className="flex items-center gap-4 mb-4">
            {service.icon && <service.icon className="w-16 h-16" />}
            <h1 className="text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl max-w-3xl">{service.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-12">{service.description}</p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {service.sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-[#F6F6F6] p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
                {Icon && <Icon className="w-12 h-12 text-black mb-4" />}
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-700">{section.description}</p>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-black mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className={`bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-xl text-black`}>
          <h2 className="text-3xl font-bold mb-4">{service.cta.title}</h2>
          <p className="text-black/70 mb-6">{service.cta.description}</p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100">
            {service.cta.buttonText} <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
