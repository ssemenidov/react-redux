import React from "react";
import Post from "./Post";
import { List } from "antd";
import { connect } from "react-redux";
function Posts({ posts }) {
    return (
        <List
            header={<h1>Posts</h1>}
            bordered
            dataSource={posts}
            renderItem={(post) => (
                <List.Item>
                    <Post post={post} key={post.id}></Post>
                </List.Item>
            )}
        />
    );
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};
export default connect(mapStateToProps)(Posts);
