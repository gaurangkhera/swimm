import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
  <div className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mt-5 text-3xl font-light leading-snug sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
          Smart, sustainable & affordable <span className="font-semibold ">water monitoring</span>.
        </h1>
        <p className="mx-auto mt-10 max-w-md text-base leading-7 text-gray-400">
          SWIMM assesses parameters like turbidity, pH, temperature among others to provide a real-time water quality index.
        </p>
        <form action="#" method="POST" className="mt-10">
          <div className="relative">
            <div className="flex justify-center border-gray-900">
              <Button
              className="gap-1.5"
              size={'lg'}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</>
  )
}
