import React, { useContext, useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { getRandomGift } from '../../ultils/random';
import { getPrizeInfo, newPrizeList } from '../../ultils/prize';
import { data, unluckyDraw } from '../../mock/data';
import { Context } from '../../context/Context';
import { Modal } from 'antd';
import { UNLUCKY_TITLE, TITLE, UNLUCKY_MESSAGE } from '../../constant/message';
import tom from '../../asset/tom.gif';

const WheelPage = () => {
	const [isSpin, setIsSpin] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const { prizeList, setPrizeList } = useContext(Context);

	useEffect(() => {
		setPrizeList([unluckyDraw, ...data])
	}, [setPrizeList]);

	const onSpin = () => {
		setIsSpin(true);
		let prize = getRandomGift(data);
		while (prizeList[prize].quantity === 0) {
			prize = getRandomGift(data);
			console.log('spin again')
		}
		setPrizeNumber(prize);
	}

	const onStop = () => {
		setIsSpin(false);
		if (prizeNumber === 0) {

		} else {
			setPrizeList(newPrizeList(prizeList, prizeNumber))
		}
		setIsVisible(true);
	}
	return (
		<div className="App">
			<div className="wheel-container">
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
						: <h1 className='gift-name'>🎁 {getPrizeInfo(prizeList, prizeNumber).option} </h1>
					}
				</Modal>
				<Wheel
					data={prizeList}
					prizeNumber={prizeNumber}
					onStopSpinning={onStop}
					mustStartSpinning={isSpin}
					backgroundColors={['orange', 'red', 'tan', '#6ebd40', '#1890ff', '#722ed1', '#dbdf05']}
					innerBorderColor='white'
					innerBorderWidth={30}
					outerBorderColor='white'
					radiusLineColor='white'
					textColors={['#ffffff']}
					fontSize={15}
					spinDuration={0.1}
				/>
				<button onClick={onSpin}>Quay</button>
			</div>

		</div>
	);
};

export default WheelPage;