import { Progress } from '@/components/ui/progress';
import useAdjustedBalances from '@/hooks/useAdjustedBalances';
import useKRC20Balance from '@/hooks/useKRC20Balance';
import useKaspaBalance from '@/hooks/useKaspaBalance';
import useTokenPrice from '@/hooks/useTokenPrice';
import { CrowdfundingCampaign } from '@/types/crowdfundingCampaign';
import calculateTokenValue from '@/utils/calculateTokenValue';
import shiftDecimals from '@/utils/shiftDecimals';
import { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import { LucideCoins } from 'lucide-react';
import DonateDialog from '@/components/Dialogs/DonateDialog';

export default function CrowdfundingProgress(props: { campaign: CrowdfundingCampaign }) {
	const nachoPrice = useTokenPrice('nacho-the-kat');
	const kaspaPrice = useTokenPrice('kaspa');
	const nachoBalance = useKRC20Balance(props.campaign.address, 'NACHO');
	const kaspaBalance = useKaspaBalance(props.campaign.address);
	const adjustedValues = useAdjustedBalances(
		{
			nacho: nachoBalance,
			kaspa: kaspaBalance
		},
		{
			nacho: props.campaign.adjustment.nacho,
			kaspa: props.campaign.adjustment.kas
		}
	);
	const [nachoValue, setNachoValue] = useState(
		calculateTokenValue(shiftDecimals(adjustedValues.nacho, -8, 2), nachoPrice.usd)
	);
	const [kaspaValue, setKaspaValue] = useState(
		calculateTokenValue(shiftDecimals(adjustedValues.kaspa, -8, 2), kaspaPrice.usd)
	);

	const [progressScope, animateProgress] = useAnimate();
	const [showDonateDialog, setShowDonateDialog] = useState(false);

	useEffect(() => {
		setNachoValue(calculateTokenValue(shiftDecimals(adjustedValues.nacho, -8, 2), nachoPrice.usd));
		setKaspaValue(calculateTokenValue(shiftDecimals(adjustedValues.kaspa, -8, 2), kaspaPrice.usd));
	}, [adjustedValues, kaspaPrice, nachoPrice, setKaspaValue, setNachoValue]);

	useEffect(() => {
		const delay = 0.5;
		animateProgress('.progress-title', { opacity: 1 }, { delay }).then(() => {
			animateProgress('.progress-bar', { opacity: 1 }, { delay }).then(() => {
				animateProgress('.progress-text', { opacity: 1 }, { delay }).then(() => {
					animateProgress('.donate-button', { opacity: 1 }, { delay });
				});
			});
		});
	}, [animateProgress]);

	const totalRaisedUSD = parseFloat(nachoValue) + parseFloat(kaspaValue);

	return (
		<div className={'flex flex-col gap-3'} ref={progressScope}>
			<h2 className={'text-3xl font-bold progress-title opacity-0'}>{props.campaign.title}</h2>
			<div className={'progress-bar opacity-0'}>
				<Progress
					value={Math.min((totalRaisedUSD / props.campaign.goal) * 100, 100)}
					className={'max-w-[48rem]'}
				/>
			</div>
			<p className={'text-lg progress-text opacity-0'}>
				Raised: {totalRaisedUSD.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} / 
					Goal: {props.campaign.goal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
			</p>
			<div className={'mb-10 flex flex-wrap gap-6'}>
				<PartButton
					className={'donate-button opacity-0 inline-block'}
					onClick={() => setShowDonateDialog(true)}
					icon={<LucideCoins />}
				>
					Donate
				</PartButton>
			</div>
			<DonateDialog show={showDonateDialog} onClose={() => setShowDonateDialog(false)} />
		</div>
	);
}
