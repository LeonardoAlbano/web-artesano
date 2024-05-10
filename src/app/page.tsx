import Header from '@/components/header-nav'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6"></div>
    </div>
  )
}
