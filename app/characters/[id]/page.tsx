import { getMarvelCharacterDetails } from "@/lib/marvel";
import { getThumbnailUrl } from "@/lib/utils";
import Image from "next/image";

type CharacterDetailsParams = {
  params: Promise<{ id: string }>;
};

export default async function CharacterDetails({
  params,
}: CharacterDetailsParams) {
  const { id } = await params;
  const character = await getMarvelCharacterDetails(id);
  const characterThumbnail = getThumbnailUrl(
    character.thumbnail.path,
    character.thumbnail.extension,
  );

  return (
    <div>
      <div className="relative flex h-[65vh] items-center justify-center">
        <Image
          className="absolute left-0 top-0 -z-10 h-full object-cover brightness-50"
          src={characterThumbnail}
          width={1600}
          height={500}
          alt={character.name}
        />
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-center text-white">
          <h1 className="text-4xl font-bold">{character.name}</h1>
          <p className="mx-auto max-w-[50%] text-xl">{character.description}</p>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between gap-4 px-4 pt-6">
        <div className="basis-[45%]">
          <h2 className="text-xl">Comics</h2>
          <ul className="list-inside">
            {character.comics.items.map((comic) => (
              <li className="list-disc" key={comic.name}>
                {comic.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-[45%]">
          <h2 className="text-xl">Series</h2>
          <ul className="list-inside">
            {character.series.items.map((currentSeries) => (
              <li className="list-disc" key={currentSeries.name}>
                {currentSeries.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-[45%]">
          <h2 className="text-xl">Stories</h2>
          <ul className="list-inside">
            {character.stories.items.map((story) => (
              <li className="list-disc" key={story.name}>
                {story.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-[45%]">
          <h2 className="text-xl">Events</h2>
          <ul className="list-inside">
            {character.events.items.map((event) => (
              <li className="list-disc" key={event.name}>
                {event.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
