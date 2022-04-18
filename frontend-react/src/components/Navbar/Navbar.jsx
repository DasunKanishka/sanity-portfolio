import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

import { images } from '../../constants';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const menuItems = [
		'home',
		'about',
		'work',
		'skills',
		'testimonials',
		'contact',
	];

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>

			<ul className="app__navbar-links">
				{menuItems.map(item => {
					return (
						<li key={`link-${item}`} className="app__flex p-text">
							<div />

							<a href={`#${item}`}>{item}</a>
						</li>
					);
				})}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						<HiX onClick={() => setToggle(false)} />

						<ul>
							{menuItems.map(item => {
								return (
									<li key={`${item}`}>
										<a
											href={`#${item}`}
											onClick={() => setToggle(false)}
										>
											{item}
										</a>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
