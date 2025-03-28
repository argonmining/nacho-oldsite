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
	'/img/nfts/preview-20.webp'
];

// Calculate dimensions maintaining aspect ratio
const PREVIEW_WIDTH = 234; // Increased by 40% from 167 (167 * 1.4)
const PREVIEW_HEIGHT = 280; // Increased by 40% from 200 (200 * 1.4)

export default function NFTPreview() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const controls = useAnimation();

	useEffect(() => {
		const rotateNFTs = async () => {
			await controls.start({
				opacity: 0,
				transition: { duration: 0.2 }
			});

			setCurrentIndex((prev) => (prev + 1) % nftImages.length);

			await controls.start({
				opacity: 1,
				transition: { duration: 0.2 }
			});
		};

		const interval = setInterval(rotateNFTs, 3000);
		return () => clearInterval(interval);
	}, [controls]);

	return (
		<Link
			href="https://www.kaspa.com/nft/collections/NACHO?ref=LYl1whR1"
			target="_blank"
			className="hidden md:block absolute right-4 top-8 z-10 overflow-hidden rounded-2xl border-2 border-primary/20 bg-black/20 p-2 backdrop-blur-sm transition-transform hover:scale-105"
		>
			<motion.div animate={controls} initial={{ opacity: 1 }}>
				<Image
					src={nftImages[currentIndex]}
					alt="Nacho Kats NFT Preview"
					width={PREVIEW_WIDTH}
					height={PREVIEW_HEIGHT}
					className="rounded-lg"
					priority
				/>
			</motion.div>
		</Link>
	);
} 