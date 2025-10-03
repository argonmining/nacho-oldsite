export interface Exchange {
	logo: string;
	id: string; // CoinGecko exchange ID
	name: string;
	description: string;
	url: string;
}
const exchanges: Exchange[] = [
	{
		name: 'Zealous',
		description:
			'',
		logo: '/img/exchanges/zealous.png',
		id: 'zealous',
		url: 'https://app.zealousswap.com/swap?from=KAS&to=0x9a5a144290dffA24C6c7Aa8cA9A62319E60973D8'
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
		name: 'LCX',
		description:
			'',
		logo: '/img/exchanges/lcx.png',
		id: 'lcx',
		url: 'https://exchange.lcx.com/join/Ng16PoipzL'
	},
	{
		name: 'AscendEX',
		description:
			'',
		logo: '/img/exchanges/ascendex.png',
		id: 'ascendex',
		url: 'https://ascendex.com/en/register?inviteCode=UQ0BAVVXS'
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
		name: 'Nacho Kats',
		description:
			'',
		logo: '/img/exchanges/nachokats.svg',
		id: 'trade-nfts',
		url: 'https://www.kaspa.com/nft/collections/NACHO?ref=LYl1whR1'
	}
];
export default exchanges;
 