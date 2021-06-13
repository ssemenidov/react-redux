import { CREATE_POST, FETCH_POST } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post,
    };
}

export function fetchPost() {
    return async (dispatch) => {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const json = await res.json();
        dispatch({ type: FETCH_POST, payload: json });
    };
}
