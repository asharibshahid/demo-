"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
const Footer = () => {
  useEffect(() => {
    // GSAP animation for the footer
    gsap.timeline()
      .fromTo(
        ".footer-container",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      )
      .fromTo(
        ".footer-link",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)" },
        "-=0.8"
      )
      .fromTo(
        ".footer-icon",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2, ease: "elastic.out(1, 0.3)" },
        "-=0.6"
      );
  }, []);

  return (
    <footer className="footer-container text-white body-font bg-black border-4 border-y-emerald-500cmd">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-emerald-400">
        <div className="flex justify-center items-center">
      <Image
        src="/images/techTales.jpg"
        alt="Tech Tales Logo"
        className="rounded-full"
        width={40} // Adjust width
        height={40} // Adjust height
      />
    </div>
          <span className="ml-3 text-xl">TechTales</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-emerald-400 sm:py-2 sm:mt-0 mt-4">
          ✨ 2025
          <a
            href="https://twitter.com/blogsphere"
            className="text-emerald-400 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tech Tales
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
         
      
         {/* //facebook */}

          <a href="https://www.facebook.com/asharib.shahid/"
               target="_blank " className="footer-icon text-emerald-400 hover:text-white transition duration-300">
            <svg
           
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Twitter */}
          <a  href="https://x.com/AsharibSheikh01 "
               target="_blank"className="footer-icon ml-3 text-emerald-400 hover:text-white transition duration-300">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
       {/* insta */}
          <a   href="https://www.instagram.com/web_ghost.io/"
               target="_blank" className="footer-icon ml-3 text-emerald-400 hover:text-white transition duration-300">
        
            <svg
            
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
                
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          {/* //Linkedin */}
          <a href="https://www.linkedin.com/in/asharib-shahid-73a3022b5/" target="_blank"  className="footer-icon ml-3 text-emerald-400 hover:text-white transition duration-300">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
      <div className="text-center mt-6">
        <p className="text-gray-400">Unleashing creativity, one blog at a time</p>
      </div>
    </footer>
  );
};

export default Footer;
