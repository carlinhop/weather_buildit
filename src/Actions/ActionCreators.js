export const ALLPOSTS = "ALLPOSTS";

const urlCategories = "http://localhost:3001/categories";

export function getPosts(posts) {
  return {
    type: ALLPOSTS,
    payload: posts
  };
}

export function getPostData() {
  return dispatch => {
    fetch(urlPosts, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      }
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(getPosts(JSON.parse(data)));
      });
  };
}
