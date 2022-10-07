import axios from "axios";
export async function CreatePost(movieName: string) {
  return await axios.get(
    `https://www.omdbapi.com/?s=${movieName}&apikey=3e33f0a9&page=1`
  );
}
