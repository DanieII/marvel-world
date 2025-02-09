import { getMarvelAuthParams } from "@/lib/marvel";

export default async function Characters() {
  const { apiKey, ts, hash } = await getMarvelAuthParams();
  //const response = await fetch(
  //  `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`,
  //);
  //const data = await response.json();
  //console.log(data.data.results);

  return "Characters";
}
