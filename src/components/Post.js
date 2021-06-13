import React from "react";
import { Card } from "antd";
function Post({ post }) {
    return (
        <Card title="Post" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <h2>{post.title}</h2>
        </Card>
    );
}

export default Post;
