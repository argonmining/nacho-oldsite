import TokenomicsInformation from '@/components/TokenomicsInformation';
import { motion, stagger, useAnimate } from 'framer-motion';
import { LucideCheck, LucideCoins, LucideHandCoins } from 'lucide-react';

export default function TokenomicsPart() {
	const [tokenomicsInfoScope, tokenomicsInfoParagraphs] = useAnimate();
	return (
		<section className={'flex flex-col gap-6'}>
			<motion.h2
				className={'text-5xl font-bold'}
				whileInView={{
					opacity: 1
				}}
				viewport={{ once: true }}
				initial={{
					opacity: 0
				}}
				onAnimationComplete={() => {
					tokenomicsInfoParagraphs('.tokenomics-information', { opacity: 1 }, { delay: stagger(0.3) });
				}}
			>
				$NACHO Tokenomics
			</motion.h2>
			<div className={'flex flex-col space-y-6'} ref={tokenomicsInfoScope}>
				<TokenomicsInformation
					className={'opacity-0'}
					label={'Max Supply'}
					value={{
						amount: 287,
						after: 'B'
					}}
					icon={<LucideCoins />}
				/>
				{/*}
				<TokenomicsInformation
					className={'opacity-0'}
					label={'Mint cost'}
					value={'1 $KAS = 28,700 $NACHO'}
					icon={<LucideHandCoins />}
				/>
				*/}
				<TokenomicsInformation label={'Fair Launch'} icon={<LucideCheck />} className={'opacity-0'} />
				<TokenomicsInformation label={'100% Circulating'} icon={<LucideCheck />} className={'opacity-0'} />
				<TokenomicsInformation
					label={'No Pre-allocation'}
					icon={<LucideCheck />}
					className={'opacity-0'}
				/>
				<TokenomicsInformation label={'No Taxes'} icon={<LucideCheck />} className={'opacity-0'} />
			</div>
		</section>
	);
}
