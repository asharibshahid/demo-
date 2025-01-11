"use client"
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  const containerRef = useRef(null);
 
   useEffect(() => {
     if (containerRef.current) {
       gsap.fromTo(
         containerRef.current,
         {
           opacity: 0,
           y: 100,
         },
         {
           opacity: 1,
           y: 0,
           duration: 1,
           ease: "power3.out",
         }
       );
     }
   }, []);

  return (

    
    <section className=" body-font      bg-black text-emerald-300">
     <div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
    Testimonials
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>

        

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row -m-4" ref={testimonialsRef}> 
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 flex flex-col items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
              src="https://tse4.mm.bing.net/th?id=OIP.AlIScK6urTegkZ178dAAGgHaHa&pid=Api&P=0&h=220"
            />
            <p className="leading-relaxed text-center">
              Edison bulb retro cloud bread echo park helvetica stumptown
              taiyaki taxidermy 90s cronut +1 kinfolk Single origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware
            </p>
            <span className="inline-block h-1 w-10 rounded bg-emerald-500 mt-6 mb-4" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500 dark:text-gray-400">Senior Product Designer</p>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 flex flex-col items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
              src="https://tse3.mm.bing.net/th?id=OIP.l0ai3Gemc84mnwkfBwywrAHaHa&pid=Api&P=0&h=220"
            />
            <p className="leading-relaxed text-center">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90s cronut +1 kinfolk Single origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware
            </p>
            <span className="inline-block h-1 w-10 rounded bg-emerald-500 mt-6 mb-4" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              ALPER KAMU
            </h2>
            <p className="text-gray-500 dark:text-gray-400">UI Develeoper</p>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4 flex flex-col items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
              src="https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=220"
            />
            <p className="leading-relaxed text-center">
              Edison bulb retro cloud bread echo park helvetica stumptown
              taiyaki taxidermy 90s cronut +1 kinfolk Single origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware
            </p>
            <span className="inline-block h-1 w-10 rounded bg-emerald-500 mt-6 mb-4" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HENRY LETHAM
            </h2>
            <p className="text-gray-500 dark:text-gray-400">CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;