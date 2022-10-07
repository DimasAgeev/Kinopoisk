import axios, { AxiosPromise, AxiosResponse } from "axios";
import { DetailsPostType } from "../components/PostDetails/detailsPostType";
export async function getPostDetails(movieId = "") {
  return await axios.get(
    `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=3e33f0a9`
  );
}
