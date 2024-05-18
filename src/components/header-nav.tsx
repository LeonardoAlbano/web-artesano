'use client'

import { Home, Menu, Milestone, Palette, Phone, X } from 'lucide-react'
import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from './ui/separator'
import { useState } from 'react'
import { Button } from './ui/button'

export default function Header() {
  const [isClick, setIsClick] = useState(false)

  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }

  return (
    <div className="mt-3 ">
      <nav className="border border-gray-200 dark:border-violet-400 px-8 rounded-full shadow-md">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                logo
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/" className="flex gap-2">
                <Home className="h4 w-4" />
                Início
              </Link>

              <Separator
                orientation="vertical"
                className="h-6 dark:border-violet-400"
              />

              <Link href="/" className="flex gap-2">
                <Milestone className="h4 w-4" />
                Sobre
              </Link>

              <Separator
                orientation="vertical"
                className="h-6 dark:border-violet-400"
              />

              <Link href="/" className="flex gap-2">
                <Palette className="h4 w-4" />
                Artesão
              </Link>

              <Separator
                orientation="vertical"
                className="h-6 dark:border-violet-400"
              />

              <Link href="/" className="flex gap-2">
                <Phone className="h4 w-4" />
                Contato
              </Link>

              <Separator
                orientation="vertical"
                className="h-6 dark:border-violet-400"
              />

              <ModeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <Button className="w-[50px]" onClick={toggleNavbar}>
              {isClick ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-8 sm:px-7 flex flex-col items-center">
              <Separator orientation="horizontal" />

              <Link href="/" className="flex gap-2">
                <Home className="h4 w-4" />
                Início
              </Link>

              <Separator orientation="horizontal" />

              <Link href="/" className="flex gap-2">
                <Milestone className="h4 w-4" />
                Sobre
              </Link>

              <Separator orientation="horizontal" />

              <Link href="/" className="flex gap-2">
                <Palette className="h4 w-4" />
                Artesão
              </Link>

              <Separator orientation="horizontal" />

              <Link href="/" className="flex gap-2 pb-3">
                <Phone className="h4 w-4" />
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
