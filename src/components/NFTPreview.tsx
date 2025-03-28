import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const nftImages = [
	'/img/nfts/preview-1.webp',
	'/img/nfts/preview-2.webp',
	'/img/nfts/preview-3.webp',
	'/img/nfts/preview-4.webp',
	'/img/nfts/preview-5.webp',
	'/img/nfts/preview-6.webp',
	'/img/nfts/preview-7.webp',
	'/img/nfts/preview-8.webp',
	'/img/nfts/preview-9.webp',
	'/img/nfts/preview-10.webp',
    '/img/nfts/preview-11.webp',
	'/img/nfts/preview-12.webp',
	'/img/nfts/preview-13.webp',
	'/img/nfts/preview-14.webp',
	'/img/nfts/preview-15.webp',
	'/img/nfts/preview-16.webp',
	'/img/nfts/preview-17.webp',
	'/img/nfts/preview-18.webp',
	'/img/nfts/preview-19.webp',
	'/img/nfts/preview-20.webp',
	'/img/nfts/preview-21.webp',
	'/img/nfts/preview-22.webp',
	'/img/nfts/preview-23.webp',
	'/img/nfts/preview-24.webp',
	'/img/nfts/preview-25.webp'
];

const PREVIEW_WIDTH = 234;
const PREVIEW_HEIGHT = 280;

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function NFTPreview() {
	const [shuffledImages, setShuffledImages] = useState<string[]>(nftImages);
	const [currentIndex, setCurrentIndex] = useState(0);
	const controls = useAnimation();
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShuffledImages(shuffleArray(nftImages));
		setCurrentIndex(Math.floor(Math.random() * nftImages.length));
	}, []);

	useEffect(() => {
		const rotateNFTs = async () => {
			await controls.start({
				opacity: 0,
				transition: { duration: 0.2 }
			});

			setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);

			await controls.start({
				opacity: 1,
				transition: { duration: 0.2 }
			});
		};

		const interval = setInterval(rotateNFTs, 3000);
		return () => clearInterval(interval);
	}, [controls, shuffledImages.length]);

	useEffect(() => {
		setShow(true);
	}, []);

	if (!shuffledImages.length) return null;

	return (
		<motion.div
			initial={{ x: '100%', opacity: 0 }}
			animate={{ x: show ? 0 : '100%', opacity: show ? 1 : 0 }}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 20,
				delay: 0.5,
				duration: 0.5
			}}
			className="hidden md:block absolute right-2 top-8 z-10"
		>
			<Link
				href="https://www.kaspa.com/nft/collections/NACHO?ref=LYl1whR1"
				target="_blank"
				className="block overflow-hidden rounded-2xl border-2 border-primary/20 bg-black/20 p-2 backdrop-blur-sm transition-transform hover:scale-105"
			>
				<motion.div animate={controls} initial={{ opacity: 1 }}>
					<Image
						src={shuffledImages[currentIndex]}
						alt="Nacho Kats NFT Preview"
						width={PREVIEW_WIDTH}
						height={PREVIEW_HEIGHT}
						className="rounded-lg"
						priority
					/>
				</motion.div>
			</Link>
		</motion.div>
	);
}