'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LetterPullupProps {
	className?: string;
	words: string;
	delay?: number;
	onAnimationComplete?: () => void;
}

export default function LetterPullup({
	className,
	words,
	delay = 0.05,
	onAnimationComplete
}: LetterPullupProps) {
	// Split into words first, then letters while preserving word grouping
	const wordArray = words.split(' ');
	let totalLetterCount = 0;

	const pullupVariant = {
		initial: { y: 100, opacity: 0 },
		animate: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: i * delay
			}
		})
	};

	return (
		<div className="mb-[0.67em] mt-12 flex flex-wrap gap-x-[1em]">
			{wordArray.map((word, wordIndex) => (
				<div key={wordIndex} className="flex">
					{word.split('').map((letter, letterIndex) => {
						totalLetterCount++;
						return (
							<motion.h1
								key={`${wordIndex}-${letterIndex}`}
								variants={pullupVariant}
								initial="initial"
								animate="animate"
								custom={totalLetterCount - 1}
								onAnimationComplete={() => {
									if (
										wordIndex === wordArray.length - 1 &&
										letterIndex === word.length - 1 &&
										onAnimationComplete
									) {
										onAnimationComplete();
									}
								}}
								className={cn(
									'text-center font-display font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]',
									className
								)}
							>
								{letter}
							</motion.h1>
						);
					})}{' '}
				</div>
			))}
		</div>
	);
}
