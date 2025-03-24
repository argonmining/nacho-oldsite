import { CardLink } from '@/types/cardLink';
import { LucideGlobe } from 'lucide-react';

export interface Product {
	id: string;
	name: string;
	description: string;
	background: string; // Background image URL
	images: string[]; // Array of image URLs
	badges?: string[];
	links?: CardLink[];
}

const products: Product[] = [
	{
		id: 'katscan',
		name: 'KatScan',
		description:
			'KatScan, integrates with Kasplex protocols to provide comprehensive analytics for the KAS and KRC20 ecosystems, offering valuable insights for wallet holders and the broader community.',
		background: '/img/backgrounds/soft-lines.svg',
		badges: ['D-app', 'KRC20'],
		images: [
			'/img/products/kat-scan/kat-scan-mobile-dark.webp',
			'/img/products/kat-scan/kat-scan-mobile-light.webp'
		],
		links: [{ url: 'https://katscan.xyz', icon: <LucideGlobe /> }]
	},
	{
		id: 'katbot',
		name: 'Kat Bot',
		description:
			'Kat Bot is a KRC20 Discord bot developed in collaboration with KSPR, designed to provide seamless access to token information and wallet functions. Users can mint, deploy, and interact with KRC20 tokens directly from Discord, making it easier to manage tokens within the Kaspa ecosystem.',
		background: '/img/backgrounds/confetti.svg',
		badges: ['Discord Bot', 'KRC20'],
		images: [
			'/img/products/kat-bot/kat-bot-mobile-dark.webp',
			'/img/products/kat-bot/kat-bot-mobile-light.webp'
		],
		links: [{ url: 'https://katscan.xyz', icon: <LucideGlobe /> }]
	},
	{
		id: 'katgov',
		name: 'Kat Gov',
		description:
			'\n' +
			'Kat Gov is an open-source governance platform designed to empower Kaspa ecosystem projects with seamless, transparent decision-making tools. With features like proposals, voting, and treasury management, Kat Gov simplifies community governance for projects of all sizes. Whether self-hosted or through our turn-key SaaS solution, it enables efficient collaboration and accountability.',
		background: '/img/backgrounds/confetti.svg',
		badges: ['Governance', 'DAO'],
		images: [
			'/img/products/kat-gov/kat-gov-mobile-dark-1.webp',
			'/img/products/kat-gov/kat-gov-mobile-dark-2.webp'
		],
		links: [{ url: 'https://katgov.xyz', icon: <LucideGlobe /> }]
	},
	{
		id: 'katpool',
		name: 'Kat Pool',
		description:
			'\n' +
			'Kat Pool is the first open-source Kaspa mining pool designed to empower Kaspa miners with reliable, low-fee pool mining. Fees are PPLNS and the net pool fee is only 0.5%. Earn $NACHO while mining Kaspa with first-ever pool fee rebates. Nacho Kats NFT holders mine for free! Support Kaspa and Nacho by pointing your miners to Kat Pool today.',
		background: '/img/backgrounds/confetti.svg',
		badges: ['Mining', 'Pool'],
		images: [
			'/img/products/kat-gov/kat-gov-mobile-dark-1.webp',
			'/img/products/kat-gov/kat-gov-mobile-dark-2.webp'
		],
		links: [{ url: 'https://app.katpool.xyz', icon: <LucideGlobe /> }]
	}
];

export default products;
