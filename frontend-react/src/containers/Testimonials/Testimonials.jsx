import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { SectionWrap, MotionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';

import './Testimonials.scss';

const Testimonials = () => {
	const [barands, setBarands] = useState([]);
	const [testimonials, setTestimonials] = useState([]);
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	useEffect(() => {
		const testimonialsQuery = '*[_type == "testimonials"]';

		client
			.fetch(testimonialsQuery)
			.then(data => setTestimonials(data))
			.catch(error => console.error(error));
	}, []);

	return (
		testimonials.length > 0 && (
			<>
				<div className="testimonials-item app__flex">
					<img
						src={urlFor(testimonials[currentTestimonial].imgurl)}
						alt="Testimonial"
					/>
				</div>
			</>
		)
	);
};

export default SectionWrap(
	MotionWrap(Testimonials, 'section-testimonials'),
	'testimonials',
	'app__primaryBg'
);
