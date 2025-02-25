import Background from "@/public/background.webp";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="container mx-auto pb-6">
      <div className="relative rounded-md">
        <Image
          className="!h-[50vh] !w-full object-cover object-top brightness-75"
          src={Background}
          alt="Banner"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
          <h1 className="text-center text-9xl font-bold text-white">
            Marvel <br /> World
          </h1>
        </div>
      </div>
    </div>
  );
}
