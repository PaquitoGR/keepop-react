import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import { getAds } from './service';
import './AdFilter.css';

const AdFilter = ({ setFilteredAds }) => {
	const [adSearch, setadSearch] = useState({
		name: '',
		sale: undefined,
		priceFrom: 0,
		priceTo: 0,
		// tags: {
		// 	lifestyle: false,
		// 	mobile: false,
		// 	motor: false,
		// 	work: false,
		// },
	});

	const [ads, setAds] = useState([]);
	const [keyForcedRender, setKeyForcedRender] = useState(0);

	const url = '/api/v1/adverts';

	useEffect(() => {
		getAds(url).then((fetchedAds) => {
			setAds(fetchedAds);
			setFilteredAds(fetchedAds);
		});
	}, [keyForcedRender]);

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setadSearch({ ...adSearch, [name]: value });
	};

	const doSearch = () => {
		const filteredAds = ads.filter((ad) => {
			return (
				ad.name.toLowerCase().includes(adSearch.name.trim().toLowerCase()) &&
				parseFloat(ad.price) >= parseFloat(adSearch.priceFrom || 0) &&
				parseFloat(ad.price) <= parseFloat(adSearch.priceTo || Infinity) &&
				(adSearch.sale === 'all' || ad.sale === (adSearch.sale === 'true'))
			);
		});
		/*
 &&
					 &&
					adSearch.tags.lifestyle &&
					ad.tags.includes('lifestyle')) ||
				(adSearch.tags.mobile && ad.tags.includes('mobile')) ||
				(adSearch.tags.motor && ad.tags.includes('motor')) ||
				(adSearch.tags.work && ad.tags.includes('work')
*/

		setFilteredAds(filteredAds);
	};

	const handleFormReset = () => {
		setKeyForcedRender((prevKey) => prevKey + 1);
	};
	useEffect(() => {
		doSearch();
	}, [adSearch, setFilteredAds]);

	return (
		<div className='filters-form-container'>
			<form onReset={handleFormReset}>
				<h2>Filters</h2>
				<div>
					<label htmlFor='name'>Item name:</label>
					<input
						type='text'
						name='name'
						id='name'
						onChange={handleFilterChange}
					/>
				</div>
				<div>
					<label htmlFor='sale'>Sale/Buy</label>
					<select name='sale' id='sale' onChange={handleFilterChange}>
						<option value='all'>All</option>
						<option value='true'>Sale</option>
						<option value='false'>Buy</option>
					</select>
				</div>
				<div>
					<label htmlFor='priceFrom'>From:</label>
					<input
						type='number'
						style={{ maxWidth: '45px' }}
						min='0'
						name='priceFrom'
						id='priceFrom'
						onChange={handleFilterChange}
					/>
					<label htmlFor='priceTo'>to:</label>
					<input
						type='number'
						style={{ maxWidth: '45px' }}
						min='0'
						name='priceTo'
						id='priceTo'
						onChange={handleFilterChange}
					/>
				</div>
				{/* <div>
					<label>Select one or more tags:</label>
					<input
						type='checkbox'
						id='lifestyle'
						name='lifestyle'
						value='lifestyle'
						checked={adSearch.tags.lifestyle}
						onChange={(event) =>
							setadSearch({
								...adSearch,
								tags: { ...adSearch.tags, lifestyle: event.target.checked },
							})
						}
					/>
					<label htmlFor='lifestyle'>lifestyle</label>

					<input
						type='checkbox'
						id='mobile'
						name='mobile'
						value='mobile'
						checked={adSearch.tags.mobile}
						onChange={(event) =>
							setadSearch({
								...adSearch,
								tags: { ...adSearch.tags, mobile: event.target.checked },
							})
						}
					/>
					<label htmlFor='mobile'>mobile</label>

					<input
						type='checkbox'
						id='motor'
						name='motor'
						value='motor'
						checked={adSearch.tags.motor}
						onChange={(event) =>
							setadSearch({
								...adSearch,
								tags: { ...adSearch.tags, motor: event.target.checked },
							})
						}
					/>
					<label htmlFor='motor'>motor</label>

					<input
						type='checkbox'
						id='work'
						name='work'
						value='work'
						checked={adSearch.tags.work}
						onChange={(event) =>
							setadSearch({
								...adSearch,
								tags: { ...adSearch.tags, work: event.target.checked },
							})
						}
					/>
					<label htmlFor='work'>work</label>
				</div> */}
				<div>
					<Button type='reset'>Clear form</Button>
				</div>
			</form>
		</div>
	);
};

export default AdFilter;
