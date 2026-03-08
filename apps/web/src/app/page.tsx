"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PenTool, Image as ImageIcon, Video, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full flex flex-col items-center justify-center z-10 text-center mt-12 md:mt-24">

        {/* Hero Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative w-64 h-24 md:w-96 md:h-36"
        >
          <Image
            src="/bolt-logo.png"
            alt="BOLT FONT Logo"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The <span className="text-gradient">Ultimate</span> Creative Suite
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Design, edit, and publish with uncompromising power. Powered by BOLTEVM to ensure true digital ownership.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, staggerChildren: 0.1 }}
        >
          <ToolkitCard
            title="Text Editor"
            description="Rich typography and formatting for pristine documents."
            icon={<PenTool className="w-8 h-8 text-primary" />}
            href="/text"
            color="hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
          />
          <ToolkitCard
            title="Photo Editor"
            description="Professional image manipulation and filter controls."
            icon={<ImageIcon className="w-8 h-8 text-secondary" />}
            href="/photo"
            color="hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,224,255,0.2)]"
          />
          <ToolkitCard
            title="Video Editor"
            description="Timeline sequencing and rich media compositing."
            icon={<Video className="w-8 h-8 text-purple-500" />}
            href="/video"
            color="hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          />
        </motion.div>
      </div>
    </main>
  );
}

function ToolkitCard({ title, description, icon, href, color }: { title: string, description: string, icon: React.ReactNode, href: string, color: string }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`glass-panel p-8 rounded-2xl flex flex-col items-start transition-all duration-300 border border-white/5 cursor-pointer h-full group ${color}`}
      >
        <div className="p-3 bg-white/5 rounded-xl mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">
          {description}
        </p>
        <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white mt-auto">
          Launch App <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
}
