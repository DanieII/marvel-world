import IronMan from "@/public/iron-man.webp";
import Image from "next/image";
import Link from "next/link";

export default async function HomeCharacters() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-6 text-center lg:h-[650px] lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-5xl">Meet the characters</p>
        <Link
          className="-skew-x-12 border-4 border-black px-4 py-2 text-3xl hover:border-gray-200"
          href="/characters"
        >
          Explore
        </Link>
      </div>
      <Image className="h-full w-auto" src={IronMan} alt="Iron Man" />
    </div>
  );
}
