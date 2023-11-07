import { Hero, Portfolio, Services, Ourteam, Ourvalue, Blogslist, Contact } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <Ourvalue />
      <Ourteam />
      <Contact />
      <Blogslist />
    </main>
  )
}
  