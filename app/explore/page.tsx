"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ExplorePage = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Blog Data
  const blogs = [
    {
      id: 1,
      title: "Unveiling the Future of Tech",
      description:
        "Explore the groundbreaking advancements in AI, robotics, and more.",
      date: "10 Jan 2025",
      category: "Technology",
    },
    {
      id: 2,
      title: "Mastering the Art of Coding",
      description: "10 tips to enhance your coding journey in 2025.",
      date: "15 Feb 2025",
      category: "Education",
    },
    {
      id: 3,
      title: "The UI/UX Revolution",
      description:
        "How AI is reshaping the landscape of UI/UX design forever.",
      date: "5 Mar 2025",
      category: "Design",
    },
    {
      id: 4,
      title: "Building a Green Digital World",
      description:
        "Discover sustainable practices in the tech industry today.",
      date: "20 Apr 2025",
      category: "Environment",
    },
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in for the page
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power3.out" }
      );

      // Staggered animations for cards
      gsap.fromTo(
        cardRefs.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    });

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <section
      ref={pageRef}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white min-h-screen py-12 px-5"
    >
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-400 mb-4">
          Explore TechTales 🚀
        </h1>
        <p className="text-lg text-emerald-300">
          Dive into the world of technology, innovation, and creativity.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            ref={(el) => {
              if (el && !cardRefs.current.includes(el)) {
                cardRefs.current[index] = el;
              }
            }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-emerald-500 transition-all duration-300 hover:scale-105"
          >
            <span className="block text-sm text-teal-300 mb-2">
              {blog.category}
            </span>
            <h2 className="text-2xl font-semibold mb-2 text-emerald-300">
              {blog.title}
            </h2>
            <p className="text-gray-400 mb-4">{blog.description}</p>
            <span className="block text-xs text-gray-500">
              Published on: {blog.date}
            </span>
            <a
              href="#"
              className="inline-block mt-4 text-emerald-400 hover:text-teal-500 font-semibold"
            >
              ✨ Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExplorePage;
