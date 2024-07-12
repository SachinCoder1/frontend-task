"use client"

import * as React from "react"
import { Provider } from "react-redux"
import store from "@/store"

type Props = {
    children: React.ReactNode
}
export function ReduxProvider({ children, ...props }: Props) {
  return <Provider store={store} {...props}>{children}</Provider>
}
