"use server";

import { MD5 } from "crypto-js";
import { MARVEL_CHARACTERS_PER_PAGE } from "./constants";
import { Character } from "@/types/marvel";

const API_BASE = "http://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY!;
const API_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY!;

const getHash = async () => {
  return await MD5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY).toString();
};

const ts = Date.now().toString();
const hash = await getHash();
const apiAuthParams = `?ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

const getMarvelCharacters = async (
  page = 1,
  limit = MARVEL_CHARACTERS_PER_PAGE,
) => {
  const offset = (page - 1) * limit;
  const query = `&limit=${limit}&offset=${offset}`;
  const response = await fetch(
    `${API_BASE}/characters${apiAuthParams}${query}`,
    {
      cache: "force-cache",
    },
  );
  const data = await response.json();
  const characters: Character[] = data.data.results;
  const total = data.data.total;

  return { characters, total };
};

const getMarvelCharacterDetails = async (id: string) => {
  const response = await fetch(`${API_BASE}/characters/${id}${apiAuthParams}`);
  const data = await response.json();
  const character: Character = data.data.results[0];

  return character;
};

export { getMarvelCharacters, getMarvelCharacterDetails };
