import { LucideAlertTriangle, LucideCheck, LucideClock, LucideConstruction } from 'lucide-react';
import { ReactNode } from 'react';

export interface RoadmapElement {
	title: string;
	status: string;
	statusIcon: ReactNode;
	statusClassName?: string;
	description: string;
	statusUrl?: string;
}

export const roadmap: RoadmapElement[] = [
	{
		title: 'Kaspa Nodes',
		status: 'Operational',
		statusIcon: <LucideCheck />,
		statusClassName: 'text-green-500',
		description:
			'Successfully deployed numerous geo-distributed Rusty Kaspa Nodes to enhance the network infrastructure of the Kaspa ecosystem. This furthers the decentralization of the Kaspa network.',
		statusUrl: '#'
	},
	{
		title: 'Kat Bot',
		status: 'Operational',
		statusIcon: <LucideCheck />,
		statusClassName: 'text-green-500',
		description:
			'Kat Bot is fully operational as a complete Kaspa and KRC20 wallet, offering real-time info and wallet functions in Discord. Ongoing development will soon add marketplace features such as trading. Powered by KSPR.',
		statusUrl: 'https://discord.gg/HKezH3m3wT'
	},
	{
		title: 'Kat Scan',
		status: 'v1 Operational',
		statusIcon: <LucideClock />,
		statusClassName: 'text-green-500',
		description:
			'Kat Scan is live, providing a KRC20 and KRC721 Explorer and Insights platform for transparency and analytics for token holders. More features are coming as we improve and Kaspa L2s like Kasplex and Igra roll out.',
		statusUrl: 'https://katscan.xyz'
	},
	{
		title: 'Kat Pool',
		status: 'Operational',
		statusIcon: <LucideCheck />,
		statusClassName: 'text-green-500',
		description:
			'An open-source Kaspa mining pool is in development, providing a low-fee way for users to contribute to the network with high-efficiency ASIC mining and earn $NACHO tokens while doing so. Open Beta is live!',
		statusUrl: 'https://app.katpool.xyz'
	},
	{
		title: 'NFT Collection',
		status: '10k Minted',
		statusIcon: <LucideCheck />,
		statusClassName: 'text-green-500',
		description:
			'Nacho Kats NFTs are the exclusive asset of the first DEX on Kaspa, Zealous Swap: A 10,000-piece collection celebrating Nacho the Kat, featuring unique traits, immersive lore, and exclusive perks. Trading on Kaspa.com',
		statusUrl: 'https://www.kaspa.com/nft/collections/NACHO'
	},
	{
		title: 'Listings',
		status: 'Continuous',
		statusIcon: <LucideConstruction />,
		statusClassName: 'text-yellow-500',
		description:
			'NACHO is tradable on the KSPR Marketplace, providing the first option for NACHO token holders. Trading will soon be available directly through Kat Bot. Discussions are ongoing with centralized exchanges to expand liquidity.',
		statusUrl: '/#trade-nacho'
	},
	{
		title: 'Kat Gov',
		status: 'Development',
		statusIcon: <LucideConstruction />,
		statusClassName: 'text-yellow-500',
		description:
			'Kat Gov is a seamless and user-friendly governance platform that allows any Kaspa project to empower their token holders to have voices heard and votes counted. Kat Gov is live and is use by the first DAO on Kaspa. ',
		statusUrl: 'https://katgov.xyz'
	},
	{
		title: 'Moonbound',
		status: 'Launching Soon',
		statusIcon: <LucideAlertTriangle />,
		statusClassName: 'text-blue-500',
		description:
			'Moonbound.gq is the first fair-launched only platform on Kaspa EVM, providing a seamless and secure way to launch tokens with immediate tradeability on a bonding curve and graduation path to the largest DEX on Kaspa. ',
		statusUrl: 'https://moonbound.gq'
	},
	{
		title: 'K.A.T.',
		status: 'Launching Soon',
		statusIcon: <LucideAlertTriangle />,
		statusClassName: 'text-blue-500',
		description:
			'Kaspa Alliance for Transparency (K.A.T.) is a community-owned organization supporting smaller projects, amplifying voices, and fostering transparency. It will play a key role in Kaspa adoption.',
		statusUrl: '#'
	}
];
