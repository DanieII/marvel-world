"use server";

import { MD5 } from "crypto-js";

const getMarvelAuthParams = async () => {
  const apiKey = process.env.MARVEL_PUBLIC_KEY!;
  const ts = new Date().getTime();
  const message = ts + process.env.MARVEL_PRIVATE_KEY! + apiKey;
  const hash = await MD5(message).toString();

  return { apiKey, ts, hash };
};

export { getMarvelAuthParams };
