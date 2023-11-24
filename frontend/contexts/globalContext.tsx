'use client'
import React, { useState } from "react";

interface GlobalContextProps {
  consumerSec: string,
  setConsumerSec: (value: string) => void,
}
export const GlobalContext = React.createContext<GlobalContextProps>({
  consumerSec: 'Overview',
  setConsumerSec: () => { }
})

export const GlobalContextProvider = (props: any) => {
  const [currConsumerSec, setCurrConsumerSec] = useState('Overview')

  return (
    <GlobalContext.Provider
      value={{
        consumerSec: currConsumerSec,
        setConsumerSec: setCurrConsumerSec,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
