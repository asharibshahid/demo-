"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
interface BlCrdProps {
  title: string;
  discription: string;
  date: string;
  slug: string;
  id?: string;  // Now optional
}
const BlCrd = ({
  title,
  discription,
  date,
  slug,
}: BlCrdProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // GSAP Animation
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
        <section
          ref={containerRef}
          className="text-white bg-black body-font overflow-hidden"
        >
         
    
          <div className="container px-5 py-10 mx-auto">
            <div className="-my-8 divide-y divide-emerald-300">
              <div className="BlCrd-item py-8 flex flex-wrap md:flex-nowrap transition-transform duration-300 hover:scale-105">
                {/* Blog Meta */}
                <div className="BlCrd-meta md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="BlCrd-category font-semibold title-font text-emerald-300">
                   {slug}
                  </span>
                  <span className="BlCrd-date mt-1 text-white text-sm">{date}</span>
                </div>
    
                {/* Blog Content */}
                <div className="md:flex-grow">
                  <h2 className="BlCrd-title text-2xl font-medium text-emerald-300 title-font mb-2">
                    {title}
                  </h2>
                  <p className="BlCrd-description leading-relaxed text-white">
                    {discription}
                  </p>
                  <a
                    href={"blogs/" + slug}
                    className="BlCrd-link text-emerald-300 inline-flex items-center mt-4 hover:text-emerald-500"
                  >
                    ✨ Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
   
    
};

export default BlCrd;
