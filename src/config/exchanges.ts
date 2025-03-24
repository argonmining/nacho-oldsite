export interface Exchange {
	logo: string;
	id: string; // CoinGecko exchange ID
	name: string;
	description: string;
	url: string;
}
const exchanges: Exchange[] = [
	{
		name: 'KSPR Bot',
		description:
			'',
		logo: '/img/exchanges/kspr-bot.png',
		id: 'kspr-bot',
		url: 'https://t.me/kspr_home_bot?start=nacho'
	},
	{
		name: 'Pionex',
		description:
			'',
		logo: '/img/exchanges/pionex.svg',
		id: 'pionex',
		url: 'https://pionex.com/en/signUp?r=GONACHO'
	},
	{
		name: 'PionexUS',
		description:
			'',
		logo: '/img/exchanges/pionex.svg',
		id: 'pionex-us',
		url: 'https://accounts.pionex.us/en/signup?ref=NACHO'
	},
	{
		name: 'CoinEx',
		description:
			'',
		logo: '/img/exchanges/coinex.svg',
		id: 'coinex',
		url: 'https://www.coinex.com/register?refer_code=6zrua'
	},
	{
		name: 'Gate.io',
		description:
			'',
		logo: '/img/exchanges/gate.svg',
		id: 'gate',
		url: 'https://www.gate.io/signup/VLUWXFEMAQ?ref_type=102'
	},
	{
		name: 'AscendEX',
		description:
			'',
		logo: '/img/exchanges/ascendex.png',
		id: 'ascendex',
		url: 'https://ascendex.com/en/register?inviteCode=UQ0BAVVXS'
	}
];
export default exchanges;
 