import { Form, Input } from 'antd';

import React, { useCallback, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { bulkEditGiftList } from '../../ultils/gift';

const ColorForm = ({onCloseModal}) => {
    const { giftList, setGiftList } = useContext(Context);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const { gifts } = values;
		bulkEditGiftList(gifts);
		setGiftList(gifts);
		onCloseModal();
    }
    const onReset = useCallback(() => {
        form.setFieldValue('gifts', giftList);
    }, [form, giftList]
    )

    useEffect(() => {
        onReset();
    }, [onReset])
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
        >
            <div className="form-body">
                <Form.List name="gifts">
                    {(fields, { _, remove }) => (
                        <>
                            {fields.map((field, i) => (
                                <div key={'key' + field.name} className="flex flex-col">
                                    <h6 className='w-full' style={{ fontSize: '0.8rem', marginBottom: '8px'}}>
                                        {form.getFieldValue('gifts')[field.name].option || ''}
                                    </h6>
                                    <div  className='d-flex' style={{ gap: '10px 20px' }}>
                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(prevValues, curValues) =>
                                                prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                            }
                                        >
                                            {() => (
                                                <Form.Item
                                                    {...field}
                                                    label={'Background'}
                                                    name={[field.name, 'background']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Vui lòng chọn màu sắc!',
                                                        },
                                                    ]}
                                                >
                                                    <Input style={{ width: '100px', cursor: 'pointer' }} type='color' placeholder='Nhập tên quà tặng' />
                                                </Form.Item>
                                            )}
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            label="Màu chữ"
                                            name={[field.name, 'color']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng chọn màu sắc!',
                                                },
                                            ]}
                                        >
                                            <Input style={{ width: '50px', cursor: 'pointer' }} type='color' placeholder={0} />
                                        </Form.Item>
                                        <button className='remove-btn' onClick={() => remove(field.name)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </Form.List>
            </div>
            <div>
                <button type='submit' className='btn-save'>Lưu</button>
            </div>
        </Form>
    );
};

export default ColorForm;