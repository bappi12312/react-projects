import React from "react"
import { useState, useEffect, useCallback, useRef} from "react"
import InputBox from "./components/InputBox"
import useHook from "./customHooks/Hook"

function App() {
  // https://currency-api.pages.dev/v1/currencies/${currency}.json xpf


  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState('usd')
  const [to, setTo] = useState('xpf')
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useHook(from);
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setfrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setamount(convertedAmount)
  }
    
  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to])
  }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1709733167460-38fa7bc94882?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label={from}
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setfrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label={from}
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert {from.toUpperCase()} To {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
                      }

export default App