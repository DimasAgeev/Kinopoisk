import axios from "axios";
export async function CreatePost() {
  return await axios.get(
    "http://www.omdbapi.com/?s=day&apikey=3e33f0a9&page=1"
  );
}
