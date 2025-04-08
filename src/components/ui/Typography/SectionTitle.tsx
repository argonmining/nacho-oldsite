import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Theme {
	colors: {
		primary: string;
	};
}

const SectionTitle = motion(styled.h2<{ theme: Theme }>`
	font-size: 4rem;
	@media (max-width: 768px) {
		font-size: 3rem;
	}
`);

const SectionSubtitle = motion(styled.p<{ theme: Theme }>`
	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`);

export { SectionSubtitle, SectionTitle };
