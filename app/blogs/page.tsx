import { format } from 'date-fns'; 
import client from "../sanity/client";
import BlCrd from "../tocards/blcard";
const Blog = async () => {
   const res = await client.fetch(
      `*[_type == "Blog"] {
        _id,
        title,
        discription,
       slug,
       date,
      }`
    );
   console.log(res)

 return(
<div className='bg-black'>
  <br />
   <div className="text-center bg-black">
        <h1 className="bg-black text-6xl font-bold text-teal-400 mb-4">Hey Learner ❤</h1>
        <span className="inline-block h-1 w-24 rounded bg-emerald-500"></span>
      </div>
 {res.map(
            (val: {
              discription: string;
              title: string;
              slug: { current: string };
              date: string;
              _id:  string;
            }) => (
              <BlCrd
              key={val._id}
              id={val._id}    // Make sure to pass this
              discription={val.discription}
              title={val.title}
              slug={val.slug.current}
              date={val.date ? format(new Date(val.date), "dd MMM yyyy") : "No Date"}
            />
           
            )
          )}

  
 </div>
 )
};

export default Blog;

