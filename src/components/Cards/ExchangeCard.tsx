import { MediumButton } from '@/components/ui/Buttons/MediumButton';
import { Exchange } from '@/config/exchanges';
import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';
import { LucideCandlestickChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function ExchangeCard(props: {
	exchange: Exchange;
	volume?: {
		usd: number;
		pair: string;
	};
}) {
	return (
		<motion.div
			className={
				'flex w-72 flex-col items-center gap-3 rounded-2xl border-2 border-primary bg-background p-6'
			}
			whileHover={{ translateY: 2 }}
		>
			<Image src={props.exchange.logo} alt={''} width={150} height={150} />
			<div className={'space-y-3 text-center'}>
				<h1 className={'text-card-title'}>{props.exchange.name}</h1>
				<p className={'text-lg'}>{props.exchange.description}</p>
			</div>
			<Link href={props.exchange.url} target={'_blank'} className={'mt-auto'}>
				<MediumButton>
					<LucideCandlestickChart /> Visit {props.exchange.name}
				</MediumButton>
			</Link>
		</motion.div>
	);
}
