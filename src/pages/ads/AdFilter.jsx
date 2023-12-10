import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import { getAds } from './service';

const AdFilter = ({ setFilteredAds }) => {
	const [adSearch, setadSearch] = useState({
		name: ' ',
		sale: undefined,
		priceFrom: 0,
		priceTo: 0,
		tags: [],
	});

	const [ads, setAds] = useState([]);

	const url = '/api/v1/adverts';

	useEffect(() => {
		getAds(url).then((ads) => setAds(ads));
	}, []);

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setadSearch({ ...adSearch, [name]: value });
	};

	const doSearch = () => {
		const filteredAds = ads.filter((ad) => {
			return (
				ad.name.toLowerCase().includes(adSearch.name.toLowerCase()) &&
				parseFloat(ad.price) >= parseFloat(adSearch.priceFrom || 0) &&
				parseFloat(ad.price) <= parseFloat(adSearch.priceTo || Infinity)
			);
		});
		setFilteredAds(filteredAds);
	};

	useEffect(() => {
		doSearch();
	}, [adSearch, setFilteredAds]);

	return (
		<form>
			<h2>Filters</h2>
			<div>
				<label htmlFor='name'>Item name:</label>
				<input type='text' name='name' onChange={handleFilterChange} />
			</div>
			<div>
				<label htmlFor='sale'>Sale/Buy</label>
				<select name='sale' defaultValue='---'>
					<option disabled>---</option>
					<option value='true'>Sale</option>
					<option value='false'>Buy</option>
				</select>
			</div>
			<div>
				<label htmlFor='priceFrom'>From:</label>
				<input
					type='number'
					style={{ width: '50px' }}
					name='priceFrom'
					onChange={handleFilterChange}
				/>
				<label htmlFor='priceTo'>to:</label>
				<input
					type='number'
					style={{ width: '50px' }}
					name='priceTo'
					onChange={handleFilterChange}
				/>
			</div>
			<div>
				<label>Select one or more tags:</label>
				<input
					type='checkbox'
					id='lifestyle'
					name='tags'
					value='lifestyle'
					// onChange={() => handleCheckboxChange('lifestyle')}
					// checked={tags.includes('lifestyle')}
				/>
				<label htmlFor='lifestyle'>lifestyle</label>

				<input
					type='checkbox'
					id='mobile'
					name='tags'
					value='mobile'
					// onChange={() => handleCheckboxChange('mobile')}
					// checked={tags.includes('mobile')}
				/>
				<label htmlFor='mobile'>mobile</label>

				<input
					type='checkbox'
					id='motor'
					name='tags'
					value='motor'
					// onChange={() => handleCheckboxChange('motor')}
					// checked={tags.includes('motor')}
				/>
				<label htmlFor='motor'>motor</label>

				<input
					type='checkbox'
					id='work'
					name='tags'
					value='work'
					// onChange={() => handleCheckboxChange('work')}
					// checked={tags.includes('work')}
				/>
				<label htmlFor='work'>work</label>
			</div>
			<div>
				<Button type='reset'>Clear form</Button>
			</div>
		</form>
	);
};

export default AdFilter;
