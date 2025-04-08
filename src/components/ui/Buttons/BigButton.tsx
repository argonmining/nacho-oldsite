import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Theme {
	colors: {
		primary: string;
	};
}

const BigButton = motion(styled.button.attrs({
	className: 'lively-button'
})<{ theme: Theme }>`
	font-size: 2rem;
	text-align: center;
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 10rem;
`);

export default function BigButtonComponent(props: {
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onMouseDown?: () => void;
	onMouseUp?: () => void;
	initial?: any;
	animate?: any;
}) {
	return (
		<BigButton
			initial={props.initial || { opacity: 0, y: 20 }}
			animate={props.animate || { opacity: 1, y: 0 }}
			whileHover={props.onMouseEnter ? undefined : { y: -1 }}
			whileTap={props.onMouseDown ? undefined : { y: 3 }}
			onClick={props.onClick}
			disabled={props.disabled}
			className={props.className}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			onMouseDown={props.onMouseDown}
			onMouseUp={props.onMouseUp}
		>
			{props.children}
		</BigButton>
	);
}
