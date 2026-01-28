import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(40, 108, 255, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                {/* Modern Hero Header with Gradient */}
                <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  <span className="gradient-text">Выживи.</span>
                  <br />
                  <span className="text-foreground">Побеждай. Властвуй.</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70">
                  Погрузись в мир экстремальных сражений. Сотня игроков, одна зона, один победитель.
                  Лучшая battle royale игра с динамичным геймплеем и эпичными битвами.
                </p>
              </motion.div>

              <motion.div className="flex flex-col gap-6 sm:flex-row sm:items-center" variants={itemVariants}>
                <GradientButton
                  glowAmount={5}
                  className="px-6 py-2.5 text-base"
                  gradientFrom="from-[#286CFF]"
                  gradientTo="to-[#1a4acc]"
                  asChild
                >
                  <a href="#features" className="flex items-center">
                    Играть сейчас
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </GradientButton>

                <MagneticButton className="neumorphic-button">
                  <a href="#features" className="px-6 py-2.5 block">
                    Узнать больше
                  </a>
                </MagneticButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Более 500 000 игроков онлайн прямо сейчас
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <SpotlightCard className="relative h-[450px] w-full overflow-hidden rounded-xl border glassmorphic-card p-1 border-glow-red">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f80]/30 via-transparent to-gray-900/30 z-10"></div>
              <motion.img
                src="https://cdn.poehali.dev/projects/e14c72be-1f04-4116-9166-c4a6faef194f/bucket/e386a805-c77d-4b58-86e1-98bc0a3f13bb.png"
                alt="Battle Royale Gameplay"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
              <div className="relative z-30 h-full w-full flex items-end justify-center p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <span className="font-heading text-2xl text-white font-bold tracking-tight drop-shadow-lg">
                    100 игроков. Одна битва. Один победитель.
                  </span>
                </motion.div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}