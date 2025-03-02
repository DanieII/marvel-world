"use server";

import { MD5 } from "crypto-js";
import { MARVEL_CHARACTERS_PER_PAGE } from "./constants";
import { Character } from "@/types/marvel";

const API_BASE = "http://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY!;
const API_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY!;
const ts = Date.now().toString();

const getHash = async () => {
  return await MD5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY).toString();
};

const getMarvelCharacters = async (
  page = 1,
  limit = MARVEL_CHARACTERS_PER_PAGE,
) => {
  const hash = await getHash();
  const offset = (page - 1) * limit;
  const query = `?ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;
  const response = await fetch(`${API_BASE}/characters${query}`, {
    cache: "force-cache",
  });
  const data = await response.json();
  const characters: Character[] = data.data.results;
  const total = data.data.total;

  return { characters, total };
};

export { getMarvelCharacters };
