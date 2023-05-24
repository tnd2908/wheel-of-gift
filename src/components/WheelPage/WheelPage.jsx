import { Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { TITLE, UNLUCKY_MESSAGE, UNLUCKY_TITLE } from '../../constant/message';
import { Context } from '../../context/Context';
import { getPrizeInfo, newPrizeList } from '../../ultils/gift';
import { getRandomGift } from '../../ultils/random';
const WheelPage = () => {
	const [isSpin, setIsSpin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isVisible, setIsVisible] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [count, setCount] = useState(0);
	const { giftList, setGiftList, duration, background } = useContext(Context);
	useEffect(() => {
		const image = new Image();
		image.src = background;
		image.onload = (r) => {
			setIsLoading(false);
		}
	}, [background])
	const onSpin = () => {
		setIsSpin(true);
		if (giftList.filter((_, i) => i !== 0).every(e => e.quantity === 0)) {
			setPrizeNumber(0);
		} else {
			let prize = getRandomGift(giftList);
			// if (giftList[prize].count >= 2) {
			// 	while (giftList[prize].count >= 2) {
			// 		prize = getRandomGift(giftList);
			// 	} 
			// 	console.log('reset');
			// 	setIsReset(true);
			// }	
			while (giftList[prize].quantity === 0 || (prize === prizeNumber && count >= 2)) {
				prize = getRandomGift(giftList);
				console.log('retry');
			};
			if (prize === prizeNumber) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
			setPrizeNumber(prize);
		}
	}

	const onStop = () => {
		setIsSpin(false);
		setGiftList(newPrizeList(giftList, prizeNumber));
		setIsVisible(true);
	}

	return (
		<div className="wheel-container"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${background})`,
			}}
		>
			<Modal
				open={isVisible}
				onCancel={() => setIsVisible(false)}
				title={<h5> {prizeNumber === 0 ? UNLUCKY_TITLE : TITLE} </h5>}
				footer={null}
				centered
			>
				{prizeNumber === 0
					? <div>
						<img className='meme' src={'https://ih1.redbubble.net/image.477575733.7090/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'} alt="" />
						<h3 className='unlucky-msg'> {UNLUCKY_MESSAGE} </h3>
					</div>
					: <h1 className='gift-name'>🎁 {getPrizeInfo(giftList, prizeNumber).option} </h1>
				}
			</Modal>
			<Wheel
				data={giftList}
				prizeNumber={prizeNumber}
				onStopSpinning={onStop}
				mustStartSpinning={isSpin}
				backgroundColors={giftList.map(e => e.background)}
				innerBorderColor='black'
				innerBorderWidth={30}
				outerBorderColor='black'
				radiusLineColor='black'
				textColors={giftList.map(e => e.color)}
				fontSize={15}
				spinDuration={duration / 10}
			/>
			<button disabled={isSpin} onClick={onSpin}>Spin</button>
			{isLoading && (<div className="loading">
				<LoadingOutlined className='load-icon' />
			</div>)}
		</div>
	);
};

export default WheelPage;