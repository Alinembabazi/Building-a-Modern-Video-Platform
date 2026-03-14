// src/utils/fetchFromAPI.js

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const BASE_URL = import.meta.env.VITE_YOUTUBE_API_URL;

// Named export
export async function fetchFromAPI(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });
  const data = await response.json();
  return data;
}
