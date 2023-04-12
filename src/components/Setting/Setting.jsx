import { Form, InputNumber, Select, Switch } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { ratioOptions } from '../../mock/data';
import { MAX_DURATION, saveDuration, saveNewRatio } from '../../ultils/setting';

const Setting = ({ onCLoseModal }) => {
    const { ratio, setRatio, duration, setDuration } = useContext(Context);
    const [form] = Form.useForm();

    const onSaveRatio = (newRatio) => {
        if (newRatio >= 0 && newRatio <= 100) {
            setRatio(newRatio);
            saveNewRatio(newRatio);
        }
    }

    const onSaveDuration = (newDuration) => {
        if (newDuration > 0 && duration < MAX_DURATION) {
            setDuration(newDuration);
            saveDuration(newDuration);
        } else {
            setDuration(3);
            saveDuration(3);
        }
    }
    const onReset = () => {
        onSaveRatio(50);
        onSaveDuration(3);
        form.setFieldValue('ratio', 50);
        form.setFieldValue('duration', 3);
    }
    const onFinish = (value) => {
        onSaveRatio(value.ratio);
        onSaveDuration(value.duration);
        onCLoseModal();
    }

    useEffect(() => {
        form.setFieldValue('ratio', ratio);
        form.setFieldValue('duration', duration);
    }, [form, ratio, duration]);
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
                label="Thời gian quay"
                name="duration"
                rules={[
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (value && value >= 1 && value <= MAX_DURATION) {
                            return Promise.resolve();
                          }
                          if (!value) {
                            return Promise.reject(new Error('Vui lòng nhập thời gian!'));
                          }
                          return Promise.reject(new Error('Thời gian quay phải trong khoảng từ 1 đến ' + MAX_DURATION + ' giây' ));
                        },
                    }),
                ]}
            >
                <InputNumber type='number' controls={false} placeholder={0} />
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