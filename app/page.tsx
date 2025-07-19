// file: app/page.tsx

import ProjectCard from "@/components/ProjectCard";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

// Tipe data untuk proyek kita
interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

// Fungsi untuk mengambil data dari Sanity
async function getProjects() {
  const query = groq`*[_type == "project"]{
    _id,
    title,
    description,
    "imageUrl": projectImage.asset->url,
    tags,
    link
  }`;

  return client.fetch<Project[]>(query);
}

export default async function Home() {
  // Ambil data proyek langsung di server
  const projectsData = await getProjects();

  return (
    <main>
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center p-4">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Halo, saya <span className="text-blue-600">NamaAnda</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Seorang Web Developer yang bersemangat dalam menciptakan aplikasi web
            yang modern, cepat, dan fungsional.
          </p>
          <a href="#projects" className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Lihat Karya Saya
          </a>
        </div>
      </section>

      {/* Bagian Proyek */}
      <section id="projects" className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Karya Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}