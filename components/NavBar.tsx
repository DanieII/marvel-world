import Groot from "@/public/groot.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="container mx-auto flex h-24 items-center justify-between p-4">
        <Link className="h-full" href="/">
          <Image className="h-full w-auto" src={Groot} alt="Groot" />
        </Link>
        <div className="flex gap-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/characters">Characters</Link>
          <Link href="#">Movies</Link>
        </div>
      </div>
    </nav>
  );
}
