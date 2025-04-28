import api from "./axios";

const path = "/posts";

export const getPosts = async (params) => {
  try {
    const response = await api.get(path, { params });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
