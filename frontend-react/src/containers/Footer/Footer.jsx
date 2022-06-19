import { useState } from 'react';

import { SectionWrap, MotionWrap } from '../../wrappers';
import { client } from '../../client';
import { images } from '../../constants';

import './Footer.scss';

const Footer = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChangeInput = e => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		setLoading(true);

		const contact = {
			_type: 'contact',
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};

		client.create(contact).then(() => {
			setIsSubmitted(true);

			setLoading(false);
		});
	};

	return (
		<>
			<h2 className="head-text">Take a coffee &amp; chat with me</h2>

			<div className="cards">
				<div className="card">
					<img src={images.email} alt="Email" />

					<a href="mailto:info@emmawatson.com" className="p-text">
						info@emmawatson.com
					</a>
				</div>
				<div className="card">
					<img src={images.mobile} alt="Mobile" />

					<a href="tel:+1(818)237-XXXX" className="p-text">
						+1(818)237-XXXX
					</a>
				</div>
			</div>

			{isSubmitted ? (
				<h2 className="head-text">Thank you for getting in touch!</h2>
			) : (
				<form className="form app__flex">
					<div className="app__flex">
						<input
							name="name"
							type="text"
							className="p-text"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChangeInput}
						/>
					</div>

					<div className="app__flex">
						<input
							name="email"
							type="email"
							className="p-text"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChangeInput}
						/>
					</div>

					<div>
						<textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							className="p-text"
							onChange={handleChangeInput}
						></textarea>
					</div>

					<button className="p-text" onClick={handleSubmit}>
						{loading ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			)}
		</>
	);
};

export default SectionWrap(
	MotionWrap(Footer, 'section-footer'),
	'footer',
	'app__whitebg'
);
