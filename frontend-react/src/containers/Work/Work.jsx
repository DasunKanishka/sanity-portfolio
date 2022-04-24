import { useState, useEffect } from 'react';
import { FaFilm } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

import { MotionWrap, SectionWrap } from '../../wrappers';
import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {
	const [workTypes, setWorkTypes] = useState([
		'All',
		'Actress',
		'Activist',
		'Model',
	]);
	const [work, setWork] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const breakpointColumnsObj = {
		default: 4,
		1199: 3,
		979: 2,
		479: 1,
	};

	const handleFilter = item => {
		setActiveFilter(item);
		setAnimateCard({ y: 100, opacity: 0 });

		setTimeout(() => {
			setAnimateCard({ y: 0, opacity: 1 });

			item === 'All'
				? setFilterWork(work)
				: setFilterWork(work.filter(w => w.tags.includes(item)));
		}, 500);
	};

	useEffect(() => {
		const groqQuery = '*[_type == "works"]';

		client
			.fetch(groqQuery)
			.then(data => {
				const tags = ['All'];

				data.map(item =>
					item.tags.map(tag => !tags.includes(tag) && tags.push(tag))
				);

				setWorkTypes(tags);
			})
			.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		const groqQuery = '*[_type == "works"]';

		client
			.fetch(groqQuery)
			.then(data => {
				setWork(data);
				setFilterWork(data);
			})
			.catch(error => console.log(error));
	}, [workTypes]);

	return (
		<>
			<h2 className="head-text">
				I never feel so <span>accomplished</span> <br /> as when I open{' '}
				<span>a tough jar</span>
			</h2>

			<div className="filter">
				{workTypes.map((item, index) => (
					<div
						key={index}
						className={`item app__flex p-text ${
							activeFilter === item && 'active'
						}`}
						onClick={() => handleFilter(item)}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="portfolio"
			>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="portfolio-masonry"
					columnClassName="portfolio-item app_flex"
				>
					{filterWork.map((item, index) => (
						<div key={index}>
							<div className="inner">
								<picture className="item-img app_flex">
									<img
										src={urlFor(item.imgUrl)}
										alt={item.name}
									/>
								</picture>

								<motion.div
									whileHover={{ opacity: [0, 1] }}
									transition={{
										duration: 0.25,
										ease: 'easeInOut',
										staggerChildren: 0.5,
									}}
									className="item-details app__flex"
								>
									<a href={item.projectLink} target="_blank">
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											className="app__flex"
										>
											<FaFilm />
										</motion.div>
									</a>
								</motion.div>
							</div>

							<div className="content app_flex">
								<h4 className="bold-text">{item.title}</h4>

								<p className="p-text">{item.description}</p>
							</div>
						</div>
					))}
				</Masonry>
			</motion.div>
		</>
	);
};

export default SectionWrap(
	MotionWrap(Work, 'section-work'),
	'work',
	'app__primarybg'
);
