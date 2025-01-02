"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardGrid } from "../card-grid"
import { Brain } from 'lucide-react'
import { WarpBackground } from "@/components/ui/warp-background"

export default function Page() {
  return (
    <WarpBackground>
    <div className="min-h-screen bg-[url('/grid-light.svg')] bg-repeat">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-[#C1FF9B] text-black hover:bg-[#A8E68C] font-mono rounded-xl px-6">
            Start Planning
          </Button>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Plan your perfect day with{" "}
            <motion.span
              className="inline-block bg-pink-200 px-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              AI-powered insights.
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl font-mono text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Optimize your daily schedule, boost productivity,
            <br />
            and achieve your goals with AI assistance.
          </motion.p>
        </div>

        <CardGrid />
      </main>
    </div>
    </WarpBackground>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
        <Brain className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl font-mono font-bold">planAI</span>
    </div>
  )
}

