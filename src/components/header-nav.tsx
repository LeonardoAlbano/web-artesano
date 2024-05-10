import { Home, Milestone, Palette, Phone } from 'lucide-react'
import Link from 'next/link' // Alteração aqui

import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from './ui/separator'

export default function Header() {
  // Alteração aqui
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6 justify-between">
        <h1>Logo</h1>

        <nav className="flex items-center space-x-5 lg:space-x-6">
          <Link href="/" className="flex gap-2">
            {' '}
            {/* Alteração aqui */}
            <Home className="h4 w-4" />
            Início
          </Link>

          <Separator orientation="vertical" className="h-6" />

          <Link href="/" className="flex gap-2">
            {' '}
            {/* Alteração aqui */}
            <Milestone className="h4 w-4" />
            Sobre
          </Link>

          <Separator orientation="vertical" className="h-6" />

          <Link href="/" className="flex gap-2">
            {' '}
            {/* Alteração aqui */}
            <Palette className="h4 w-4" />
            Artesão
          </Link>

          <Separator orientation="vertical" className="h-6" />

          <Link href="/" className="flex gap-2">
            {' '}
            {/* Alteração aqui */}
            <Phone className="h4 w-4" />
            Contato
          </Link>

          <Separator orientation="vertical" className="h-6" />

          <ModeToggle />
        </nav>
      </div>
    </div>
  )
}
