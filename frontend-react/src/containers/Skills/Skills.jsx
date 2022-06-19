import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { MotionWrap, SectionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';

import './Skills.scss';

const Skills = () => {
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const experiencesQuery = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';

		client
			.fetch(experiencesQuery)
			.then(data =>
				setExperiences(
					data.sort((current, next) => current.year - next.year)
				)
			)
			.catch(error => console.error(error));

		client
			.fetch(skillsQuery)
			.then(data => setSkills(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<>
			<h2 className="head-text">
				Skills &amp; <span>Experiences</span>
			</h2>

			<div className="skills-container">
				<motion.div className="skills-list">
					{skills.length > 0 &&
						skills.map(skill => (
							<motion.div
								key={skill.name}
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="skills-item"
								style={{ backgroundColor: skill.bgColor }}
							>
								<picture className="skills-image app__flex">
									<img
										src={urlFor(skill.icon)}
										alt={skill.name}
									/>
								</picture>

								<h3 className="bold-text">{skill.name}</h3>
							</motion.div>
						))}
				</motion.div>

				<motion.div className="experiences">
					{experiences.map(experience => (
						<motion.div
							key={experience.year}
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="experiences-item"
						>
							<div className="year">{experience.year}</div>

							<motion.div className="work-wrapper">
								{experience.works.map((work, index) => (
									<motion.div
										key={`work-${index}`}
										whileInView={{ opacity: [0, 1] }}
										transition={{ duration: 0.5 }}
										data-tip={work.desc}
										data-for={`work-${index}`}
										className="experiences-work"
									>
										<h4 className="bold-text">
											{work.name}
										</h4>

										<p className="p-text">{work.company}</p>

										<ReactTooltip
											id={`work-${index}`}
											effect="solid"
											className="tooltip"
										/>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrap(
	MotionWrap(Skills, 'section-skills'),
	'skills',
	'app__whitebg'
);
