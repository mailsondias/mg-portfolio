import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Project } from "@/store/projects/types";
import FadeIn from "./FadeIn";

type Props = { project: Project };

export default function SingleProject({ project }: Props) {
  const t = useTranslations("projects");
  const tProject = useTranslations(`project.${project.slug}`);

  return (
    <>
      <section
        className="
          leading-none
          p-8
          dark:text-[#f1f1f1]
        "
      >
        <div className="pb-[2%] md:pt-24 relative">
          <div className="relative w-full pr-8 sm:pr-0 font-medium">
            <FadeIn
              delay={tProject("title").length * 40 + 200}
              className="relative w-full pr-8 sm:pr-0 font-medium flex flex-col gap-5"
            >
              <p className="font-medium text-4xl md:text-6xl tracking-tight capitalize">
                {project.title}
              </p>
            </FadeIn>
            <FadeIn
              delay={tProject("title").length * 40 + 400}
              className="mt-6 flex text-zinc-500 dark:text-slate-600"
            >
              {project.description && (
                <p className="text-lg font-light tracking-wider lg:w-2/3 w-full dark:text-[#f1f1f1]">
                  {tProject("description")}
                </p>
              )}
            </FadeIn>
            <FadeIn
              delay={tProject("title").length * 40 + 600}
              className="mt-6 flex text-zinc-500 dark:text-slate-600"
            >
              <div className="text-base font-light">
                {project.stack.map((stack) => (
                  <h5
                    key={stack}
                    className="text-md font-text mb-2 mr-1 py-1 px-3 border-2 dark:border-slate-600 inline-block dark:text-[#f1f1f1]"
                  >
                    {stack}
                  </h5>
                ))}
              </div>
            </FadeIn>
            <FadeIn
              delay={tProject("title").length * 40 + 800}
              className="mt-6 flex "
            >
              <div className="space-y-2 md:space-y-0 md:space-x-6">
              {
                project.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg lnk block mt-4 md:inline-block border-b-2 border-b-zinc-500 dark:border-b-slate-600 hover:border-b-zinc-900 dark:hover:border-b-white"
                  >
                      {link.name}
                    </Link>
                  ))
                }
              </div>
            </FadeIn>
            <FadeIn
              delay={tProject("title").length * 40 + 400}
              className="mt-6 flex text-zinc-500 dark:text-slate-600"
            >
              <Link href="#project">
                <ArrowLongDownIcon className="size-8 sm:size-12" aria-hidden />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="project" className="pl-8">
        <div className="flex flex-col">
          <div className="project mb-10 flex flex-col w-full h-full md:justify-between">
            <FadeIn
              delay={tProject("title").length * 40 + 800}
              className="overflow-hidden w-full h-full p-2 md:justify-end dark:bg-slate-600"
            >
              <Image src={project.images.project} alt={project.title} width={900} height={600} className="w-full" />
            </FadeIn>
            <FadeIn
              delay={tProject("title").length * 40 + 1000}
              className="mt-6 flex "
            >
              <div className="space-y-2 md:space-y-0 md:space-x-6">
              {
                project.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg lnk block mt-4 md:inline-block border-b-2 border-b-zinc-500 dark:border-b-slate-600 hover:border-b-zinc-900 dark:hover:border-b-white"
                  >
                      {link.name}
                    </Link>
                  ))
                }
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
