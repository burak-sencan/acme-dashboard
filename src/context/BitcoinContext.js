import { createContext, useEffect, useState } from 'react'

const BitcoinContext = createContext()

export const BitcoinProvider = ({ children }) => {
  const [isUpdated, setIsUpdated] = useState(false)
  const [prices, setPrices] = useState({
    time: {
      updated: 'Sep 30, 2022 18:41:00 UTC',
    },
    bpi: {
      USD: {
        code: 'USD',
        rate: '00,000.0000',
      },
      GBP: {
        code: 'GBP',
        rate: '00,000.0000',
      },
      EUR: {
        code: 'EUR',
        rate: '00,000.0000',
      },
    },
  })

  // Fetch data from given url
  const fetchPrices = async () => {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await response.json()
    setPrices(data)
  }

  //Highlight Bitcoin price changes for a glimpse so that it is clear that they were just updated.
  useEffect(() => {
    setIsUpdated(true)
    setTimeout(() => {
      setIsUpdated(false)
    }, 1000)
  }, [prices])

  // // Fetch prices on init
  useEffect(() => {
    fetchPrices()
  }, [])

  // Auto update every minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPrices()
    }, 1000 * 60)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <BitcoinContext.Provider
      value={{
        isUpdated,
        prices,
        fetchPrices,
      }}
    >
      {children}
    </BitcoinContext.Provider>
  )
}
export default BitcoinContext
