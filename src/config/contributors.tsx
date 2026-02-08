import { Social } from '@/types/social';
import { SiDiscord, SiGithub, SiTelegram, SiX } from '@icons-pack/react-simple-icons';

export interface Contributor {
	name: string;
	avatar: string;
	role: string;
	socials: Social[];
}

const contributors: Contributor[] = [
	{
		name: 'Ashton',
		avatar: '/img/avatars/ashton.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/argonmining', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/argonmining', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/argonmining', icon: <SiTelegram /> },
			{ name: 'GitHub', url: 'https://github.com/argonmining', icon: <SiGithub /> }
		]
	},
	{
		name: 'DrDan',
		avatar: '/img/avatars/drdan.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/dizzy8731', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/DrDanCrypto', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/DrDanCrypto', icon: <SiTelegram /> }
		]
	},
	{
		name: 'IronFrog',
		avatar: '/img/avatars/iron-frog.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/ironfrogcrypto', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/IronFrogCrypto', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/IronFrogCrypto', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Chris',
		avatar: '/img/avatars/chris.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/chris_crypto89', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/chris_crypto89', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/Lcac97', icon: <SiTelegram /> }
		]
	},
	{
		name: 'VT',
		avatar: '/img/avatars/vt.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/notvt', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/TheVTEra', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/Definitely_NotVT', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Pygoz',
		avatar: '/img/avatars/pygoz.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/Pygoz', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/Pygoz', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/Pygoz', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Vode',
		avatar: '/img/avatars/vode.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/_Vode', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/Vode_', icon: <SiX /> }
		]
	},
	{
		name: 'DarkLord',
		avatar: '/img/avatars/darklord.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/Ix_DarkLord_xI', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/DarkLordKas', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/DarkLord', icon: <SiTelegram /> }
		]
	},
	/*
	{
		name: 'JeNe',
		avatar: '/img/avatars/jene.webp',
		role: 'Development Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/jene_xl', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/JeNe_XL', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/JeNe_XL', icon: <SiTelegram /> },
			{ name: 'GitHub', url: 'https://github.com/Xelem', icon: <SiGithub /> }
		]
	},
	*/
	{
		name: 'J U L 1 3 N',
		avatar: '/img/avatars/jul13n.webp',
		role: 'Marketing Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/blockdag', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/BlokeDAG', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/BlokeDAG', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Havanzalo',
		avatar: '/img/avatars/havanzalo.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/Havanzalo', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/Havanzalo', icon: <SiX /> }
		]
	},
	{
		name: 'TreeBrother',
		avatar: '/img/avatars/treebrother.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/TreeBrother', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/TreeBrother', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/TreeBrother', icon: <SiTelegram /> }
		]
	},
	{
		name: 'dsr',
		avatar: '/img/avatars/dsr.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/dsr', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/cryptopawsitive', icon: <SiX /> }
		]
	},
	/*
	{
		name: 'SlightEdged',
		avatar: '/img/avatars/slightedged.webp',
		role: 'Moderator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/SlightEdged', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/SlightEdged', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/SlightEdged', icon: <SiTelegram /> }
		]
	},
	*/
	{
		name: 'Vidar',
		avatar: '/img/avatars/vidar.webp',
		role: 'Moderator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/vidar_vd', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/ivak_a', icon: <SiX /> }
		]
	},
	{
		name: 'CoinChimp',
		avatar: '/img/avatars/coinchimp.webp',
		role: 'Former Creator',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/coinchimp', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/coinchimpx', icon: <SiX /> }
		]
	},
	{
		name: 'Daniela',
		avatar: '/img/avatars/daniela.webp',
		role: 'Former Creator',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/danielajp7', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/DanielaJer16470', icon: <SiX /> }
		]
	},
	{
		name: 'CyberGent',
		avatar: '/img/avatars/cybergent.webp',
		role: 'Ambassador',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/cybergent_', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/cryptoliver_', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/cyber_gent', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Crypto Master',
		avatar: '/img/avatars/crypto-master.webp',
		role: 'Media (Dis) Mod (TG)',
		socials: [
			{ name: 'Twitter', url: 'https://twitter.com/MasterCryp42111', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/Crypt0MasterX', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Dong',
		avatar: '/img/avatars/dong.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Twitter', url: 'https://twitter.com/KaspaDegen', icon: <SiX /> },
			{ name: 'Discord', url: 'https://discord.com/users/seinonymous', icon: <SiDiscord /> }
		]
	},
	{
		name: 'iMalFect',
		avatar: '/img/avatars/imalfect.webp',
		role: 'Web Developer',
		socials: [
			{ name: 'Twitter', url: 'https://twitter.com/imaldev', icon: <SiX /> },
			{ name: 'Discord', url: 'https://discord.com/users/852640730093453372', icon: <SiDiscord /> },
			{ name: 'GitHub', url: 'https://github.com/imalfect', icon: <SiGithub /> }
		]
	},
	{
		name: 'AaronW',
		avatar: '/img/avatars/aaronw.webp',
		role: 'Moderator Team',
		socials: [{ name: 'Discord', url: 'https://discord.com/users/AaronW', icon: <SiDiscord /> }]
	},
	{
		name: 'JSavvv',
		avatar: '/img/avatars/jsavvv.webp',
		role: 'Allstar Contributor',
		socials: [{ name: 'Discord', url: 'https://discord.com/users/JSavvv0', icon: <SiDiscord /> }]
	},
	{
		name: 'GoonBoyCrypto',
		avatar: '/img/avatars/goonboycrypto.webp',
		role: 'Moderator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/GoonBoyCrypto', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/goonboycrypto', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/goonboycrypto', icon: <SiTelegram /> }
		]
	},
	{
		name: 'BaldNBeard3d',
		avatar: '/img/avatars/baldnbeard3d.webp',
		role: 'Marketing Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/BaldNBeard3d', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/BaldNBeard3d ', icon: <SiX /> }
		]
	},
	{
		name: 'LTforever',
		avatar: '/img/avatars/ltforever.webp',
		role: 'Moderator Team',
		socials: [{ name: 'Discord', url: 'https://discord.com/users/LTforever', icon: <SiDiscord /> }]
	},
	{
		name: 'kaspian90',
		avatar: '/img/avatars/kaspian90.webp',
		role: 'Ambassador',
		socials: []
	},
	{
		name: 'TheBecketList',
		avatar: '/img/avatars/thebecketlist.webp',
		role: 'Media Team',
		socials: [{ name: 'Twitter', url: 'https://twitter.com/BecketBroYo', icon: <SiX /> }]
	},
	{
		name: 'scryptoure',
		avatar: '/img/avatars/scryptoure.webp',
		role: 'Media Team',
		socials: [
			{ name: 'Twitter', url: 'https://twitter.com/scryptoure', icon: <SiX /> },
			{ name: 'Discord', url: 'https://discord.com/users/scryptoure', icon: <SiDiscord /> }
		]
	},
	{
		name: 'caixas4697',
		avatar: '/img/avatars/caixas.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Twitter', url: 'https://twitter.com/David%20Masters', icon: <SiX /> },
			{ name: 'Discord', url: 'https://discord.com/users/Caixas', icon: <SiDiscord /> }
		]
	},
	{
		name: 'Hazzo99',
		avatar: '/img/avatars/hamburger.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Twitter', url: 'https://twitter.com/hazzo99', icon: <SiX /> },
			{ name: 'Discord', url: 'https://discord.com/users/hamburger.kas', icon: <SiDiscord /> },
			{ name: 'Telegram', url: 'https://t.me/hazzo99', icon: <SiTelegram /> }
		]
	}
];
export default contributors;
