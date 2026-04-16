import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/store/projects/data";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <div className="max-w-[1600px] mx-auto w-full">
      <section
        className=" leading-none p-8 dark:text-[#f1f1f1]"
      >
        <div className="pb-[2%] md:pt-24 relative">
          <div className="relative w-full pr-8 sm:pr-0 font-medium">
            <FadeIn delay={t("title").length * 40 + 200} className="mt-6">
              <p className="font-medium text-4xl tracking-tight capitalize">
                {t("title")}
              </p>
            </FadeIn>
            <FadeIn
              delay={t("title").length * 40 + 400}
              className="mt-6 flex text-zinc-500 dark:text-slate-600"
            >
              <Link href="#projects">
                <ArrowLongDownIcon className="size-8 sm:size-12" aria-hidden />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="projects" className="pl-8">
        <div className="my-20">
          <span className="w-full h-0.5 bg-black dark:bg-slate-600 block "></span>
        </div>

        {/* <div className="font-light space-x-4 mb-14">
          <Filter />
        </div> */}

        <div className="flex flex-col gap-x-8 space-y-20 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {
            projects.map((project, idx) => (
              <article key={project.id} className="project">
                <div className="text-3xl font-semibold md:pr-4 dark:text-[#f1f1f1]">
                  <FadeIn intersect delay={idx * 100 + 200}>
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
                  {/* <div className="mt-6 text-base font-light hidden md:block">
                    {project.stack.map((value, idx2) => (
                      <FadeIn
                        key={value}
                        intersect
                        delay={idx2 * 50 + 200}
                        as="h5"
                        className="text-md font-text mb-2 mr-1 py-1 px-3 border-2 border-slate-300 dark:border-slate-600 inline-block"
                      >
                        {value}
                      </FadeIn>
                    ))}
                  </div> */}
                </div>
                <FadeIn
                  intersect
                  className="overflow-hidden w-full md:justify-end border border-slate-300 dark:border-slate-600"
                >
                  <Link href={`/projects/${project.slug}`} className="project-thumb-wrap overflow-hidden w-full md:justify-end">
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
              // <article
              //   key={project.id}
              //   className="project sm:w-full sm:justify-between dark:text-[#f1f1f1]"
              // >
              //   <div className="text-3xl font-semibold pr-6">
              //     <Link href={`/projects/${project.slug}`}>
              //       <div className="flex md:flex-row md:w-full justify-between">
              //         <div>
              //           <h3>{project.title}</h3>
              //           <p className="text-sm uppercase font-light tracking-wider pt-2 py-4">
              //             {project.category.name}
              //           </p>
              //         </div>
              //         <div>
              //           <svg
              //             xmlns="http://www.w3.org/2000/svg"
              //             fill="none"
              //             viewBox="0 0 24 24"
              //             strokeWidth="1.5"
              //             stroke="currentColor"
              //             className="w-10 h-10"
              //             aria-label="Arrow right icon"
              //             aria-hidden
              //           >
              //             <path
              //               strokeLinecap="round"
              //               strokeLinejoin="round"
              //               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              //             />
              //           </svg>
              //         </div>
              //       </div>
              //     </Link>
              //   </div>
              //   <div
              //     className="
              //     overflow-hidden w-full h-[70vw]
              //     sm:h-[35vw]
              //     md:justify-end md:h-[40vh]"
              //   >
              //     <Link href={`/projects/${project.slug}`}>
              //       <Image
              //         src={project.images.thumbnail}
              //         alt={project.title}
              //         width={900}
              //         height={600}
              //         aria-label="Project thumbnail"
              //         title={project.title}
              //         className="w-full transition-all duration-500 ease-in-out transform hover:scale-105"
              //       />
              //     </Link>
              //   </div>
              // </article>
            ))}
        </div>
      </section>
    </div>
  );
}
