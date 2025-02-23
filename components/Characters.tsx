//import { getMarvelAuthParams } from "@/lib/marvel";
import IronMan from "@/public/iron-man.webp";
import Image from "next/image";

export default async function Characters() {
  //const { apiKey, ts, hash } = await getMarvelAuthParams();
  //const response = await fetch(
  //  `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`,
  //);
  //const data = await response.json();
  //console.log(data.data.results);

  return (
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-6 text-center lg:h-[750px] lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-6xl">Meet the characters</p>
        <button className="-skew-x-12 border-4 border-black px-4 py-2 text-3xl hover:border-gray-200">
          Explore
        </button>
      </div>
      <Image className="h-full w-auto" src={IronMan} alt="Iron Man" />
    </div>
  );
}
