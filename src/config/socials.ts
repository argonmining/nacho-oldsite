export interface Social {
	id: string; // Has to match simpleicons.org slug
	url: string;
	orbit: {
		size: number;
		duration: number;
		delay: number;
		radius: number;
	};
}
const socials: Social[] = [
	{
		id: 'discord',
		url: 'https://discord.gg/nachothekat',
		orbit: { size: 80, duration: 20, delay: 20, radius: 200 }
	},
	{
		id: 'instagram',
		url: 'https://www.instagram.com/nachowyborski',
		orbit: { size: 70, duration: 20, delay: 10, radius: 200 }
	},
	{
		id: 'telegram',
		url: 'https://t.me/nachothecat',
		orbit: { size: 75, duration: 22, delay: 0, radius: 350 }
	},
	{
		id: 'x',
		url: 'https://x.com/NachotheKat',
		orbit: { size: 64, duration: 30, delay: 20, radius: 450 }
	},
	{
		id: 'reddit',
		url: 'https://www.reddit.com/r/Nacho_the_Kat',
		orbit: { size: 70, duration: 30, delay: 12, radius: 450 }
	},
	{
		id: 'medium',
		url: 'https://nachowyborski.medium.com/',
		orbit: { size: 70, duration: 30, delay: 32, radius: 450 }
	},
	{
		id: 'facebook',
		url: 'https://www.facebook.com/people/Nacho-the-Kat',
		orbit: { size: 70, duration: 22, delay: 15, radius: 350 }
	},
	{
		id: 'youtube',
		url: 'https://www.youtube.com/@NachoWyborski',
		orbit: { size: 70, duration: 22, delay: 18, radius: 350 }
	},
	{
		id: 'tiktok',
		url: 'https://www.tiktok.com/@nacho.wyborski',
		orbit: { size: 70, duration: 30, delay: 56, radius: 450 }
	}
];

export default socials;
