import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { SectionWrap, MotionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';

import './Testimonials.scss';

const Testimonials = () => {
	const [brands, setBrands] = useState([]);
	const [testimonials, setTestimonials] = useState([]);
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	useEffect(() => {
		const testimonialsQuery = '*[_type == "testimonials"]';
		const brandsQuery = '*[_type == "brands"]';

		client
			.fetch(testimonialsQuery)
			.then(data => setTestimonials(data))
			.catch(error => console.error(error));

		client
			.fetch(brandsQuery)
			.then(data => setBrands(data))
			.catch(error => console.error(error));
	}, []);

	const handleClick = index => setCurrentTestimonial(index);

	return (
		<>
			{testimonials.length > 0 && (
				<>
					<div className="testimonials-item app__flex">
						<img
							src={urlFor(
								testimonials[currentTestimonial].imgurl
							)}
							alt="Testimonial"
						/>

						<div className="content">
							<p className="p-text">
								{testimonials[currentTestimonial].feedback}
							</p>

							<div>
								<h4 className="bold-text">
									{testimonials[currentTestimonial].name}
								</h4>
								<h5 className="bold-text">
									{testimonials[currentTestimonial].company}
								</h5>
							</div>
						</div>
					</div>

					<div className="actions app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentTestimonial === 0
										? testimonials.length - 1
										: currentTestimonial - 1
								)
							}
						>
							<HiChevronLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentTestimonial ===
										testimonials.length - 1
										? 0
										: currentTestimonial + 1
								)
							}
						>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

			<div className="brands app__flex">
				{brands.map(brand => (
					<motion.div
						key={brand._id}
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="brand"
					>
						<img src={urlFor(brand.imgUrl)} alt={brand.name} />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrap(
	MotionWrap(Testimonials, 'section-testimonials'),
	'testimonials',
	'app__primaryBg'
);
