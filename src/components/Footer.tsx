import DisclaimerDialog from '@/components/Dialogs/DisclaimerDialog';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className={'mt-auto pt-6 text-center text-gray-200'}>
			<p>
				&copy; Nacho the Kat 2024 - Present, All rights reserved. Website made with ❤️ by{' '}
				<Link href={'https://x.com/imaldev'} target={'_blank'} className={'text-primary'}>
					iMalFect
				</Link>{' '}
				<Link href={'/Nacho_the_kat_Whitepaper_240605.pdf'} target={'_blank'} className={'text-primary'}>
					Nacho the Kat Whitepaper
				</Link>{' '}
				| <DisclaimerDialog />
			</p>
		</div>
	);
}
