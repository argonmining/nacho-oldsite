import CrowdfundingProgress from '@/components/CrowdfundingProgress';
import NFTPreview from '@/components/NFTPreview';
import StatsTicker from '@/components/StatsTicker';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import LetterPullup from '@/components/ui/letter-pullup';
import { SectionSubtitle } from '@/components/ui/Typography/SectionTitle';
import crowdfunding from '@/config/crowdfunding';
import Announcement from '@/components/ui/Announcement';
import { stagger, useAnimate, useAnimationControls, motion } from 'framer-motion';
import { LucideChartCandlestick, LucideImage, /* LucideScroll, */ LucideUsers, LucideMusic } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function HeroSection() {
	const taglineControls = useAnimationControls();
	const [linkButtonsScope, animateLinkButtons] = useAnimate();
	const progressBarRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className={'relative flex min-h-screen flex-col items-center justify-start md:flex-row pt-32 md:pt-0'}>
			<div className={'mt-0 flex flex-col gap-4 md:mt-0 md:mr-[228px]'}>
				<div>
					<LetterPullup
						words={"Nacho the Kat - the largest and first fair-launched memecoin on Kaspa."}
						delay={0.05}
						className={'text-6xl md:text-7xl'}
						onAnimationComplete={() => {
							taglineControls.start({
								opacity: 1
							});
						}}
					/>
					<SectionSubtitle
						animate={taglineControls}
						initial={{
							opacity: 0
						}}
						onAnimationComplete={() => {
							animateLinkButtons('.part-button', { opacity: 1 }, { delay: stagger(0.3) }).then(() => {
								if (progressBarRef.current) {
									progressBarRef.current.style.opacity = '1';
								}
							});
						}}
					>
						Become part of Nacho Nation 🐾
					</SectionSubtitle>
				</div>
				<div className={'mb-20 flex flex-wrap gap-6 mt-6'} ref={linkButtonsScope}>
					{/*
					<Link href={'/Nacho_the_kat_Whitepaper_240605.pdf'} target={'_blank'}>
						<PartButton active={false} icon={<LucideScroll />} onClick={() => {}} className={'opacity-0'}>
							Whitepaper
						</PartButton>
					</Link>
					*/}
					<Link href={'#trade-nacho'}>
						<div className="relative">
							<PartButton
								active={false}
								icon={<LucideChartCandlestick />}
								onClick={() => { }}
								className={'opacity-0'}
							>
								Trade $NACHO
							</PartButton>
							<motion.span
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 3.5, type: "spring", stiffness: 300, damping: 20 }}
								className="absolute -right-2 -top-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-black"
							>
								New Listing
							</motion.span>
						</div>
					</Link>
					<Link href={'https://www.kaspa.com/nft/collections/NACHO?ref=LYl1whR1'} target={'_blank'}>
						<div className="relative">
							<PartButton
								active={false}
								icon={<LucideImage />}
								onClick={() => { }}
								className={'opacity-0'}
							>
								Nacho Kats NFTs
							</PartButton>
							<motion.span
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 3.9, type: "spring", stiffness: 300, damping: 20 }}
								className="absolute -right-2 -top-2 rounded-full bg-blue-500 px-2 py-0.5 text-xs font-bold text-black"
							>
								Trading Now
							</motion.span>
						</div>
					</Link>
					<Link href={'#socials'}>
						<PartButton active={false} icon={<LucideUsers />} onClick={() => { }} className={'opacity-0'}>
							Socials
						</PartButton>
					</Link>
					<Link href={'https://youtube.com/playlist?list=PLefvqXKwrWSlsk6n38UTXQHRUcoV5ov3Y&si=xntq6jYRNtJDGXfD'} target={'_blank'}>
						<PartButton active={false} icon={<LucideMusic />} onClick={() => { }} className={'opacity-0'}>
							Music
						</PartButton>
					</Link>
				</div>
				{crowdfunding.active && crowdfunding.campaign && (
					<div className={'mt-32 progress-section opacity-0'} ref={progressBarRef}>
						<CrowdfundingProgress campaign={crowdfunding.campaign} />
					</div>
				)}
			</div>
			<NFTPreview />
			<StatsTicker />
			<Announcement
				text="🎉 Nacho the Kat announces Moonbound.gg, the first fair launch platform on Kaspa EVM!"
				href="https://moonbound.gg"
				delay={0.5}
			/>
		</div>
	);
}
