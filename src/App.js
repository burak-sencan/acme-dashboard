import { BitcoinProvider } from './context/BitcoinContext'
import { TimerProvider } from './context/TimerContext'
import CountDown from './components/CountDown'
import BitcoinPrices from './components/BitcoinPrices'

function App() {
  return (
    <BitcoinProvider>
      <TimerProvider>
        <div className="flex items-center justify-center flex-col h-screen gap-16 bg-slate-50 overflow-auto">
          <CountDown />
          <BitcoinPrices />
        </div>
      </TimerProvider>
    </BitcoinProvider>
  )
}

export default App
