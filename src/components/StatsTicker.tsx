import useNachoStats from '@/hooks/useNachoStats';
import useTokenPrice from '@/hooks/useTokenPrice';
import Marquee from '@/components/ui/marquee';
import { LucideArrowDown, LucideArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function formatNumber(num: number, isPrice = false): string {
  if (isPrice) {
    return num.toFixed(8);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: num >= 1000000 ? 'compact' : 'standard',
    maximumFractionDigits: 2
  }).format(num);
}

function formatCount(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export default function StatsTicker() {
  const tokenData = useTokenPrice('nacho-the-kat');
  const { holderCount, transferCount, error } = useNachoStats();
  const [priceChange, setPriceChange] = useState<{ value: number; isPositive: boolean }>({
    value: 0,
    isPositive: true
  });
  const [lastPrice, setLastPrice] = useState<number>(0);
  const [show, setShow] = useState(false);

  // Calculate market cap (287B total supply)
  const marketCap = tokenData.usd * 287000000000;

  // Track price changes
  useEffect(() => {
    if (lastPrice && tokenData.usd !== lastPrice) {
      const change = ((tokenData.usd - lastPrice) / lastPrice) * 100;
      setPriceChange({
        value: Math.abs(change),
        isPositive: change > 0
      });
    }
    setLastPrice(tokenData.usd);
  }, [tokenData.usd, lastPrice]);

  useEffect(() => {
   	setShow(true);
  }, []);

  const statsContent = (
    <div className="flex items-center gap-16 px-12 font-medium">
      <span className="flex items-center gap-2 whitespace-nowrap">
        $NACHO Price: ${formatNumber(tokenData.usd, true)}{' '}
        {priceChange.value > 0 && (
          <span
            className={`flex items-center ${
              priceChange.isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {priceChange.isPositive ? <LucideArrowUp size={16} /> : <LucideArrowDown size={16} />}
            {priceChange.value.toFixed(2)}%
          </span>
        )}
      </span>
      <span className="text-primary/50">•</span>
      <span className="whitespace-nowrap">Market Cap: {formatNumber(marketCap)}</span>
      <span className="text-primary/50">•</span>
      <span className="whitespace-nowrap">24h Volume: {formatNumber(tokenData.usd24hVol)}</span>
      <span className="text-primary/50">•</span>
      <span className="whitespace-nowrap">
        {error ? 'Loading holders...' : `Unique Holders: ${formatCount(holderCount)}`}
      </span>
      <span className="text-primary/50">•</span>
      <span className="whitespace-nowrap">
        {error ? 'Loading transfers...' : `Token Transfers: ${formatCount(transferCount)}`}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: show ? 0 : '100%', opacity: show ? 1 : 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.5,
        duration: 0.5
      }}
      className="absolute bottom-0 w-full border-t border-primary/20 bg-black/20 backdrop-blur-sm"
    >
      <Marquee pauseOnHover className="py-4" repeat={3}>
        {statsContent}
      </Marquee>
    </motion.div>
  );
}