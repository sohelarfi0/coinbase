import React from 'react'
import Image from 'next/image';
import { cn, formatCurrency } from '@/lib/utils';
import DataTable from '@/components/DataTable';
import { headers } from 'next/headers';
import { Link, TrendingDown, TrendingUp } from 'lucide-react';
import { fetcher } from '@/lib/coingecko.actions';



const  columns:DataTableColumn<TrendingCoin>[]=[{
  header:'Name',
  cellClassName:'name-cell',
  cell:(coin)=>{
    const item=coin.item;

    return(
      <Link href={`/coins/${item.id}`}>
        <Image src={item.large} alt={item.name} width={36} height={36}/>
        <p>{item.name}</p>
      </Link>
    )
  },},
  {
    header:'24h Change',
    cellClassName:'name-cell',
    cell:(coin)=>{
      const item=coin.item;
      const isTrendingUp=item.data.price_change_percentage_24h.usd>0;

      return(
        <div className={cn('price-change',
        isTrendingUp?'text-green-500':'text-red-500')}>
          <p>
            {isTrendingUp? (
              <TrendingUp width={16} height={16}/>

            ):<TrendingDown width={16} height={16}/>}
          </p>

        </div>
      )
    }

  }
,{
  header:'Price', cellClassName:'price-cell',cell:(coin)=>
    coin.item.data.price
},

]
const page = async() => {
  const coin=await fetcher<CoinDetailsData>
  ('/coins/bitcoin',{
     dex_pair_format:'symbol'
  });

  return (
    <main className='main-container'>
      <section className='home-grid'>
        <div id="coin-overview">
          <div className='header pt-2'>
            <Image src={coin.image.large} alt={coin.name}
             width={56} height={56}/>
          <div className='info'>
            <p>{coin.name}/{coin.symbol.toUpperCase()}</p>
            <h1>{formatCurrency(coin.market_data.current_price.usd)
              }</h1>
          </div>
          </div>
        </div>
        <p>Trending Coins</p>
        <div id='trending-coins'>
        
        </div>
      </section>
    </main>
  )
}

export default page