import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { SectionWrap } from '../../wrappers';
import { client, urlFor } from '../../client';

import './Skills.scss';

const Skills = () => {
	const [experience, setExperience] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const experiencesQuery = '*[_type == "expriences"]';
		const skillsQuery = '*[_type == "skills"]';

		client
			.fetch(experiencesQuery)
			.then(data => setExperience(data))
			.catch(error => console.error(error));

		client
			.fetch(skillsQuery)
			.then(data => setSkills(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<>
			<h2 className="head-text">
				Skills &amp; <span>Experience</span>
			</h2>

			<div className="skills-container">
				<motion.div className="skills-list">
					{skills.map(skill => (
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
			</div>
		</>
	);
};

export default SectionWrap(Skills, 'skills', 'section-skills');
