import { useState, useEffect } from "react";

function useHook (currency) {
  const [data, setData] = useState({})
  useEffect(
    () => {
      fetch(`https://currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((data) => setData(data[currency]))
      console.log(data);
    }
    ,[currency])

    return data
}

export default useHook;