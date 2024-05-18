import Header from '@/components/header-nav'
import { SectionHeadline } from '@/components/section-headline'

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <Header />

      <SectionHeadline />

      <article className="w-full bg-slate-50">
        <section>
          <h1>salve</h1>
        </section>
      </article>
    </div>
  )
}
