import axios from "axios";

const TOKEN = "1a9ac6788141f7472f831a3054e9d0f3";

export function getEpisodes() {
  return axios.get("https://www.buzzsprout.com/api/1160471/episodes.json", {
    headers: { Authorization: "Bearer " + TOKEN }
  });
}
