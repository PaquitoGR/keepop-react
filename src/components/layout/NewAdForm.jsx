// import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { useState } from 'react';
import { uploadAd } from '../../pages/ads/service';
import { useLocation, useNavigate } from 'react-router-dom';

const AdForm = () => {
	const [adData, setAdData] = useState({
		name: '',
		sale: undefined,
		price: '',
		tags: [],
		photo: null,
	});

	const [isFetching, setIsFetching] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const handleChange = (event) => {
		setAdData((currentAdData) => ({
			...currentAdData,
			[event.target.name]: event.target.value,
		}));
	};

	const [tags, setTags] = useState([]);

	const handleCheckboxChange = (value) => {
		if (tags.includes(value)) {
			setTags(tags.filter((option) => option !== value));
		} else {
			setTags([...tags, value]);
		}
	};

	const [photoFile, setPhotoFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setPhotoFile(file);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			setIsFetching(true);

			adData.tags = tags;
			adData.photo = photoFile;

			await uploadAd(adData);

			setIsFetching(false);
			const to = location?.state?.from?.pathname || '/';
			navigate(to);
		} catch (error) {
			setIsFetching(false);
			console.log(error);
		}
	};

	const disabled = !(
		adData.name &&
		adData.price > 0 &&
		adData.sale !== undefined &&
		tags.length
	);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Item name:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={adData.name}
					onChange={handleChange}
				/>
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
						value={adData.price}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='sale'>Select one:</label>
					<select
						id='sale'
						name='sale'
						defaultValue='---'
						onChange={handleChange}
					>
						<option disabled>---</option>
						<option value='true'>Sale</option>
						<option value='false'>Buy</option>
					</select>
				</div>
				<div>
					<label>Select one or more tags:</label>
					<input
						type='checkbox'
						id='lifestyle'
						name='tags'
						value='lifestyle'
						onChange={() => handleCheckboxChange('lifestyle')}
						checked={tags.includes('lifestyle')}
					/>
					<label htmlFor='lifestyle'>lifestyle</label>

					<input
						type='checkbox'
						id='mobile'
						name='tags'
						value='mobile'
						onChange={() => handleCheckboxChange('mobile')}
						checked={tags.includes('mobile')}
					/>
					<label htmlFor='mobile'>mobile</label>

					<input
						type='checkbox'
						id='motor'
						name='tags'
						value='motor'
						onChange={() => handleCheckboxChange('motor')}
						checked={tags.includes('motor')}
					/>
					<label htmlFor='motor'>motor</label>

					<input
						type='checkbox'
						id='work'
						name='tags'
						value='work'
						onChange={() => handleCheckboxChange('work')}
						checked={tags.includes('work')}
					/>
					<label htmlFor='work'>work</label>
				</div>
			</div>
			<div>
				<label htmlFor='photo'>Image</label>
				<input
					type='file'
					name='photo'
					id='photo'
					onChange={handleFileChange}
				/>
			</div>
			<div>
				<Button type='reset'>Clear form</Button>
				<Button type='submit' disabled={disabled}>
					{isFetching ? 'Uploading...' : 'Upload your Ad'}
				</Button>
			</div>
		</form>
	);
};

export default AdForm;
