import projects from "@/public/projects";
import Image from "next/image";
import Link from "next/link";

import { Github, ExternalLink, ArrowLeft } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find(p => p.link === id);


  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] text-gray-700">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Project not found</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 flex flex-col">
      {/* Top Bar */}
      <header className="w-full border-b border-emerald-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>

      

          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Project Details
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-10">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg">{project.description}</p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-gray-900">Tech Used</h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </main>

      {/* Floating Bottom Bar */}
      <div className="fixed inset-x-0 bottom-0 z-200 pointer-events-none">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-lg">
            <p className="text-sm text-gray-700 truncate">
              Viewing <span className="font-semibold text-emerald-600">{project.title}</span>
            </p>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-emerald-300 text-emerald-700 bg-white hover:bg-emerald-50 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}