import { Form, Input } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';

const BackgroundForm = ({onCloseModal}) => {
    const [form] = Form.useForm();
    const { background } = useContext(Context);
    const onFinish = (values) => {
        console.log(values);
        onCloseModal();
    }
    useEffect(() => {
        form.setFieldValue('background', background);
    }, [form, background]);
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{ marginTop: '20px'}}
            onFinish={onFinish}
            layout='vertical'
            form={form}
        >
            <Form.Item
                label="Hình nền:"
                name="background"
                rules={[{ required: true, message: 'Vui lòng nhập đường link hình nền!' }]}
            >
                <Input size='large' placeholder='Link hình nền' />
            </Form.Item>

            <Form.Item>
                <button style={{ marginTop: '20px'}} className='btn-save'>Xác nhận</button>
            </Form.Item>
        </Form>
    );
};

export default BackgroundForm;