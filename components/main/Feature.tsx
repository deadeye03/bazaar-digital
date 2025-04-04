'use client'

import { features1, features2 } from "@/data"
import { motion } from "framer-motion"



/**
 * Renders the Features section of the webpage, showcasing various
 * services and technologies offered by Bazaar Digital. It includes
 * two sets of features, each with an icon, name, and description,
 * displayed in a responsive grid layout. The section also contains
 * a header and introductory text to engage visitors and highlight
 * the benefits of the solutions provided.
 */

export default function Features() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            id="solutions" className="container space-y-4 py-4 overflow-hidden text-white" >
            <div className="mx-auto max-w-[58rem] text-center">
                <p className="text-center text-pink-600 mb-4 font-bold font-mono text-xl">What the Special</p>
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl gradient-title">Want to boost your business growth? Solution is here</h2>
                <p className="mt-4 text-muted-foreground sm:text-lg">
                    Discover how Bazaar Digital can transform your business with our innovative technologies.
                </p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -100, x: -100 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                {features1.map((feature) => (
                    <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-transparent p-8">
                        <div className="flex items-center gap-4">
                            <feature.icon className="h-8 w-8" />
                            <h3 className="font-bold">{feature.name}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100, x: 100 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                {features2.map((feature) => (
                    <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-transparent p-8">
                        <div className="flex items-center gap-4">
                            <feature.icon className="h-8 w-8" />
                            <h3 className="font-bold">{feature.name}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </motion.div>
        </motion.section>
    )
}

