import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}

export default function Testimonial() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Johanna Kuphal",
      text: "Working with Dignisys has been a game-changer for our business. Their team not only provided cost-effective solutions but also guided us through every step with professionalism and transparency. We've noticed a significant improvement in efficiency and customer satisfaction since partnering with them.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "The expertise and dedication shown by the team exceeded our expectations. They transformed our operations and helped us achieve remarkable growth in a short period. Their innovative approach and attention to detail made all the difference.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Sarah Williams",
      text: "Outstanding service from start to finish. The team's commitment to excellence and their ability to understand our unique needs resulted in solutions that perfectly aligned with our business goals. Highly recommended for any organization looking to scale.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getPrevIndex = () =>
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(getPrevIndex());
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(getNextIndex());
      setIsTransitioning(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const prevTestimonial = testimonials[getPrevIndex()];
  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[getNextIndex()];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Testimonials</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Dignisys Limited is a newly startup providing cost-effective, timely
          services to different industries, enabling them to enhance their
          business and maximize their efficiencies to achieve their
          organizational mission & goals.
        </p>
      </div>

      <div className="relative flex justify-center w-full max-w-5xl mx-auto overflow-visible">
        {/* Previous card */}
        <div className="hidden sm:block absolute left-0 -translate-x-1/4 w-80 opacity-20 scale-90 pointer-events-none transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <Quote className="w-10 h-10 text-gray-200 mb-4" />
            <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-4">
              {prevTestimonial.text}
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-gray-300 shadow-lg mb-3">
                <img
                  src={prevTestimonial.image}
                  alt={prevTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {prevTestimonial.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Center card wrapper */}
        <div className="relative w-full max-w-2xl flex justify-center">
          {/* Previous button */}
          <div
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-20"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </div>

          {/* Center card */}
          <div
            className={`bg-white rounded-2xl shadow-2xl p-12 pb-16 transition-all duration-300 relative ${
              isTransitioning ? " scale-95" : " scale-100"
            }`}
          >
            <Quote className="w-12 h-12 text-gray-200 mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed min-h-[140px]">
              {currentTestimonial.text}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 text-center mt-6">
              {currentTestimonial.name}
            </h3>

            <div className="bg-white absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full overflow-hidden ring-4 ring-yellow-400 shadow-lg">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Next button */}
          <div
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-20"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </div>
        </div>

        {/* Next card */}
        <div className="hidden sm:block absolute right-0 translate-x-1/4 w-80 opacity-20 scale-90 pointer-events-none transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <Quote className="w-10 h-10 text-gray-200 mb-4" />
            <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-4">
              {nextTestimonial.text}
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-gray-300 shadow-lg mb-3">
                <img
                  src={nextTestimonial.image}
                  alt={nextTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {nextTestimonial.name}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-12 pt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-yellow-400"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
