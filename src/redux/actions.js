import { CREATE_POST, FETCH_POST, HIDE_LOADER, SHOW_LOADER } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post,
    };
}
export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}
export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}
export function fetchPost() {
    return async (dispatch) => {
        dispatch(showLoader());
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const json = await res.json();
        dispatch({ type: FETCH_POST, payload: json });
        dispatch(hideLoader());
    };
}
