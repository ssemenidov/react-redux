import React from "react";
import Post from "./Post";
import { List, Button } from "antd";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions";
function FetchedPosts(props) {
    const FetchPosts = () => {
        props.fetchPost();
    };
    return (
        <>
            <List
                header={<h1>Fetched Posts</h1>}
                bordered
                dataSource={props.posts}
                renderItem={(post) => (
                    <List.Item>
                        <Post post={post}></Post>
                    </List.Item>
                )}
            />
            <Button type="primary" onClick={FetchPosts}>
                Update
            </Button>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.fetchedPosts,
    };
};
const mapDispatchToProps = {
    fetchPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);
