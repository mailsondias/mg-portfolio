"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";
import { useProjects } from "@/store/projects";

export default function FeaturedProjects() {
  const t = useTranslations("projects");
  const { featured } = useProjects();

  return (
    <section id="projects" className="px-6 py-16 md:py-24">
        <FadeIn intersect>
          <h3 className="text-right md:text-left lowercase font-bold text-2xl font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">
            {t("title")}
          </h3>
          <p className="block my-2 text-right md:text-left text-xs uppercase tracking-wide dark:text-slate-600">
            {t("tagline")}
          </p>
        </FadeIn>

        <div className="mt-10 space-y-10">
          {featured.map((project) => (
            <div key={project.id}>
              <article className="project mb-10 md:flex md:flex-row md:w-full md:h-[400px] md:justify-between lg:h-[600px]">
                <div className="text-3xl font-semibold max-w-[320px] md:w-1/2 md:pr-4 dark:text-[#f1f1f1]">
                  <FadeIn intersect>
                    <Link href={`/projects/${project.slug}`}>
                      <div className="flex md:flex-row md:w-full justify-between">
                        <div className="pr-10">
                          <h3>{project.title}</h3>
                          <p className="text-sm uppercase font-light tracking-wider pt-4 py-4">
                            {project.category.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                  <div className="mt-6 text-base font-light hidden md:block">
                    {project.stack.map((value, idx) => (
                      <FadeIn
                        key={value}
                        intersect
                        delay={idx * 50}
                        as="h5"
                        className="text-md font-text mb-2 mr-1 py-1 px-3 border-2 border-slate-300 dark:border-slate-600 inline-block"
                      >
                        {value}
                      </FadeIn>
                    ))}
                  </div>
                </div>
                <FadeIn
                  intersect
                  className="overflow-hidden w-full h-[70vw] md:h-full md:w-2/3 md:justify-end border border-slate-300 dark:border-slate-600"
                >
                  <Link href={`/projects/${project.slug}`} className="project-thumb-wrap">
                    <div className="w-full transition-transform duration-500 ease-in-out transform group">
                      <Image
                        src={project.images.thumbnail}
                        alt={project.title}
                        width={900}
                        height={600}
                        className="w-full"
                        aria-label="Project thumbnail"
                        title={project.title}
                      />
                    </div>
                  </Link>
                </FadeIn>
              </article>
            </div>
          ))}
        </div>
        <div className="py-10 text-center text-xl dark:text-slate-600">
          {t("more")}{" "}
          <Link href="/projects" className="ml-2 ">
            <span className="text-zinc-900 dark:text-neutral-100 border-b-2 border-slate-300 dark:border-slate-600 hover:border-neutral-100 dark:hover:border-neutral-100 font-bold">{t("title")}</span>
          </Link>
        </div>
    </section>
  );
}
