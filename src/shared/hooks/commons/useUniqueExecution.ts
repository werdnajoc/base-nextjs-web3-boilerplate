import { useEffect, useState } from 'react'

interface Params {
  fn: () => Promise<void>
}

interface Result {
  firstExecution: boolean
}

export const useUniqueExecution = (params: Params): Result => {
  const [firstExecution, setFirstExecution] = useState(false)

  useEffect(() => {
    const getData = async () => {
      if (!firstExecution) {
        setFirstExecution(true)
        await params.fn()
      }
    }

    getData()

    return () => {
      setFirstExecution(true)
    }
  })

  return {
    firstExecution,
  }
}

export default useUniqueExecution
