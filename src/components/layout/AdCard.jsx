import noImage from '../../assets/images/no-image.jpg';

function AdCard({ ad, imgWidth }) {
	return (
		<div className='ad-card'>
			<img src={ad.photo || noImage} width={imgWidth} />
			<p>Item: {ad.name}</p>
			<p>Type: {ad.sale ? 'sale' : 'buy'}</p>
			<p>Price: {ad.price}</p>
			<p>Tags: {ad.tags.map((tag) => `#${tag} `)}</p>
		</div>
	);
}

export default AdCard;
