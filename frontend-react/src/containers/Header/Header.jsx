import { motion } from 'framer-motion';

import { SectionWrap } from '../../wrappers';
import { Navbar } from '../../components';

import './Header.scss';

import { images } from '../../constants';

const Header = () => {
	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: { duration: 1, ease: 'easeInOut' },
		},
	};

	return (
		<header>
			<Navbar />

			<div className="app__header-container">
				<motion.div
					whileInView={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 0.4 }}
					className="app__header-info"
				>
					<div className="app__header-badge">
						<div className="badge-cmp app__flex">
							<span>👋🏻</span>

							<div>
								<p className="p-text">Hey, I am</p>

								<h1 className="head-text">Emma</h1>
							</div>
						</div>

						<div className="tag-cmp app__flex">
							<p className="p-text">Actress</p>
							<p className="p-text">Activist</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.4, delayChildren: 0.5 }}
					className="app__header-image"
				>
					<img src={images.profile} alt="profile-bg" />

					<motion.img
						src={images.circle}
						alt="profile_circle"
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: 'easeInOut' }}
						className="overlay_circle"
					/>
				</motion.div>

				<motion.div
					variant={scaleVariants}
					whileInView={scaleVariants.whileInView}
					className="app__header-circles"
				>
					{[images.pMin01, images.pMin02, images.pMin03].map(
						(circle, index) => (
							<div
								className="circle-cmp app__flex"
								key={`circle-${index}`}
							>
								<img src={circle} alt="circle" />
							</div>
						)
					)}
				</motion.div>
			</div>
		</header>
	);
};

export default SectionWrap(Header, 'home', 'app__header app__flex');
