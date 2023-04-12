import { Drawer, Modal, Popover, Tabs } from 'antd';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { giftListAfterDelete } from '../../ultils/gift';
import BackgroundForm from '../BackgroundForm/BackgroundForm';
import BulkEditForm from '../BulkEditForm/BulkEditForm';
import ColorForm from '../ColorForm/ColorForm';
import Setting from '../Setting/Setting';


const Navbar = () => {
    const { giftList, setGiftList } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showSetting, setShowSetting] = useState(false);

    const onEdit = () => {
        setIsVisible(true);
    }
    const onDelete = (name) => {
        Modal.confirm({
            title: 'Xác nhận',
            content: 'Bạn có chắc muốn xoá ', name,
            onOk: () => {
                setGiftList(giftListAfterDelete(giftList, name))
            }
        });
    }
    const items = [
        {
          key: '1',
          label: `Cấu hình`,
          children: <Setting onCLoseModal={() => setShowSetting(false)} />,
        },
        {
          key: '2',
          label: `Màu sắc`,
          children: <ColorForm onCloseModal={() => setShowSetting(false)} />,
        },
        {
            key: '3',
            label: `Hình nền`,
            children: <BackgroundForm onCloseModal={() => setShowSetting(false)} />,
          },
      ];
    return (
        <>
            <header className='bg-dark'>
                <div className="navbar d-flex justify-content-between align-items-center">
                    <Link style={{ cursor: 'pointer' }} to='/'><img className='logo d-block' src={process.env.PUBLIC_URL + '/logo.png'} alt="" /></Link>
                    <button className="toggle-btn d-block" type="button" onClick={() => setIsOpen(true)}>
                        <i className="fal fa-bars"></i>
                    </button>
                </div>
            </header>
            <BulkEditForm 
                giftList={giftList} 
                isVisible={isVisible} 
                onCloseModal={() => setIsVisible(false)} 
            />
            <Modal
                open={showSetting}
				onCancel={() => setShowSetting(false)}
				footer={null}
                // centered
                title={<h5>Cài đặt</h5>}
            >
                <Tabs defaultActiveKey="1" items={items} />

            </Modal>
            <Drawer
                closable={false}
                placement='left'
                open={isOpen}
                onClose={() => setIsOpen(false)}
                title={
                    <div className='d-flex justify-content-between align-items-center'>
                        <img className='logo d-block' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                        <button onClick={() => setIsOpen(false)} className='close-btn'> <i className="fal fa-times"></i> </button>
                    </div>
                }
            >
                <div className="d-flex justify-content-between align-item-center">
                    <h5 className="menu-title text-white" id="left-menu-label"><span style={{ marginRight: '8px' }}>🎁</span> Danh sách quà tặng</h5>
                    <button onClick={() => setShowSetting(true)} className='setting-btn'><i className="fal fa-cog"></i></button>
                </div>
                {giftList?.map((e) => (
                    <div key={e.option} className="d-flex justify-content-between">
                        <div role='button' key={e.option} className='gift-item d-flex justify-content-between'>
                            <p> {e.option} </p>
                            <p> {e?.quantity} </p>
                        </div>
                        {e.canDelete && (
                            <Popover
                                placement='bottomRight'
                                trigger='click'
                                content={(
                                    <div className='action-container'>
                                        <button onClick={() => onEdit(e)} className='action-btn'><i className="fal fa-pen"></i>Chỉnh sửa</button>
                                        <button onClick={() => onDelete(e.option)} className='action-btn'><i className="fal fa-trash-alt"></i>Xoá</button>
                                    </div>
                                )}>
                                <button className='action-list-btn'><i className="fas fa-ellipsis-h"></i></button>
                            </Popover>
                        )}
                    </div>

                ))}
                <button onClick={() => setIsVisible(true)} className="add-btn">Thêm quà tặng</button>
            </Drawer>
        </>
    );
};

export default Navbar;