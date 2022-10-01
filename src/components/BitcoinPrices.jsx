import React, { useContext } from 'react'
import BitcoinContext from '../context/BitcoinContext'
import { AiOutlineReload } from 'react-icons/ai'

const Price = ({ code, rate }) => {
  const { isUpdated } = useContext(BitcoinContext)

  return (
    <div className="mb-2">
      <div className="flex items-center justify-around">
        <p className="text-stone-500">{code}</p>
        <p className={`text-stone-500 ${isUpdated && "glimpse"}`}>{rate}</p>
      </div>
      <div className="border border-slate-300"></div>
    </div>
  )
}

function BitcoinPrices() {
  const { prices, fetchPrices } = useContext(BitcoinContext)
  return (
    <div className="w-[250px] md:w-[450px]">
      <div className="flex justify-end">
        <button className="custom-button p-2 mb-4" onClick={fetchPrices}>
          <AiOutlineReload />
        </button>
      </div>
      <div>
        <Price code={prices.bpi.USD.code} rate={prices.bpi.USD.rate} />
        <Price code={prices.bpi.GBP.code} rate={prices.bpi.GBP.rate} />
        <Price code={prices.bpi.EUR.code} rate={prices.bpi.EUR.rate} />
      </div>
      <p className="text-center mt-8 text-stone-500">{prices.time.updated}</p>
    </div>
  )
}

export default BitcoinPrices
