import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface Theme {
	colors: {
		primary: string;
	};
}

// Define the styled button
const StyledButton = motion(styled.button.attrs({
	className: 'lively-button'
})<{ theme: Theme }>`
	font-size: 1.5rem;
	text-align: center;
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 10rem;
	gap: 1rem; // Space between the arrow and text
`);

// Define the props type, inheriting from MotionButton's props
type MediumButtonProps = React.ComponentProps<typeof StyledButton>;

// Create the animated button component
export const MediumButton: React.FC<MediumButtonProps> = (props) => (
	<StyledButton
		whileHover={{ y: -1, transition: { duration: 0.1 } }}
		whileTap={{ y: 3, transition: { duration: 0.1 } }}
		{...props}
	/>
);
