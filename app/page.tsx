import Link from "next/link";
import Card from "./components/Card";
import { displayData } from "@/Data/displayData";

export default function HomePage() {
  return (
    <div className="md:py-24 py-12">
      <h1 className="md:text-5xl text-4xl font-bold text-center Heading mb-20">
        Welcome to Our Blog Web
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-auto px-4">
        {displayData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            category={data.category}
            date={data.date}/>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button>
          <Link href={"/blog"} className="px-8 py-3 rounded-sm text-white text-2xl font-[500] bg-blue-900">View All Posts</Link>
        </button>
      </div>
    </div>
  );
}
