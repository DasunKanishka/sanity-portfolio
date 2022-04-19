import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { SectionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';

import './About.scss';

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const GroqQuery = '*[_type == "abouts"]';

		client.fetch(GroqQuery).then(data => setAbouts(data));
	}, []);

	return (
		<>
			<h2 className="head-text">
				The less <span>You Reveal</span> <br /> the more prople{' '}
				<span>Can Wander</span>
			</h2>

			<div className="abouts">
				{abouts.map((about, index) => (
					<motion.div
						key={about.title + index}
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.4, type: 'tween' }}
						className="about-item"
					>
						{about.imgUrl !== '' && (
							<picture>
								<img
									src={urlFor(about.imgUrl)}
									alt={about.title}
								/>
							</picture>
						)}

						<h3 className="bold-text">{about.title}</h3>

						<p className="p-text">{about.description}</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrap(About, 'about', 'section-about');
