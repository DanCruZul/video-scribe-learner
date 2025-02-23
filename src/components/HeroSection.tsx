import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Video, FileText, Languages } from 'lucide-react';
const HeroSection = () => {
  return <section className="pt-24 pb-12 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Notes Into
              <span className="text-gradient text-red-400"> Engaging Videos</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Convert any text into dynamic video content. Enhance learning with AI-powered video generation, perfect for students and educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl filter blur-3xl"></div>
              <div className="glass-card rounded-3xl p-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[{
                  icon: Video,
                  title: "AI Video Creation",
                  description: "Transform text into engaging video content automatically"
                }, {
                  icon: FileText,
                  title: "Multiple Formats",
                  description: "Support for PDFs, docs, and plain text"
                }, {
                  icon: Languages,
                  title: "Voice Options",
                  description: "Multiple languages and voice styles"
                }].map((feature, index) => <div key={index} className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                      <feature.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;