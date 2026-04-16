import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { projects } from "@/store/projects/data";
import type { Project } from "@/store/projects/types";
import FadeIn from "./FadeIn";

type Props = { project: Project };

export function RelatedProjects({ project }: Props) {
  const t = useTranslations("projects");

  return (
    <>
      <FadeIn intersect className="my-16 pl-6">
        <span className="w-full h-0.5 bg-black dark:bg-slate-600 block"></span>
      </FadeIn>

      <section className="flex flex-col md:flex-row px-6 md:space-x-5">
        {project.related?.map((project, idx) => (
          <article key={project.slug} className="project md:w-full md:justify-between">
            <div className="text-3xl font-semibold pr-6 dark:text-[#f1f1f1]">
            <FadeIn intersect delay={idx * 100 + 200}>
              <Link href={`/projects/${project.slug}`}>
                <div className="flex md:flex-row md:w-full justify-between">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="text-sm uppercase font-light tracking-wider pt-2 py-4">
                      {projects.find((p) => p.slug === project.slug)?.category?.name || ""}
                    </p>
                  </div>
                </div>
              </Link>
              </FadeIn>
            </div>
            <div className="pb-6 overflow-hidden w-full">
              <FadeIn intersect delay={idx * 100 + 300} className="overflow-hidden w-full md:justify-end border border-slate-300 dark:border-slate-600"  >
                <Link href={`/projects/${project.slug}`} className="project-thumb-wrap overflow-hidden w-full md:justify-end">
                  <div className="w-full transition-transform duration-500 ease-in-out transform group">
                    <Image
                      src={projects.find((p) => p.slug === project.slug)?.images?.thumbnail || ""}
                      alt={project.title}
                      width={900}
                      height={600}
                      className="w-full"
                      aria-label="Project thumbnail"
                      title={project.title || ""}
                    />
                  </div>
                </Link>
              </FadeIn>
            </div>
          </article>
        ))}
      </section>

      <div
        id="projects"
        className="py-6 text-center text-xl dark:text-slate-600 "
      >
        {t("more")} {"  "}
        <Link href="/projects#projects" className="dark:text-slate-100 border-b-2 border-slate-300 dark:border-slate-600 hover:border-neutral-100 dark:hover:border-neutral-100 font-bold">
          <span className="lnk">{t("title")}</span>
        </Link>
      </div>
    </>
  );
}
