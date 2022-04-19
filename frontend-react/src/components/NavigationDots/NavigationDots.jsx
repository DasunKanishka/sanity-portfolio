const NavigationDots = ({ active }) => {
	const menuItems = [
		'home',
		'about',
		'work',
		'skills',
		'testimonials',
		'contact',
	];

	return (
		<div className="navigation-dots">
			{menuItems.map((item, index) => {
				return (
					<a
						key={item + index}
						href={`#${item}`}
						className={`dot ${active === item && 'active'}`}
					/>
				);
			})}
		</div>
	);
};

export default NavigationDots;
