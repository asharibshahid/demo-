"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function BlogSection() {
  useEffect(() => {
    gsap.fromTo(
      ".blog-card",
      { 
        opacity: 0, 
        y: 100, 
        scale: 0.8, 
        rotation: -10, 
        filter: "blur(10px)" 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotation: 0, 
        filter: "blur(0px)", 
        stagger: 0.2, 
        duration: 1.5, 
        ease: "elastic.out(1, 0.5)" 
      }
    );
  }, []);
  

  const blogs = [
    { id: 1, title: "The Role of Technology in Young Lives", paragraph:"  Young people today are digital natives. They are born into a world buzzing with smartphones, social media, and artificial intelligence. Technology has transformed how theyLearn Online education platforms like Khan Academy, Coursera, and YouTube make knowledge accessible anywhere, anytime. Interactive apps gamify learning, making it more engagingCommunicate Social media platforms like Instagram TikTok and Snapchat help them stay connected with peers and share their creativity with the worldExpress Creativity: From video editing apps to digital art tools, technology provides youngsters with the means to showcase their imagination in ways never before possible", image: "/images/tech1.jpg" },
    { id: 2, title: "UI/UX Best Practices for 2024", paragraph:"UI/UX design in 2024 will be characterized by a focus on personalization, accessibility, and intuitive, delightful experiences. By staying up to date with the latest trends, technologies, and user needs, designers can create digital products that not only meet but exceed user expectations. As the field evolves, remember that the best designs are those that are thoughtful, purposeful, and user-centric. Whether you’re working on a website, mobile app, or any other digital platform, these best practices will guide you toward creating a modern, engaging, and sustainable user experience.", image: "/images/tech2.jpg" },
    { id: 3, title: "AI-Driven Design Tools",  paragraph: "While AI-driven tools are rapidly transforming the UI/UX design industry, it’s important to remember that these tools are designed to assist, not replace, human designers. The creativity, intuition, and empathy that designers bring to their work cannot be replicated by AI. Instead, AI serves as a powerful partner, helping to automate repetitive tasks, provide insights, and speed up the design process.By integrating AI into their workflows, designers can create more efficient, innovative, and personalized user experiences, positioning themselves to succeed in a rapidly evolving digital landscape.",image: "/images/tech3.jpg" },
  ];

  return (
    <section className="text-emerald-300 bg-black body-font">
          <div className="text-center">
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
  Popular Blogs
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 md:w-1/3 blog-card">
              <div className="h-full border-2 border-emerald-300 rounded-lg overflow-hidden">
                <img
                  className="lg:h-50 md:h-50 w-full object-cover object-center"
                  src={blog.image}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="text-xs font-medium text-emerald-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="text-lg font-medium text-white mb-3">
                    {blog.title}
                  </h1>
                  <p className="leading-relaxed text-emerald-200 mb-3">
                  {blog.paragraph}
                  </p>
                  <a className="inline-flex items-center  text-white">
                    Learn More
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
          ))}
        </div>
      </div>
    </section>
  );
}
