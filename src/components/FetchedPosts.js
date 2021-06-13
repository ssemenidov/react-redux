import React from "react";
import Post from "./Post";
import { List, Button } from "antd";
import { connect } from "react-redux";
import { fetchPost, showLoader, hideLoader } from "../redux/actions";
import Column from "antd/lib/table/Column";
function FetchedPosts(props) {
    const FetchPosts = async () => {
        await props.fetchPost();
    };
    return (
        <>
            <List
                header={
                    <span
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <h1>Fetched Posts</h1>
                        <span>
                            <Button type="primary" onClick={FetchPosts}>
                                Update
                            </Button>
                        </span>
                    </span>
                }
                bordered
                loading={props.loader}
                dataSource={props.posts}
                renderItem={(post) => (
                    <List.Item>
                        <Post post={post}></Post>
                    </List.Item>
                )}
            />
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.fetchedPosts,
        loader: state.app.loader,
    };
};
const mapDispatchToProps = {
    fetchPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);
