import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Card } from "antd";
function Post({ post }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Modal
                title={post.title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>{post.body}</p>
            </Modal>
            <Card
                title={post.title}
                extra={
                    <Button type="primary" onClick={showModal}>
                        More
                    </Button>
                }
                style={{ maxWidth: "400px", width: "100%", margin: "0 auto" }}
            >
                <h2>{post.body}</h2>
            </Card>
        </>
    );
}

export default Post;
