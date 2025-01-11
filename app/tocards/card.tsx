"use client"

import { useRef, useEffect } from "react";

import gsap from "gsap";
import { LiaCommentsSolid } from "react-icons/lia";
import { IoEyeSharp } from "react-icons/io5";

const BlogCard = ({
  title,
  discription,
  views,
  comments,
  image,
}: {
  title: string;
  discription: string;
  views: number;
  comments: number;
  image?: string; // URL or placeholder
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (card) {
      // Animation for the entire card
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      // Animation for child elements (staggered effect)
      gsap.fromTo(
        card.querySelectorAll(".card-element"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="p-4 md:w-1/3" ref={cardRef}>
      <div className="h-full border-2 border-emerald-300 rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src={image || "/Images/placeholder.jpg"}
          alt={title}
          className="lg:h-50 md:h-50 w-full object-cover object-center card-element"
          width={200}
          height={150}
        />

        {/* Card Content */}
        <div className="p-6">
          <h1 className="text-lg font-medium text-white mb-3 card-element">{title}</h1>
          <p className="leading-relaxed text-emerald-200 mb-3 card-element">
            {discription}
          </p>

          {/* Views and Comments */}
          <div className="flex items-center justify-between text-emerald-400 mb-3 card-element">
            <span className="flex items-center text-xl ">{views}.<IoEyeSharp /></span>
            <span className="flex items-center text-xl">{comments}..<LiaCommentsSolid /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;