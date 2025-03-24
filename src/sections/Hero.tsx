import CrowdfundingProgress from '@/components/CrowdfundingProgress';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import LetterPullup from '@/components/ui/letter-pullup';
import { SectionSubtitle } from '@/components/ui/Typography/SectionTitle';
import crowdfunding from '@/config/crowdfunding';
import { stagger, useAnimate, useAnimationControls } from 'framer-motion';
import { LucideChartCandlestick, LucideNotepadText, LucideScroll, LucideUsers } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function HeroSection() {
	const taglineControls = useAnimationControls();
	const [linkButtonsScope, animateLinkButtons] = useAnimate();
	const progressBarRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className={'relative flex min-h-screen flex-col items-center justify-start md:flex-row'}>
			<div className={'mt-0 flex flex-col gap-4 md:mt-0'}>
				<div>
					<LetterPullup
						words={"Nacho the Kat, inspired by Shai Wyborski's pet cat."}
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
						The first fair-launched memecoin on Kaspa.
					</SectionSubtitle>
				</div>
				<div className={'mb-10 flex flex-wrap gap-6'} ref={linkButtonsScope}>
					<Link href={'/Nacho_the_kat_Whitepaper_240605.pdf'} target={'_blank'}>
						<PartButton active={false} icon={<LucideScroll />} onClick={() => {}} className={'opacity-0'}>
							Whitepaper
						</PartButton>
					</Link>
					<Link href={'https://www.kaspa.com/nft/collections/NACHO?ref=LYl1whR1'} target={'_blank'}>
						<PartButton
							active={false}
							icon={<LucideNotepadText />}
							onClick={() => {}}
							className={'opacity-0'}
						>
							Nacho Kats NFTs
						</PartButton>
					</Link>
					<Link href={'#trade-nacho'}>
						<PartButton
							active={false}
							icon={<LucideChartCandlestick />}
							onClick={() => {}}
							className={'opacity-0'}
						>
							Trade $NACHO
						</PartButton>
					</Link>
					<Link href={'#socials'}>
						<PartButton active={false} icon={<LucideUsers />} onClick={() => {}} className={'opacity-0'}>
							Socials
						</PartButton>
					</Link>
				</div>
				{crowdfunding.active && crowdfunding.campaign && (
					<div className={'mt-32 progress-section opacity-0'} ref={progressBarRef}>
						<CrowdfundingProgress campaign={crowdfunding.campaign} />
					</div>
				)}
			</div>
		</div>
	);
}
