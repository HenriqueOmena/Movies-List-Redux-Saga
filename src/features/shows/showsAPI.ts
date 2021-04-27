import { apiTvMaze } from "api/config";

// A mock function to mimic making an async request for data
export async function fetchShows() {
  const { data } = await apiTvMaze.get(`shows`);
  return data;
}
