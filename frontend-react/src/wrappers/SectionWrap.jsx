import { NavigationDots, SocialMedia } from '../components';

const SectionWrap = (Component, idName, classNames, tag) =>
	function HoC() {
		return (
			<section id={idName} className={`app-section ${classNames}`}>
				<SocialMedia />

				<div className="app-section-container">
					<Component />

					<div className="copyright">
						<p className="p-text">
							&copy; {new Date().getFullYear()} Emma Watson
						</p>
						<p className="p-text">All rights reserved.</p>
					</div>
				</div>

				<NavigationDots active={idName} />
			</section>
		);
	};

export default SectionWrap;
