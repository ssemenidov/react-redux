import React from "react";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import { Row, Col } from "antd";
import "./App.css";
function App() {
    return (
        <div className="App">
            <Row>
                <Col span={18}>
                    <PostForm></PostForm>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={12}>
                    <Posts></Posts>
                </Col>
                <Col span={12}>
                    <FetchedPosts></FetchedPosts>
                </Col>
            </Row>
        </div>
    );
}

export default App;
