import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnnouncementProps {
	text: string;
	href: string;
	delay?: number;
}

export default function Announcement({ text, href, delay = 0 }: AnnouncementProps) {
	return (
		<motion.div
			initial={{ x: '-100%', opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 20,
				delay,
				duration: 0.5
			}}
			className="absolute top-4 md:top-8 left-2 md:left-4 z-10 w-[calc(100%-1rem)] md:w-auto"
		>
			<Link
				href={href} target={'_blank'}
				className="inline-flex items-center rounded-2xl border-2 border-primary/20 bg-black/20 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-black/30 w-full md:w-auto justify-center"
			>
				{text}
			</Link>
		</motion.div>
	);
}