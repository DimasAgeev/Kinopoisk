import axios from "axios";
export async function getPostDetails(movieId = "") {
  return await axios.get(
    `http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=3e33f0a9`
  );
}
