"use client";

import { useState, useEffect } from "react";
import { Image } from "@heroui/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../../_ourprojects.json";

export default function ProjectCardsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= projects.length - visibleSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - visibleSlides : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-600 mb-2">- Our Projects -</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light">Kerala's prominent paver brand</p>
          <p className="text-xl md:text-2xl text-stone-300 font-light">The Great outdoor cement concrete paving blocks</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-stone-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-stone-600" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-1/3 px-2">
                  <div className="rounded-lg overflow-hidden shadow-md h-80 md:h-96 flex flex-col bg-white p-4">
                    <div className="relative h-48 md:h-56 lg:h-64 mb-4">
                      <Image
                        src={project.image_filenames[0] || "/placeholder.svg"}
                        alt={project.product_name}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700">{project.product_name}</h3>
                    <p className="text-sm md:text-base text-gray-500">{project.project_description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}