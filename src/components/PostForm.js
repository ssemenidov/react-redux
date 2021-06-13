import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function PostForm(props) {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const newPost = {
            title: values.title,
            id: Date.now().toString(),
        };
        props.createPost(newPost);
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: "Please input your title",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default connect(null, { createPost })(PostForm);
