import { motion } from 'framer-motion';
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';
import styled from 'styled-components';

interface Theme {
	colors: {
		primary: string;
	};
}

const Button = styled.button<{ theme: Theme }>`
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.primary};
	align-items: center;
	padding: 1rem;
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;

	&:hover {
		background: ${(props) => props.theme.colors.primary};
		color: white;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

interface CarouselButtonsProps {
	onPrev: () => void;
	onNext: () => void;
	canGoPrev: boolean;
	canGoNext: boolean;
}

export default function CarouselButtons({ onPrev, onNext, canGoPrev, canGoNext }: CarouselButtonsProps) {
	return (
		<div className="flex gap-4">
			<Button onClick={onPrev} disabled={!canGoPrev}>
				←
			</Button>
			<Button onClick={onNext} disabled={!canGoNext}>
				→
			</Button>
		</div>
	);
}
