import { POSTS_FETCH, POST_FETCH_DETAIL } from "./actionType";

const baseUrl = "https://tabloidkuota-api.khoirulariffin.dev";

export const postsSetPosts = (payload) => ({
  type: POSTS_FETCH,
  payload,
});

export const postFetchDetailPostSuccess = (payload) => ({
  type: POST_FETCH_DETAIL,
  payload,
});

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    if (!response.ok) {
      throw { name: "error" };
    }
    const jsonData = await response.json();

    dispatch(postsSetPosts(jsonData));
  } catch (err) {
    if (err.name === "error") {
      console.log(err);
    } else {
      dispatch(err);
    }
  }
};

export const postFetchDetailPost = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseUrl}/posts/${id}`);
    if (!response.ok) {
      throw { name: "error" };
    }
    const jsonData = await response.json();

    dispatch(postFetchDetailPostSuccess(jsonData));
  } catch (err) {
    if (err.name === "error") {
      console.log(err);
    } else {
      dispatch(err);
    }
  }
};
