const ads = [
	{
		name: 'old car',
		sale: true,
		price: 10000,
		tags: ['motor'],
		photo: '',
	},
	{
		name: 'iphone',
		sale: false,
		price: 500,
		tags: ['mobile'],
		photo: '',
	},
];

// tags: lifestyle, mobile, motor, work

function AdsPage() {
	return (
		<div>
			<ul>
				<li>{ads[0].name}</li>
				<li>{ads[1].name}</li>
			</ul>
		</div>
	);
}

export default AdsPage;
