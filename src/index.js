import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./redux/rootReducers";
import thunk from "redux-thunk";
import App from "./App";
import "antd/dist/antd.css";
const saga = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
