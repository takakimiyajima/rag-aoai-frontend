"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "@/store/store"
// import SideMenu from ''

const ManiLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Provider store={store}>
        {/* <SideMenu /> */}
        <main className="flex-1 bg-slate-50 overflow-auto">{children}</main>
      </Provider>
    </div>
  )
}

export default ManiLayout
