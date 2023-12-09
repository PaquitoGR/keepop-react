function AdCard({ ad, imgWidth }) {
	return (
		<div>
			<img src={ad.photo} width={imgWidth} />
			<p>Item: {ad.name}</p>
			<p>Type: {ad.sale ? 'sale' : 'buy'}</p>
			<p>Price: {ad.price}</p>
			<p>Tags: {ad.tags}</p>
		</div>
	);
}

export default AdCard;
