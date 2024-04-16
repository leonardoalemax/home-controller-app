"use client";

const changeHDMI = (id: number) => {
	fetch(`http://home.alemax.lab/api/webhook/${id}`);
};

export default function Hdmi() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-between p-24'>
			<button
				onClick={() => {
					changeHDMI(1);
				}}>
				HDMI 1
			</button>
			<button
				onClick={() => {
					changeHDMI(2);
				}}>
				HDMI 2
			</button>
			<button
				onClick={() => {
					changeHDMI(3);
				}}>
				HDMI 3
			</button>
			<button
				onClick={() => {
					changeHDMI(4);
				}}>
				HDMI 4
			</button>
			<button
				onClick={() => {
					changeHDMI(5);
				}}>
				HDMI 5
			</button>
		</div>
	);
}
