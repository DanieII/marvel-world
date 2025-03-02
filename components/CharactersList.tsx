import { getMarvelCharacters } from "@/lib/marvel";
import CharacterCard from "./CharacterCard";
import { MARVEL_CHARACTERS_PER_PAGE } from "@/lib/constants";
import Pagination from "./Pagination";
import ErrorMessage from "./ErrorMessage";

export default async function CharactersList({ page = 1 }) {
  try {
    const { characters, total } = await getMarvelCharacters(page);
    const totalPages = Math.ceil(total / MARVEL_CHARACTERS_PER_PAGE);

    return (
      <div className="container mx-auto px-4 pb-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    );
  } catch (error) {
    return <ErrorMessage message={"Could not load characters"} />;
  }
}
