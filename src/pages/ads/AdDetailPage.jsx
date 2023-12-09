import { useParams, useNavigate, useLocation } from 'react-router';
import Content from '../../components/layout/Content';
import { useEffect, useState } from 'react';
import { getAd, deleteAd } from './service';
import AdCard from '../../components/layout/AdCard';
import Button from '../../components/Button';
import './AdDetailPage.css';

function ConfirmationModal({ show, onClose, onConfirm }) {
	if (!show) {
		return null;
	}

	return (
		<div className='modal-container'>
			<p>Are you sure you want to delete this Ad?</p>
			<Button onClick={onConfirm}>Yes</Button>
			<Button onClick={onClose}>No</Button>
		</div>
	);
}

function AdDetailPage() {
	const [showModal, setShowModal] = useState(false);
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const adId = params.adId;
	const [ad, setAd] = useState(null);

	useEffect(() => {
		getAd(adId)
			.then((ad) => setAd(ad))
			.catch((error) => {
				if (error.status === 404) {
					navigate('/404');
				}
			});
	}, [navigate, adId]);

	const confirmDeleteAd = async () => {
		try {
			const response = await deleteAd(adId);
			console.log(response);
			const to = location?.state?.from?.pathname || '/';
			navigate(to);
		} catch (error) {
			console.error(error);
		}
		setShowModal(false);
	};

	const handleDeleteAd = async () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<Content title='Ad detail'>
			{ad && <AdCard ad={ad} imgWidth='300px' />}
			<Button onClick={handleDeleteAd}>Delete Ad</Button>
			<ConfirmationModal
				show={showModal}
				onConfirm={confirmDeleteAd}
				onClose={closeModal}
			/>
		</Content>
	);
}

export default AdDetailPage;
