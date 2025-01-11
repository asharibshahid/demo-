import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div><section className="text-emerald-200 body-font bg-black">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-emerald-200">
         Hello  
          <br className="hidden lg:inline-block " />
       Welcome To Tech Tales
        </h1>
        <ul className="mb-8 leading-relaxed list-disc list-inside">
  <li>Dive into the world of tech trends, tutorials, and inspiring stories that empower innovators and creators</li>
  <li>Explore tutorials, blogs, and guides crafted to fuel your knowledge and creativity</li>
  <li>Where curiosity meets content tutorials, blogs, and stories that spark inspiration</li>
  <li>A platform for thinkers and doers to explore ideas, share knowledge, and grow together</li>
</ul>

        
        <div className="flex justify-center">
         <Link href={"/explore"}>
          <button className="ml-4 inline-flex text-white bg-teal-500 border-emerald-400 border-2  py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
       Explore More
          </button>
          </Link>
          <Link href={"/toturials"}>
          <button className="ml-4 inline-flex text-black bg-emerald-300 border-emerald-400 border-2 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg">
  Toturials
          </button>
          </Link>
        </div>
       
       
      </div>
     
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="/images/tech1.jpg"
        />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Header