import React from 'react'
import { Separator } from '@/components/ui/separator'
import CandlestickChart from '@/components/CandleStickChart'

const LiveDataWrapper = ({children,coinId,poolId,coin,coinOHLCData}:LiveDataProps) => {
  return (
    <section id="live-data-wrapper">
        <p>Coin Header</p>
        <Separator className='divider' />
        <div className='trend'>
            <CandlestickChart coinId={coinId} data={coinOHLCData} />
        </div>

        

    </section>
  )
}

export default LiveDataWrapper