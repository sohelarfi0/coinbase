import React from 'react'
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
const CoinHeader = ({
    livePriceChangePercentage24h,
    priceChangePercentage30d,
    priceChange24h,
    livePrice,
    name,
    image,
}:LiveCoinHeaderProps) => {

    const isTrendingUp=livePriceChangePercentage24h>0;
    const isThirtyDayUP=priceChangePercentage30d>0;
    const isPriceChangeUp=priceChange24h>0;

    const stats=[
        {
            label:"today",
            value:livePriceChangePercentage24h,
            isUp:isTrendingUp,
            formatter:formatPercentage,
            showIcon:true,
        },
        {
            label:"30 days",
            value:priceChangePercentage30d,
            isUp:isThirtyDayUP,
            formatter:formatPercentage,
            showIcon:true,
        },
        {
            label:"Price Change (24h) ",
            value:priceChange24h,
            isUp:isPriceChangeUp,
            formatter:formatCurrency,
            showIcon:false,
        },
    ]
  return (
    <div id='coin-header'>
        <h3>{name}</h3>
        <div className='info'>
            <Image src={image} alt={name} width={77} height={77} />
            <div className='price-row'>
                  
            </div>
        </div>
    </div>
  )
}

export default CoinHeader