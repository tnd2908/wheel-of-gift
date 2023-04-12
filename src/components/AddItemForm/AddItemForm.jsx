import { Form, Input, InputNumber } from 'antd';
import React, { useEffect } from 'react';

const AddItemForm = ({ selectedGift = null }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (selectedGift) {
            form.setFieldsValue({ ...selectedGift })
        }
    }, [form, selectedGift]);

    return (
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            className='add-form'
            form={form}
        >
            <Form.Item
                label="Tên quà tặng"
                name="option"
                rules={[{ required: true, message: 'Vui lòng nhập tên quà tặng!' }]}
            >
                <Input size='large' placeholder='Tên quà tặng' />
            </Form.Item>

            <Form.Item
                label="Số lượng"
                name="quantity"
                rules={[{ required: true, message: 'Vui lòng nhập số lượng quà tặng!' }]}
            >
                <InputNumber size='large' type='number' controls={false} placeholder={0} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                <button className='submit-btn'>Xác nhận</button>
            </Form.Item>
        </Form>
    );
};

export default AddItemForm;