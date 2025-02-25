import { getMarvelCharacters } from "@/lib/marvel";
import CharacterCard from "./CharacterCard";

export default async function CharactersList() {
  const characters = await getMarvelCharacters();
  console.log(characters);

  return (
    <div className="container mx-auto flex flex-wrap justify-evenly gap-8 px-4 pb-6">
      {characters.map((character) => (
        <div className="basis-[30%]" key={character.id}>
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  );
}
