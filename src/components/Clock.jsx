import { useEffect, useState } from 'react';

function Clock() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			const now = new Date();
			setNow(now);
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <div>{now.toLocaleTimeString()}</div>;
}

export default Clock;
