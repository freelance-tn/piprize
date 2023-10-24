import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../_components/footer";

const Thanks = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-tl from-[#072734] to-[#041622]">
      <div className="space-y-6 p-4 text-white text-center flex flex-col items-center md:w-1/2 ">
        <Image src="/cryptophone.png" className="" alt="error" width={200} height={200} />
        <h1 className="p-2 capitalize text-center text-4xl md:text-left font-bold md:text-5xl">
          Thank You
        </h1>
        <h1 className="p-2   text-center text-5xl md:text-left font-bold md:text-7xl bg-gradient-to-r from-yellow-300 to-blue-400 text-transparent bg-clip-text">
          FORM SUBMITED
        </h1>

        <p className="p-2 text-center  ">
          Pi Network represents a collective vision of a fairer, more inclusive
          future. By coming together, we can revolutionize the way we transact,
          interact, and empower one another. Join Pi Network and be part of a
          movement that is changing the world, one transaction at a time.
        </p>

        <div className="">
          <Link href="/">
            <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Back Home</span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Thanks;
