import client from "../sanity/client";
import BlogCard from "../tocards/card";

const Tutorials = async () => {
  const res = await client.fetch(
    `*[_type == "Toturials"] {
      _id,
      title,
      discription,
      views,
      comments,
      image { asset-> { _id, url } }
    }`
  );

  return (
    <div className="bg-black">
      {/* Header Section */}
      <br />
      <div className="text-center bg-black">
        <h1 className="bg-black text-6xl font-bold text-teal-400 mb-4">The Tutorials</h1>
        <span className="inline-block h-1 w-24 rounded bg-emerald-500"></span>
      </div>

      {/* Container for Cards */}
      <div className="container px-5 py-24 mx-auto bg-black">
        <div className="flex flex-wrap -m-4">
          {res.map(
            (val: {
              image?: { asset?: { url?: string } }; // Optional image structure
              views: number;
              comments: number;
              discription: string;
              title: string;
              _id: string;
            }) => (
              <BlogCard
                key={val._id}
                image={val.image?.asset?.url || "/Images/placeholder.jpg"}
                views={val.views}
                comments={val.comments}
                discription={val.discription}
                title={val.title}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
