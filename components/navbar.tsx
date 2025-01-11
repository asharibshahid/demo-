import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <header className="text-white body-font border-4 border-emerald-300 bg-black">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <div className="flex justify-center items-center">
              <Image
                src="/images/techTales.jpg"
                alt="Tech Tales Logo"
                className="rounded-full"
                width={40} // Adjust width
                height={40} // Adjust height
              />
            </div>
        <span className="ml-3 text-xl  hover:text-emerald-400 text-emerald-200">Tech Tales</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" legacyBehavior>
  <a className="mr-5 hover:text-emerald-400">Home</a>
</Link>
<Link href="/toturials" legacyBehavior>
  <a className="mr-5 hover:text-emerald-400">Tutorials</a>
</Link>
<Link href="/blogs" legacyBehavior>
  <a className="mr-5 hover:text-emerald-400">Blogs</a>
</Link>
<Link href="/testimonials" legacyBehavior>
  <a className="mr-5 hover:text-emerald-400">Testimonials</a>
</Link>
<Link href="/contact" legacyBehavior>
  <a className="mr-5 hover:text-emerald-400">Contact Us</a>
</Link>

      </nav>
      <Link href={"/explore"}>
      <button  className="inline-flex items-center bg-emerald-300 border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0">
      Explore
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      </Link>
    </div>
  </header>
  </div>
  )
}

export default Navbar