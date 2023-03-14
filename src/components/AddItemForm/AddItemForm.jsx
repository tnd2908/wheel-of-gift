import { Form, Input } from 'antd';
import React from 'react';

const AddItemForm = () => {
    const onFinish = (gift) => {
        console.log(gift);
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Tên quà tặng"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên quà tặng!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Số lượng"
                name="quantity"
                rules={[{ required: true, message: 'Vui lòng nhập số lượng quà tặng!' }]}
            >
                <Input.Number />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
                <button>Xác nhận</button>
            </Form.Item>
        </Form>
    );
};

export default AddItemForm;