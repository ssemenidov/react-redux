import { call, put } from "@redux-saga/core/effects";
import { takeEvery } from "redux-saga";
import { showLoader } from "./actions";
import { FETCH_POST, REQUEST_POSTS } from "./types";
export default function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}
function* sagaWorker() {
    try {
        yield put(showLoader);
        const payload = yield call(fetchPosts);
        yield put({ type: FETCH_POST, payload });
    } catch (e) {
        console.log(e);
    }
}
async function fetchPosts() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const json = await res.json();
    return json;
}
