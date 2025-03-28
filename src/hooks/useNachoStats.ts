import { useEffect, useState } from 'react';

interface NachoStatsResponse {
	message: string;
	result: [
		{
			holderTotal: number;
			transferTotal: number;
			mintTotal: number;
		}
	];
}

export default function useNachoStats() {
	const [holderCount, setHolderCount] = useState<number>(0);
	const [transferCount, setTransferCount] = useState<number>(0);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const fetchStats = async () => {
			try {
				const response = await fetch('https://api.kasplex.org/v1/krc20/token/NACHO');
				const data: NachoStatsResponse = await response.json();
				if (data.result?.[0]) {
					setHolderCount(data.result[0].holderTotal);
					setTransferCount(data.result[0].transferTotal);
					setError(false);
				}
			} catch (_error) {
				setError(true);
				setHolderCount(0);
				setTransferCount(0);
			}
		};

		fetchStats();
		// Refresh every 5 minutes
		const interval = setInterval(fetchStats, 5 * 60 * 1000);
		return () => clearInterval(interval);
	}, []);

	return { holderCount, transferCount, error };
} 