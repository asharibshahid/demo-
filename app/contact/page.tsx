"use client"
import { useEffect } from "react";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    // GSAP animation for the contact form
    gsap.timeline()
      .fromTo(
        ".contact-container",
        { opacity: 0, scale: 0.9, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power4.out" }
      )
      .fromTo(
        ".contact-card",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "back.out(1.5)" },
        "-=0.5"
      )
      .fromTo(
        ".contact-button",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" },
        "-=0.2"
      );
  }, []);

  return (
    <div
      className="contact-container min-h-screen flex justify-center items-center bg-black text-emerald-300"
    >
      <div className="contact-card max-w-4xl w-full bg-emerald-300/10 p-8 rounded-lg shadow-lg border border-emerald-300">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-md bg-black text-emerald-300 border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md bg-black text-emerald-300 border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Message</label>
            <textarea
             cols={2}
              placeholder="Type your message..."
              className="p-3 rounded-md bg-black text-emerald-300 border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="contact-button w-full p-3 bg-emerald-300 text-black font-bold rounded-md hover:bg-emerald-400 hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
