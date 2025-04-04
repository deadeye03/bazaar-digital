'use client'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { AboutUsCards } from '@/data'



export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=' px-4 md:px-12  py-12 md:py-20 overflow-hidden'
            id='about'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 md:gap-12 overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", }}
                    className='space-y-12'>
                    <p className='text-pink-600 font-bold font-mono text-xl text-center'>About Us </p>
                    <h1 className='gradient-title text-center md:text-left font-bold text-3xl sm:text-4xl md:text-5xl text-white'>
                        Why <span className='bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent font-bold'> Bazzar Digital </span> is First choice for your Business Growth ?
                    </h1>
                    <p className='text-muted-foreground text-center md:text-left'> Bazaar Digital is the first choice for your business growth because we offer state-of-the-art AI-powered websites, scalable and cost-effective social media marketing, expert SEO consultancy, and tailored digital solutions that drive engagement and measurable results—all with a focus on innovation and efficiency.</p>
                    <Button className='bg-gradient-to-r from-primary via-slate-400 to-accent hover:opacity-90 flex items-center gap-4 hover:gap-2 transition-all duration-300' variant='outline' size='lg'>
                        <span className=' text-black'>See Our Works</span>
                        <ArrowRight className=" h-4 w-4" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", }}
                    className='grid  grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                    {AboutUsCards.map((card, index) => (
                        <Card key={index} className='mb-4'>
                            <CardHeader>
                                <CardTitle className='flex items-center gap-4 text-xl'>
                                    <div className='bg-[#48C89C] p-3 rounded-xl w-max'>
                                        <card.icon className='h-6 w-6 text-white' />
                                    </div>
                                    {card.title}
                                </CardTitle>
                                <CardDescription>{card.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}

                </motion.div>

            </div>

        </motion.section>
    )
}