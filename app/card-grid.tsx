"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar, Brain, Target, Clock } from 'lucide-react'

const cards = [
  {
    id: 1,
    title: "Smart Scheduling",
    subtitle: "AI analyzes your peak productivity hours and optimizes your daily schedule",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-blue-200",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Task Prioritization",
    subtitle: "Let AI help you focus on what matters most based on your goals",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-green-200",
    icon: Brain,
  },
  {
    id: 3,
    title: "Goal Tracking",
    subtitle: "Track your progress and get AI-powered insights to improve",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-purple-200",
    icon: Target,
  },
  {
    id: 4,
    title: "Time Analytics",
    subtitle: "Understand your time usage patterns with AI analysis",
    image: "/placeholder.svg?height=200&width=300",
    color: "bg-yellow-200",
    icon: Clock,
  },
]

export function CardGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {cards.map((card) => (
        <motion.div key={card.id} variants={cardVariants}>
          <Card className="overflow-hidden group cursor-pointer">
            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 ${card.color} opacity-80`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <card.icon className="w-16 h-16 text-white/80" />
              </div>
            </motion.div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 font-mono leading-relaxed">{card.subtitle}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

