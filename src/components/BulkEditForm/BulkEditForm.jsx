import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import React, { useCallback, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { bulkEditGiftList, filterList } from '../../ultils/gift';

const BulkEditForm = ({ giftList, onCloseModal, isVisible }) => {
	const [form] = Form.useForm();
	const { setGiftList } = useContext(Context);

	const onFinish = (values) => {
		const gifts = filterList(values.gifts);
		bulkEditGiftList(gifts);
		setGiftList(gifts);
		onCloseModal();
	};

	const onReset = useCallback(() => {
		form.setFieldValue('gifts', giftList);
	}, [form, giftList]
	)

	useEffect(() => {
		onReset();
	}, [onReset])

	const hasPermission = (index) => {
		if (index >= giftList.length) {
			return false
		} return !giftList[index].canDelete
	}
	return (
		<div>
			<Modal
				className='modal-add'
				open={isVisible}
				onCancel={onCloseModal}
				footer={null}
				title={'Thêm quà mới'}
				forceRender
				afterClose={onReset}
				zIndex={9999}
				maskClosable={false}
			>
				<Form
					className='bulk-edit-form'
					form={form}
					onFinish={onFinish}
					autoComplete="off"
				>
					<div className="form-body">
						<Form.List name="gifts">
							{(fields, { add, remove }) => (
								<>
									{fields.map((field, i) => (
										<div key={'key' + field.name} className='d-flex' style={{ gap: '10px' }}>
											<Form.Item
												noStyle
												shouldUpdate={(prevValues, curValues) =>
													prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
												}
											>
												{() => (
													<Form.Item
														{...field}
														label={hasPermission(field.name) ? 'Mặc định' : 'Quà tặng'}
														name={[field.name, 'option']}
														rules={[
															{
																required: true,
																message: 'Vui lòng nhập tên quà tặng!',
															},
														]}
													>
														<Input disabled={hasPermission(field.name)} placeholder='Nhật tên quà tặng' />
													</Form.Item>
												)}
											</Form.Item>
											<Form.Item
												{...field}
												label="Số lượng"
												name={[field.name, 'quantity']}
												rules={[
													{
														required: true,
														message: 'Vui lòng nhập SL!',
													},
												]}
											>
												<InputNumber type={'number'} disabled={hasPermission(field.name)} controls={false} placeholder={0} />
											</Form.Item>
											<button disabled={hasPermission(field.name)} className='remove-btn' onClick={() => remove(field.name)}>
													<i className="fas fa-trash-alt"></i>
												</button>
										</div>
									))}
									<Form.Item>
										<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
											Thêm quà
										</Button>
									</Form.Item>
								</>
							)}
						</Form.List>
					</div>

					<Form.Item style={{ paddingTop: 20, marginTop: 20, marginBottom: 0, borderTop: '1px solid #eee' }}>
						<Button style={{ float: 'right' }} size='large' type="primary" htmlType="submit">
							Xác nhận
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default BulkEditForm;