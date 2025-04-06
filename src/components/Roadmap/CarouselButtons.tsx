import { motion } from 'framer-motion';
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';
import styled from 'styled-components';

interface Theme {
	colors: {
		primary: string;
	};
}

const CarouselButton = motion(styled.button.attrs({
	className: 'lively-button'
})<{ theme: Theme }>`
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.primary};
	align-items: center;
	padding: 1rem;
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 10rem;
`);

export default function CarouselButtons(props: {
	onLeftClick: () => void;
	onRightClick: () => void;
}) {
	return (
		<div className={'flex gap-6'}>
			<div className={'flex gap-3'}>
				<CarouselButton
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					whileHover={{ y: -1 }}
					whileTap={{ y: 3 }}
					onClick={props.onLeftClick}
				>
					<LucideArrowLeft />
				</CarouselButton>
				<CarouselButton
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					whileHover={{ y: -1 }}
					whileTap={{ y: 3 }}
					onClick={props.onRightClick}
				>
					<LucideArrowRight />
				</CarouselButton>
			</div>
		</div>
	);
}
