import React from "react";
import Post from "./Post";
import { List } from "antd";
function Posts({ posts }) {
    if (!posts.length) {
        return <p>No posts</p>;
    }
    return (
        <List
            header={<h1>Posts</h1>}
            bordered
            dataSource={posts}
            renderItem={(post) => (
                <List.Item>
                    <Post post={post}></Post>
                </List.Item>
            )}
        />
    );
}

export default Posts;
