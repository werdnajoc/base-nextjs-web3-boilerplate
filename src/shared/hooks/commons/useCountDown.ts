import { useEffect, useState } from 'react'

export const useCountDown = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    if (counter === 0) {
      return
    }

    setTimeout(() => {
      setCounter(counter - 1)
    }, 1000)
  }, [counter])

  const startCountHandler = (seconds = 5) => setCounter(seconds)

  return {
    startCountHandler,
    counter,
  }
}

export default useCountDown
