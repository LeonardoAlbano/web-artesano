'use client'

import { Tabs, TabsList } from '../ui/tabs'

export function NavigatorMenu() {
  return (
    <Tabs defaultValue="navbar" className="max-w-full">
      <TabsList className="mt-6 ">
        <h1>Salve</h1>
      </TabsList>
    </Tabs>
  )
}
