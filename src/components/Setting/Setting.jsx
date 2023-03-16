import { Form, Select, Switch } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { ratioOptions } from '../../mock/data';
import { saveNewRatio } from '../../ultils/setting';

const Setting = () => {
    const { ratio, setRatio } = useContext(Context);
    const [form] = Form.useForm();

    const onSaveRatio = (newRatio) => {
        setRatio(newRatio);
        saveNewRatio(newRatio);
    }
    const onReset = () => {
        onSaveRatio(50);
        form.setFieldValue('ratio', 50)
    }
    const onFinish = (value) => {
        onSaveRatio(value.ratio);
    }
    useEffect(() => {
        form.setFieldValue('ratio', ratio)
    }, [form, ratio]);

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className='add-form'
            form={form}
        >
            <Form.Item
                label="Tỉ lệ không ra quà"
                name="ratio"
                rules={[{ required: true, message: 'Vui lòng tỉ lệ' }]}
            >
                <Select options={ratioOptions} />
            </Form.Item>

            <Form.Item
                label="Quick edit mode"
                name="isMultipleMode"
            >
                <Switch checked disabled />
            </Form.Item>
            <div className="form-footer">
                <button onClick={onReset} type='button' className="btn-reset">Reset</button>
                <button type='submit' className='btn-save'>Lưu</button>
            </div>
        </Form>
    );
};

export default Setting;