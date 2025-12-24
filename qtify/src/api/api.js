import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend.labs.crio.do";

const getRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchTopAlbums = async () => {
  return getRequest(`${BACKEND_ENDPOINT}/albums/top`);
};

export const fetchNewAlbums = async () => {
  return getRequest(`${BACKEND_ENDPOINT}/albums/new`);
};

export const fetchSongs = async () => {
  return getRequest(`${BACKEND_ENDPOINT}/songs`);
};

export const fetchFilters = async () => {
  return getRequest(`${BACKEND_ENDPOINT}/genres`);
};
