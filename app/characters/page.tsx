import { Suspense } from "react";
import CharactersList from "@/components/CharactersList";

export default function Characters() {
  return (
    <div className="container mx-auto px-4 pb-6">
      <h1 className="pb-6 text-center text-5xl">Characters</h1>
      <Suspense fallback={<p className="text-center">Loading characters...</p>}>
        <CharactersList />
      </Suspense>
    </div>
  );
}
