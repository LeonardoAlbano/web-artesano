import { Separator } from '@/components/ui/separator'
import { Github, Instagram, Linkedin } from 'lucide-react'

export function SectionHeadline() {
  return (
    <>
      <article className=" flex flex-col space-y-16 p-4 pt-10">
        <h1 className="text-9xl font-semibold pr-30 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Mestre em <br /> design e tecnologia
        </h1>
        <section className="grid grid-cols-headline">
          <div>
            <h2 className="text-3xl font-bold pb-4">
              Desenvolvimento de landing pages, aplicativos e sistemas
            </h2>
            <p className="text-2xl font-medium">
              Criamos experiências digitais únicas que transcendem os
              horizontes, construímos novos capítulos na história do seu
              negócio.
            </p>
          </div>

          <div className="">
            <span className="flex font-medium text-1xl justify-end">
              ARTESANO &bull; DESIGN &bull; DEVELOPER
            </span>
          </div>
        </section>
        <Separator orientation="horizontal" />
      </article>

      <article className="flex flex-1 flex-col gap-4 px-5 pt-2 ">
        <div className="flex gap-6">
          <a
            href=""
            className="border-4 rounded-full p-[15px] border-violet-400"
          >
            <Instagram />
          </a>

          <a
            href=""
            className="border-4 rounded-full p-[15px] border-violet-300"
          >
            <Linkedin />
          </a>

          <a href="" className="border-4 rounded-full p-[15px] border-cyan-200">
            <Github />
          </a>
        </div>
      </article>
    </>
  )
}
