import React from "react";
import Post from "./Post";
import { List } from "antd";
function FetchedPosts({ posts }) {
    return (
        <List
            header={<h1>Fetched Posts</h1>}
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

export default FetchedPosts;
