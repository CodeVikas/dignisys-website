// servicesData.js
import {
  Heart,
  UserCheck,
  Stethoscope,
  Activity,
  CheckCircle,
  Code,
  Laptop,
  Smartphone,
  Cloud,
  Plane,
  MapPin,
  Star,
  Calendar,
  Truck,
  Package,
  Clock,
  Globe,
  Headphones,
  TrendingUp,
  Users,
  Shield,
  Brain,
  Calculator,
  BarChart3,
  FileText
} from "lucide-react";

export const servicesData = {
  healthcare: {
    id: "healthcare",
    title: "Healthcare Services",
    icon: Heart,
    color: "red",
    subtitle: "Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease.",
    description:
      "At Dignisys Limited, we provide comprehensive healthcare services that focus on the complete well-being of individuals. Our services include preventive care, diagnostics, treatment, rehabilitation, and ongoing health management, ensuring quality care at every stage of life.",
    sections: [
      { icon: UserCheck, title: "Prevention & Screening", description: "Comprehensive preventive health programs including regular screenings, health assessments, and early detection services to maintain optimal health." },
      { icon: Stethoscope, title: "Diagnosis & Treatment", description: "Advanced diagnostic services and evidence-based treatment protocols delivered by experienced healthcare professionals using modern medical technology." },
      { icon: Activity, title: "Amelioration Services", description: "Specialized care focused on improving quality of life and managing chronic conditions through personalized treatment plans and ongoing support." },
      { icon: Heart, title: "Cure & Recovery", description: "Complete care pathways from diagnosis through treatment to full recovery, with rehabilitation and follow-up services for optimal outcomes." }
    ],
    features: [
      "Primary care and general health consultations",
      "Specialized medical consultations and second opinions",
      "Preventive health check-ups and screenings",
      "Chronic disease management programs",
      "Diagnostic imaging and laboratory services",
      "Telemedicine and remote health monitoring",
      "Health education and wellness programs",
      "Medical record management and coordination"
    ],
    cta: {
      title: "Your Health, Our Priority",
      description: "Contact us to learn more about our healthcare services and how we can support your health journey.",
      buttonText: "Schedule Consultation"
    }
  },

  logistics: {
    id: "logistics",
    title: "Logistics",
    icon: Truck,
    color: "blue",
    subtitle: "Dignisys Limited provides cutting-edge logistics solutions to streamline your supply chain.",
    description:
      "Efficient logistics is the backbone of modern business. At Dignisys Limited, we offer end-to-end logistics services including transportation, inventory management, warehouse solutions, and delivery optimization. Our technology-driven approach ensures timely and cost-effective operations across local and global networks.",
    sections: [
      { icon: Package, title: "Supply Chain Management", description: "End-to-end supply chain optimization with real-time tracking, inventory management, and predictive analytics to minimize delays and maximize efficiency." },
      { icon: Clock, title: "Time-Critical Delivery", description: "Specialized services for time-sensitive shipments with guaranteed delivery windows and priority handling for urgent logistics needs." },
      { icon: Globe, title: "Global Network", description: "Access to an extensive international logistics network spanning multiple continents with local expertise and global reach." },
      { icon: CheckCircle, title: "Quality Assurance", description: "Rigorous quality control processes and handling standards to ensure your products arrive in perfect condition every time." }
    ],
    features: [
      "Advanced tracking systems with real-time visibility",
      "Automated warehouse management solutions",
      "Custom routing optimization algorithms",
      "Multi-modal transportation options",
      "Dedicated customer support team",
      "Flexible pricing models tailored to your needs",
      "Compliance with international shipping regulations",
      "Sustainable and eco-friendly logistics practices"
    ],
    cta: {
      title: "Ready to Optimize Your Logistics?",
      description: "Let's discuss how our logistics solutions can transform your supply chain and drive your business forward.",
      buttonText: "Contact Us Today"
    }
  },

  travels: {
    id: "travels",
    title: "Travel Services",
    icon: Plane,
    color: "amber",
    subtitle: "Dignisys Limited offers personalized domestic and international travel experiences.",
    description:
      "Experience the world with Dignisys Limited's comprehensive travel services. We plan your trips meticulously, whether it's a honeymoon, solo adventure, family vacation, or corporate travel, ensuring unforgettable experiences with complete convenience.",
    sections: [
      { icon: MapPin, title: "Domestic Travel", description: "Explore top local destinations with customized itineraries including hidden gems, cultural experiences, and adventure activities." },
      { icon: Plane, title: "International Holidays", description: "Travel across continents with our seamless international holiday packages, covering flights, accommodations, and sightseeing." },
      { icon: Star, title: "Honeymoon Packages", description: "Romantic getaways designed for newlyweds, offering luxury stays, curated experiences, and unforgettable memories." },
      { icon: Calendar, title: "Solo Trip Planning", description: "Tailor-made solo travel itineraries focusing on safety, adventure, and personal discovery with cultural immersion opportunities." }
    ],
    features: [
      "Personalized travel itineraries based on preferences",
      "Competitive pricing with transparent cost breakdowns",
      "Flight and hotel bookings at the best rates",
      "Travel insurance and documentation assistance",
      "Visa support and guidance",
      "24/7 travel support during the trip",
      "Local guides and authentic experiences",
      "Flexible cancellation and rescheduling options"
    ],
    cta: {
      title: "Start Your Journey Today",
      description: "Let us help you plan your dream vacation. Contact our travel experts for a personalized itinerary.",
      buttonText: "Plan Your Trip"
    }
  },

  bpo: {
    id: "bpo",
    title: "BPO Services",
    icon: Headphones,
    color: "emerald",
    subtitle: "Intelligent outsourcing for finance, procurement, supply chain, and compliance.",
    description:
      "Dignisys Limited delivers world-class BPO services that enable businesses to focus on core operations while we handle critical processes efficiently. Our solutions leverage technology, expertise, and best practices to reduce cost and improve operational performance.",
    sections: [
      { icon: TrendingUp, title: "Intelligent Finance Operations", description: "Streamline your financial processes with automation, reporting, and reconciliation services to enhance accuracy and efficiency." },
      { icon: Users, title: "Sourcing and Procurement", description: "Optimize procurement operations with strategic sourcing, vendor management, and analytics for cost reduction and quality improvement." },
      { icon: Shield, title: "Supply Chain Management", description: "End-to-end supply chain support including inventory, demand planning, and logistics coordination for operational excellence." },
      { icon: CheckCircle, title: "Compliance as a Service", description: "Ensure regulatory compliance with monitoring, risk management, and audit support to reduce operational risks." }
    ],
    features: [
      "Cost optimization through automation",
      "Access to specialized expertise",
      "Scalable services for business growth",
      "Advanced analytics and reporting",
      "Improved operational efficiency",
      "Reduced turnaround time for processes",
      "24/7 operational support",
      "Data security and confidentiality guaranteed"
    ],
    cta: {
      title: "Transform Your Business Operations",
      description: "Partner with us to streamline your business processes and achieve operational excellence.",
      buttonText: "Get Started"
    }
  },

  kpo: {
    id: "kpo",
    title: "KPO Services",
    icon: Brain,
    color: "violet",
    subtitle: "Knowledge-based outsourcing for accounting, research, engineering, and financial services.",
    description:
      "Dignisys Limited offers high-value Knowledge Process Outsourcing services, providing specialized expertise in finance, research, engineering, and other knowledge-intensive domains. Our solutions empower businesses to make informed strategic decisions.",
    sections: [
      { icon: Calculator, title: "Accounts & Tax Returns", description: "Expert preparation and review of financial accounts, tax filings, and compliance documentation for accuracy and adherence." },
      { icon: BarChart3, title: "Computer Aided Simulation", description: "Advanced simulation and modeling for product design, engineering projects, and process optimization." },
      { icon: Brain, title: "Engineering & Development", description: "Specialized engineering services including design, prototyping, analysis, and technical documentation for complex projects." },
      { icon: FileText, title: "Financial Services", description: "Financial analysis, investment research, risk assessment, and portfolio management for informed business decisions." }
    ],
    features: [
      "Financial modeling and forecasting",
      "Market research and competitive analysis",
      "Data analytics and business intelligence",
      "Technical writing and documentation",
      "Patent research and intellectual property analysis",
      "Regulatory compliance and risk management",
      "Engineering design and CAD services",
      "Investment research and equity analysis"
    ],
    cta: {
      title: "Leverage Our Expertise",
      description: "Partner with our knowledge experts to gain a competitive advantage and drive innovation in your industry.",
      buttonText: "Explore Solutions"
    }
  },

  software: {
    id: "software",
    title: "Software Solutions",
    icon: Code,
    color: "cyan",
    subtitle: "Custom software development for web, mobile, cloud, and enterprise applications.",
    description:
      "Dignisys Limited delivers cutting-edge software solutions tailored to your business needs. Our team develops web, mobile, and cloud applications using modern technologies to ensure scalability, security, and superior user experience.",
    sections: [
      { icon: Laptop, title: "Web Applications", description: "Responsive and scalable web apps built with modern frameworks for seamless user experience across devices." },
      { icon: Smartphone, title: "Mobile Applications", description: "Native and cross-platform apps for iOS and Android offering intuitive interfaces and powerful functionality." },
      { icon: Cloud, title: "Cloud Solutions", description: "Cloud-native apps and migration services leveraging AWS, Azure, and Google Cloud for scalability, reliability, and performance." },
      { icon: Code, title: "Enterprise Software", description: "ERP, CRM, and business process automation solutions tailored to organizational needs for improved efficiency." }
    ],
    features: [
      "Agile development for rapid delivery",
      "User-centric design with excellent UX",
      "Clean, maintainable code standards",
      "Comprehensive testing and QA",
      "Scalable architecture for future growth",
      "Continuous integration and deployment",
      "Post-launch support and maintenance",
      "Regular updates and feature enhancements"
    ],
    cta: {
      title: "Build Your Next Innovation",
      description: "Let's discuss your software requirements and create a solution that drives your business forward.",
      buttonText: "Start Your Project"
    }
  }
};
