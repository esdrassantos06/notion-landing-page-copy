import ImageCollection from "@/components/trustedTeams";
import Image from "next/image";
import drawing1 from "../../public/images/first-draw.png";

export default function Home() {
  return (
      <div className="w-full h-fit pt-12 flex">
        <div className="flex flex-col w-150 h-fit gap-4 ">
          <div className="flex w-120 gap-8 flex-col">
            <div className="titles text-text-primary">
              <h1 className={`cursor-default text-7xl  font-semibold`}>
                The happier workspace
              </h1>
              <h2 className="font-medium text-2xl">
                Write. Plan. Collaborate. With a little help from AI.
              </h2>
            </div>
            <nav className="buttons flex gap-2 w-120">
              <button className="button1 cursor-pointer rounded-md px-4 py-2.5 font-semibold bg-button1 transition-all duration-300 hover:bg-[#045ac3] text-button1-text">
                Get Notion free
              </button>
              <button className="button2 cursor-pointer rounded-md px-4 py-2.5 font-semibold transition-all duration-300 bg-button2 hover:bg-[#d6e1f5] text-button2-text">
                Request a demo
              </button>
            </nav>
          </div>

          <div className="flex flex-col mt-4 gap-4">
            <span className="text-gray-500 font-medium text-[15px]">
              Trusted by teams at
            </span>
            <ul>
              <ImageCollection />
            </ul>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <Image
            src={drawing1}
            width={640}
            height={338}
            alt="Drawing with people"
            className="object-contain"
          />
        </div>
      </div>
  );
}
