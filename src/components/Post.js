import React from "react";
import { Card } from "antd";
function Post({ post }) {
    return (
        <Card
            title={post.title}
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
        >
            <h2>{post.body}</h2>
        </Card>
    );
}

export default Post;
