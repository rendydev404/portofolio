"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, description, imageUrl, tags, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-56">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}