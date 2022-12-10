import { useEffect, useState } from 'react'

interface Params {
  fn: () => Promise<void>
  activeExternalDeps?: boolean
  externalDep?: any
}

export const useEffectAsyncExecution = (params: Params) => {
  const [waitAsync, setWaitAsync] = useState(false)

  useEffect(() => {
    const getData = async () => {
      if (params.activeExternalDeps && !params.externalDep) return;

      if (!waitAsync) {
        setWaitAsync(true)
        await params.fn()
        setWaitAsync(false)
      }
    }

    getData()
    // eslint-disable-next-line
  }, [params])
}

export default useEffectAsyncExecution
