import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
	return (
		<div className="social-media">
			<span>
				<BsTwitter />
			</span>
			<span>
				<BsInstagram />
			</span>
			<span>
				<FaFacebookF />
			</span>
		</div>
	);
};

export default SocialMedia;
