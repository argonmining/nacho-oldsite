/* eslint-disable capitalized-comments */
// noinspection JSIgnoredPromiseFromCall

import BigButton from '@/components/ui/Buttons/BigButton';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { LucideEye } from 'lucide-react';
import { ReactNode, useEffect } from 'react';

export const PartButton = ({
	children,
	active,
	onClick,
	icon,
	className
}: {
	children: ReactNode;
	active?: boolean;
	onClick: () => void;
	icon: ReactNode;
	className?: string;
}) => {
	const iconControls = useAnimation();
	const eyeControls = useAnimation();
	const buttonControls = useAnimation();

	const handleMouseEnter = () => {
		buttonControls.start({ y: -1, transition: { duration: 0.1 } });
	};

	const handleMouseLeave = () => {
		buttonControls.start({ y: 0, transition: { duration: 0.1 } });
	};

	const handleMouseDown = () => {
		buttonControls.start({ y: 3, transition: { duration: 0.1 } });
	};

	const handleMouseUp = () => {
		buttonControls.start({ y: 0, transition: { duration: 0.1 } });
	};

	useEffect(() => {
		if (active) {
			iconControls.start({ scale: 0, transition: { duration: 0.2 } });
			eyeControls.start({ scale: 1, transition: { duration: 0.2 } });
		} else {
			eyeControls.start({ scale: 0, transition: { duration: 0.2 } });
			iconControls.start({ scale: 1, transition: { duration: 0.2 } });
		}
	}, [active, iconControls, eyeControls]);

	return (
		<BigButton
			className={clsx('part-button', className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onClick={onClick}
			initial={{ y: 0 }}
			animate={buttonControls}
		>
			<motion.span animate={iconControls} className={active ? 'hidden' : ''}>
				{icon}
			</motion.span>
			<motion.span animate={eyeControls} className={!active ? 'hidden' : ''}>
				<LucideEye />
			</motion.span>
			{children}
		</BigButton>
	);
};
