import { ofetch } from 'ofetch';
import { useEffect, useState } from 'react';

interface TokenData {
  usd: number;
  usd24hVol: number;
  usd24hChange: number;
}

export default function useTokenPrice(tokenId: string) {
  const [tokenData, setTokenData] = useState<TokenData>({
    usd: 0,
    usd24hVol: 0,
    usd24hChange: 0
  });

  useEffect(() => {
    const fetchTokenData = async () => {
      const response = await ofetch<{
        [tokenId: string]: {
          usd: number;
          usd_24h_vol: number;
          usd_24h_change: number;
        };
      }>(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true`).catch(
        () => {
          return null;
        }
      );
      
      if (response && response[tokenId]) {
        return {
          usd: response[tokenId].usd,
          usd24hVol: response[tokenId].usd_24h_vol,
          usd24hChange: response[tokenId].usd_24h_change
        };
      }
      
      return { usd: 0, usd24hVol: 0, usd24hChange: 0 };
    };

    fetchTokenData().then((res) => {
      setTokenData(res);
    });
  }, [tokenId]);

  return tokenData;
}