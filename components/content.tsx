import {Hero} from "./content/hero";
import Auction from "./auction";

export default function Content() {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 min-h-screen">
      <Hero/>

      <section>
        <Auction />
      </section>
    </main>
  )
}
