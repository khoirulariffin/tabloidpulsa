import { CATEGORIES_FETCH, POSTS_FETCH, POST_FETCH_DETAIL } from "./actionType";
import Swal from "sweetalert2";

export const postsSetPosts = (payload) => ({
  type: POSTS_FETCH,
  payload,
});

export const postsSetCategories = (payload) => ({
  type: CATEGORIES_FETCH,
  payload,
});

export const postFetchDetailPostSuccess = (payload) => ({
  type: POST_FETCH_DETAIL,
  payload,
});

const baseUrl = "https://tabloidkuota-api.khoirulariffin.dev";

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
      dispatch(err);
    } else {
      dispatch(err);
    }
  }
};

export const fetchCategories = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseUrl}/categories`);
    if (!response.ok) {
      throw { name: "error" };
    }
    const jsonData = await response.json();

    dispatch(postsSetCategories(jsonData));
  } catch (err) {
    if (err.name === "error") {
      console.log(err);
      dispatch(err);
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
      dispatch(err);
    } else {
      dispatch(err);
    }
  }
};

export const postAddPost = (payload) => async (dispatch, getState) => {
  try {
    const access_token = localStorage.getItem("access_token");

    const opt = {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        access_token,
      },
    };

    const response = await fetch(`${baseUrl}/posts`, opt);
    if (!response.ok) {
      throw { name: "error", data: await response.json() };
    }

    const jsonData = await response.json();
    Swal.fire("Success", "Success create data", "success");
    dispatch(fetchPosts());
  } catch (err) {
    if (err.name === "error") {
      console.log(err);
      dispatch(err);
    } else {
      dispatch(err);
    }
  }
};

export const postEditPost = (payload) => async (dispatch, getState) => {
  try {
    const access_token = localStorage.getItem("access_token");

    const data = {
      title: payload.title,
      image: payload.image,
      slug: payload.slug,
      content: payload.content,
      categoryId: payload.categoryId,
      authorId: payload.authorId,
    };

    const opt = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        access_token,
      },
    };

    const response = await fetch(`${baseUrl}/posts/${payload.id}`, opt);
    if (!response.ok) {
      throw { name: "error" };
    }

    const jsonData = await response.json();
    Swal.fire("Success", "Success edit data", "success");
    dispatch(fetchPosts());
  } catch (err) {
    if (err.name === "error") {
      Swal.fire("Error", "There is something wrong!", "error");
      dispatch(err);
    } else {
      Swal.fire("Error", "There is something wrong!", "error");
      dispatch(err);
    }
  }
};

export const postDeletePost = (id) => async (dispatch, getState) => {
  try {
    const access_token = localStorage.getItem("access_token");

    const opt = {
      method: "delete",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        access_token,
      },
    };

    const response = await fetch(`${baseUrl}/posts/${id}`, opt);
    if (!response.ok) {
      throw { name: "error" };
    }

    const jsonData = await response.json();
    Swal.fire("Success", "Success delete", "success");
    dispatch(fetchPosts());
  } catch (err) {
    if (err.name === "error") {
      Swal.fire("Error", "There is something wrong!", "error");
      dispatch(err);
    } else {
      Swal.fire("Error", "There is something wrong!", "error");
      dispatch(err);
    }
  }
};

export const login = (payload) => async (dispatch, getState) => {
  try {
    const opt = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(`${baseUrl}/users/login`, opt);
    if (!response.ok) {
      throw { name: "error" };
    }

    const jsonData = await response.json();
    localStorage.setItem("access_token", jsonData.access_token);
    Swal.fire("Success", "You are logged in", "success");
    dispatch(fetchPosts());
  } catch (err) {
    if (err.name === "error") {
      setTimeout(() => {
        Swal.fire("Error", "Username or password incorrect", "error");
      }, 2000);
      dispatch(err);
    } else {
      Swal.fire("Error", "There is something wrong!", "error");
      dispatch(err);
    }
  }
};

export const register = (payload) => async (dispatch, getState) => {
  try {
    const opt = {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(`${baseUrl}/users/register`, opt);
    if (!response.ok) {
      throw { name: "error", data: await response.json() };
    }

    const jsonData = await response.json();
    Swal.fire("Success", "Success create data", "success");
  } catch (err) {
    if (err.name === "error") {
      dispatch(err);
    } else {
      dispatch(err);
    }
  }
};
