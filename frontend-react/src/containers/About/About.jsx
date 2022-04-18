import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const About = () => {
	const abouts = [
		{
			title: 'Actress',
			description: "I'm an actress since 1999",
			imgUrl: images.about01,
		},
		{
			title: 'Activist',
			description:
				'I was appointed UN Women Goodwill Ambassador in July 2014',
			imgUrl: images.about02,
		},
		{
			title: 'Magazine Editor',
			description: 'I manage to find time to guest edit magazines',
			imgUrl: images.about03,
		},
		{
			title: 'Certified Yoga Teacher',
			description: "I'm a fully trained yogi",
			imgUrl: images.about04,
		},
	];

	return (
		<section id="about" className="section-about">
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
								<img src={about.imgUrl} alt={about.title} />
							</picture>
						)}

						<h3 className="bold-text">{about.title}</h3>

						<p className="p-text">{about.description}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default About;
