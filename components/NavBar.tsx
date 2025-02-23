import Groot from "@/public/groot.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav>
      <div className="container mx-auto flex h-24 items-center justify-between p-4">
        <Image className="h-full w-auto" src={Groot} alt="Groot" />
        <div className="flex gap-6 text-lg">
          <a href="#">Home</a>
          <a href="#">Characters</a>
          <a href="#">Movies</a>
        </div>
      </div>
    </nav>
  );
}
