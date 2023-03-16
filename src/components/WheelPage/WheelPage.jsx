import { Modal } from 'antd';
import React, { useContext, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { TITLE, UNLUCKY_MESSAGE, UNLUCKY_TITLE } from '../../constant/message';
import { Context } from '../../context/Context';
import { data } from '../../mock/data';
import { getPrizeInfo, newPrizeList } from '../../ultils/gift';
import { getRandomGift } from '../../ultils/random';

const WheelPage = () => {
	const [isSpin, setIsSpin] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const { giftList, setGiftList, duration } = useContext(Context);

	const onSpin = () => {
		setIsSpin(true);
		let prize = getRandomGift(data);
		while (giftList[prize].quantity === 0) {
			prize = getRandomGift(data);
		}
		setPrizeNumber(prize);
	}

	const onStop = () => {
		setIsSpin(false);
		if (prizeNumber !== 0) {
			setGiftList(newPrizeList(giftList, prizeNumber))
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
						: <h1 className='gift-name'>🎁 {getPrizeInfo(giftList, prizeNumber).option} </h1>
					}
				</Modal>
				<Wheel
					data={giftList}
					prizeNumber={prizeNumber}
					onStopSpinning={onStop}
					mustStartSpinning={isSpin}
					backgroundColors={[            
						"#3f297e",
						"#175fa9",
						"#169ed8",
						"#239b63",
						"#64b031",
						"#efe61f",
						"#f7a416",
						"#e6471d",
						"#dc0936",
						"#e5177b",
						"#be1180",
						"#871f7f"
					]}
					innerBorderColor='white'
					innerBorderWidth={30}
					outerBorderColor='white'
					radiusLineColor='white'
					textColors={['#ffffff']}
					fontSize={15}
					spinDuration={duration/10}
				/>
				<button onClick={onSpin}>Quay</button>
			</div>

		</div>
	);
};

export default WheelPage;