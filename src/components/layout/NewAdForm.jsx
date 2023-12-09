import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { useState } from 'react';

const AdForm = () => {
	const [adData, setAdData] = useState({
		name: '',
		sale: true,
		price: undefined,
		tags: [],
		photo: '',
	});

	const [isFetching, setIsFetching] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<form>
			<div>
				<label htmlFor='name'>Item name:</label>
				<input type='text' name='name' id='name' required />
			</div>
			<div>
				<div>
					<label htmlFor='price'>Price:</label>
					<input
						type='number'
						name='price'
						step='0.01'
						size='6'
						id='price'
						min='0'
						required
					/>
				</div>
				<div>
					<div>
						<label htmlFor='sale'>Sale</label>
						<input type='radio' name='ad-type' id='sale' value='Sale' checked />
					</div>
					<div>
						<label htmlFor='buy'>Buy</label>
						<input type='radio' name='ad-type' id='buy' value='Buy' />
					</div>
				</div>
			</div>
			<div>
				<label htmlFor='image'>Image</label>
				<input type='file' id='image' />
			</div>
			<div>
				<Button type='reset'>Clear form</Button>
				<Button type='submit'>Upload your Ad</Button>
			</div>
		</form>
	);
};

export default AdForm;
