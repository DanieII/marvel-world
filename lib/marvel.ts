"use server";

import { Character } from "@/types";
import { MD5 } from "crypto-js";

const getMarvelAuthParams = async () => {
  const apiKey = process.env.MARVEL_PUBLIC_KEY!;
  const ts = new Date().getTime();
  const message = ts + process.env.MARVEL_PRIVATE_KEY! + apiKey;
  const hash = await MD5(message).toString();

  return { apiKey, ts, hash };
};

const getMarvelCharacters = async () => {
  const { apiKey, ts, hash } = await getMarvelAuthParams();
  const response = await fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`,
  );
  const data = await response.json();
  const characters: Character[] = data.data.results;

  return characters;
};

export { getMarvelCharacters };
