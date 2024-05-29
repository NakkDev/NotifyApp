import { ContainerScroll } from "@/components/global/ContainerScroll";
import { HeroParallax } from "@/components/global/HeroParallax";
import { InfiniteMovingCards } from "@/components/global/InfiniteMovingCards";
import Navbar from "@/components/global/NavBar";
import PlansCards from "@/components/global/PlansCards";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/contants";
import { SparklesCore } from "@/components/global/SparklesCore";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col gap-1 md:gap-6">
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Notify
                </h1>
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products} />
      </section>

      <section className="mt-[150px]">
        <h1 className="text-2xl md:text-5xl font-bold dark:text-white text-center mb-12">
          Plans That <br /> Fit You Best
        </h1>
        <PlansCards />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </section>
    </main>
  );
}
