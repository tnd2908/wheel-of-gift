import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { Drawer, Modal } from 'antd';
import AddItemForm from '../AddItemForm/AddItemForm';

const Navbar = () => {
    const { prizeList } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <header className='bg-dark'>
                <div className="navbar d-flex justify-content-between align-items-center">
                    <Link style={{ cursor: 'pointer' }} to='/'><img className='logo d-block' src={process.env.PUBLIC_URL + '/logo.png'} alt="" /></Link>
                    <button className="toggle-btn d-block" type="button" onClick={() => setIsOpen(true)}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>
            <Modal
                open={isVisible}
                onCancel={() => setIsVisible(false)}
                footer={null}
                title={'Thêm quà mới'}
            >
                {/* <AddItemForm /> */}
            </Modal>
            <Drawer
                closable={false}
                placement='left'
                open={isOpen}
                onClose={() => setIsOpen(false)}
                title={
                    <div className='d-flex justify-content-between align-items-center'>
                        <img className='logo d-block' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                        <button className='close-btn'> <i className="fas fa-times"></i> </button>
                    </div>
                }
            >   
                <h5 className="menu-title text-white" id="left-menu-label">🎁 Danh sách quà tặng</h5>
                    {prizeList?.map((e) => (
                        <div key={e.option} className='gift-item d-flex justify-content-between'>
                            <p> {e.option} </p>
                            <p> {e?.quantity} </p>
                        </div>
                    ))}
                <button onClick={() => setIsVisible(true)} className="add-btn">Thêm quà tặng</button>
            </Drawer>
        </>
    );
};

export default Navbar;