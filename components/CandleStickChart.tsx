// import React, { Children } from 'react'
'use client';


import { PERIOD_BUTTONS } from "@/constants";
import { IChartApi,ISeriesApi } from "lightweight-charts";
import { useRef,useState } from "react";

const CandlestickChart = (({
  children,
  data,
  coinId,
  height=360,
  initialPeriod='daily',
}: CandlestickChartProps) => {
  const [period,setPeriod]=useState(initialPeriod);
  const [loading,setLoading]=useState(false);
  const chartContainerRef=useRef<HTMLDivElement|null>(null);
  const chartRef=useRef<IChartApi |null>(null);
  const candelSeriesRef=useRef<ISeriesApi<"Candlestick">|null>(null);
  const [ohlcData,setOhlcData]=useState<OHLCData[]>(data ?? []);

  const fetchOHLCData=async(selectedPeriod:period)=>{
    try{
      await fetcher<OHLCData[]>('/coins/bitcoin/ohlc',{
        vs_currency:'usd',
        days:1,
        interval:'hourly',
        precision:'full',
      })catch(e){

      }
    }
  };



  const handlePeriodChange=(newPeriod:Period)=>{
    if(newPeriod===period) return;

    setPeriod(newPeriod);
  }

  return (
    <div id='candlestick-chart'>
      <div className='chart-header'>
        <div className='flex-1'>{children}</div>
        <div className='button-group'>
          <span className='text-sm mx-2 font-medium 
          text-purple-100/50'>
          Period:</span>
          {PERIOD_BUTTONS.map(({value,label})=>(
            <button key={value} 
            className="config-button" onClick={()=>{}}
             disabled={loading}>
              {label}
            </button>
          ))}
        </div>

      </div>

    </div>
  )
})

export  default CandlestickChart