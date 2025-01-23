"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { getImageUrl } from "@/lib/getImageUrl";

interface ProductFeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export function ProductFeatureCard({
  title,
  description,
  imageUrl,
  reverse = false,
}: ProductFeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: reverse ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between gap-8 py-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        whileInView="visible"
        className="w-full md:w-1/2 space-y-4 text-center md:text-left"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
        whileInView="visible"
        className="w-full md:w-1/2"
      >
        <Image
          src={getImageUrl(imageUrl)}
          alt={title}
          width={300}
          height={225}
          className="object-cover rounded-lg w-full"
        />
      </motion.div>
    </div>
  );
}
