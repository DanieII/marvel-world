import { getThumbnailUrl } from "@/lib/utils";
import { Character } from "@/types/marvel";
import Image from "next/image";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const characterThumbnail = getThumbnailUrl(
    character.thumbnail.path,
    character.thumbnail.extension,
  );

  return (
    <div className="group flex flex-col gap-4">
      <div className="overflow-hidden shadow-xl">
        <Image
          className="aspect-square overflow-hidden object-cover transition-transform group-hover:scale-125"
          src={characterThumbnail}
          alt={character.name}
          width={500}
          height={500}
        />
      </div>
      <p className="font-bold">{character.name}</p>
    </div>
  );
}
