import { Suspense } from "react";
import CharactersList from "@/components/CharactersList";

type CharactersProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Characters({ searchParams }: CharactersProps) {
  const searchPage = (await searchParams).page;
  const page = parseInt((searchPage as string) || "1");

  return (
    <div className="container mx-auto px-4 pb-6">
      <h1 className="pb-6 text-center text-5xl">Characters</h1>
      <Suspense
        key={page}
        fallback={<p className="text-center">Loading characters...</p>}
      >
        <CharactersList page={page} />
      </Suspense>
    </div>
  );
}
