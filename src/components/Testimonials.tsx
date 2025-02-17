import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Mr. Salvador was of great support to the operational and comercial department. He demostrated a positive attitude, motivation to work as a team, willingness to help his collaborators, and a high sense of responsability and success in fulfilling tasks",
      author: "Fernando Tapia",
      role: "Managing Partner at SweetWater Securities",
      image: "https://www.sweetwatersecurities.com/wp-content/uploads/2018/03/Fernando_Tapia.jpg"
    },
    {
      quote: "I highlight the high degree of responsability, proactivity and enthusiasm that Eduardo showed in each of the tasks assigned, and for respecting the values of our organization in his work, relationship with our collegues and supervisors. I'm certain Eduardo will achieve great things",
      author: "Elias Polonsky",
      role: "Investment Banking and Real Estate Director at MMG Bank",
      image: "https://griclub.sirv.com/uploads/crm_people/0031R00002kLJ3G_Marketing_Edited_Photo_2022-09-13_23-33-36.jpg"
    },
    {
      quote: "COMING SOON",
      author: "",
      role: "Director of Data Activation at PetScreening",
      image: ""
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from colleagues and collaborators in the data industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-sm p-8 md:p-12">
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-accent" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-accent" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
              </div>
              <blockquote className="text-xl md:text-2xl mb-8 text-gray-800 font-light leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="space-y-2">
                <p className="font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}