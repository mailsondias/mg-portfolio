import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ExperienceList } from "./ExperienceList";
import FadeIn from "./FadeIn";

export function AboutSection() {
  const t = useTranslations("Home");

  // const resume = {
  //   name: t("about.resume.name"),
  //   link: t("about.resume.url"),
  // };

  const arrSkills = [
    {
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "jQuery",
        "SASS",
        "Tailwind",
        "BEM",
        "CSS-Modules",
        "Styled-components",
        "Shadcn-UI",
        "Material-UI",
        "Ant-Design",
      ],
    },
    {
      skills: [
        "React.JS",
        "Next.JS",
        "Context-API",
        "Redux-Toolkit",
        "TanStack-Query",
        "Zustand",
        "React-Hook-Form",
        "Zod",
        "SSR",
      ],
    },
    {
      skills: [
        "Vue.JS",
        "Nuxt.JS",
        "Vuex",
        "Pinia",
        "Script-Setup",
        "Composition-API",
        "Vuetify",
      ],
    },
    {
      skills: [
        "Jest",
        "Vitest",
        "Cypress",
        "Playwright",
        "Vue-Test-Library",
        "React-Test-Library",
      ],
    },
    // {
    // 	skills: ["Node", "WordPress", "ACF", "MySQL", "NoSQL", "Firebase"],
    // },
    {
      skills: [
        "Storybook",
        "Responsive Design",
        "Mobile First",
        "Pixel perfect",
        "REST API",
        "SEO",
        "GIT",
        "SCRUM",
        "Figma",
        "Photoshop",
      ],
    },
  ];

  // const arrExpertise = [
  //   {
  //     role: t("about.expertise.developer.title"),
  //     description: t("about.expertise.developer.description"),
  //   },
  //   {
  //     role: t("about.expertise.engineer.title"),
  //     description: t("about.expertise.engineer.description"),
  //   },
  // ];

  const arrExperiences = [
    {
      role: "Front-end / Full-stack Developer",
      company: "Morfeu Lab",
      period: {
        start: "03.2015",
        end: "current",
      },
      description: t("about.experience.morfeu.description"),
    },
    {
      role: "Senior/Master Front-end",
      company: t("about.experience.camara.company"),
      period: {
        start: "06.2024",
        end: "current",
      },
      description: t("about.experience.camara.description"),
    },
    {
      role: "Senior Front-end",
      company: "Mercado Bitcoin - Bycoders",
      period: {
        start: "01.2024",
        end: "08.2024",
      },
      description: t("about.experience.cadmus.description"),
    },
    {
      role: "Senior Front-end",
      company: "Singulare | Log-in Logística - Cadmus",
      period: {
        start: "03.2023",
        end: "08.2024",
      },
      description: t("about.experience.cadmus.description"),
    },
    {
      role: "Front-end Engineer",
      company: "Atlas Technologies",
      period: {
        start: "06.2022",
        end: "01.2024",
      },
      description: t("about.experience.atlas.description"),
    },
    {
      role: "Front-end Developer",
      company: "Caixa Seguros - Digital Group",
      period: {
        start: "03.14",
        end: "02.15",
      },
      description: t("about.experience.digital.description"),
    },
    {
      role: "Web / Full-stack Developer",
      company: "Pepper Interactive",
      period: {
        start: "03.10",
        end: "02.14",
      },
      description: t("about.experience.pepper.description"),
    },
    {
      role: "Web / Full-stack Developer",
      company: "Brclick Digital Solutions",
      period: {
        start: "09.07",
        end: "02.10",
      },
      description: t("about.experience.brclick.description"),
    },
  ];

  return (
    <section
      id="about"
      className="px-6 py-6 md:py-12 md:pt-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1600px] flex flex-col lg:flex-row items-start justify-between">
        <div className="flex flex-col gap-4 w-full">
          <FadeIn intersect>
            <h3
              id="about-heading"
              className="text-right md:text-left lowercase font-bold text-2xl font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              {t("about.title")}
            </h3>
          </FadeIn>
        </div>
        <div className="flex flex-col items-start max-w-full lg:max-w-1/2 lg:pr-32 gap-2">
          <FadeIn intersect className="w-full">
            <small className="uppercase font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-4 mb-4 text-right w-full">
              {t("about.copyright")}
            </small>
          </FadeIn>
          <FadeIn intersect>
            <p className="text-left text-3xl font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
              {t("about.description")}
            </p>
          </FadeIn>

          {/* Skills */}
          <details open className="mt-4 mb-4">
            <summary className="font-bold text-lg mb-6 cursor-pointer lowercase w-auto pb-1 leading-none dark:hover:text-white hover:text-zinc-950">
              <span className="border-b-2 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-white dark:hover:text-white border-[#ddd] pb-1">
                {t("about.skills.button")}
              </span>
            </summary>
            <ul className="space-x-1 space-y-4">
              {(() => {
                let flat = 0;
                return arrSkills.map((arrSkill, index) => (
                  <li
                    key={arrSkill.skills.join(",")}
                    className="inline-block space-y-1 last:mb-8"
                  >
                    {arrSkill.skills.map((skillItem, idx) => {
                      const i = flat++;
                      return (
                        <FadeIn
                          key={skillItem}
                          intersect
                          delay={i * 35}
                          as="h5"
                          className={cn(
                            "text-md font-text py-1 px-3 border-2 border-slate-300 dark:border-slate-600 inline-block ml-1 dark:text-[#f1f1f1]",
                            ((index === 0 &&
                              (idx === 0 ||
                                idx === 1 ||
                                idx === 2 ||
                                idx === 3)) ||
                              (index === 1 && (idx === 0 || idx === 1)) ||
                              (index === 2 && (idx === 0 || idx === 1))) &&
                              "bg-slate-200 dark:bg-slate-700",
                          )}
                        >
                          {skillItem}
                        </FadeIn>
                      );
                    })}
                  </li>
                ));
              })()}
            </ul>
          </details>

          {/* Expertise */}
          {/* <details className="mb-4">
              <summary className="font-bold text-lg mb-6 cursor-pointer lowercase w-auto pb-1 leading-none  hover:text-zinc-950 dark:hover:border-white dark:hover:text-white">
                <span className="border-b-2 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-white dark:hover:text-white border-[#ddd] pb-1">
                  {t("about.expertise.button")}
                </span>
              </summary>
              <ul className="space-x-1 space-y-4">
                {arrExpertise.map((expertise) => (
                  <div
                    key={expertise.role}
                    className="border-2 border-slate-300 dark:border-slate-600 -ml-1 p-4 mb-4 dark:text-[#f1f1f1]"
                  >
                    <h3 className="text-2xl font-text font-semibold mb-2">
                      {expertise.role}
                    </h3>
                    <p className="text-lg">{expertise.description}</p>
                  </div>
                ))}
              </ul>
            </details> */}

          {/* Experience */}
          <FadeIn intersect>
            <ExperienceList
              experiences={arrExperiences}
              label={t("about.experience.button")}
            />
          </FadeIn>

          {/* Resume */}
          <FadeIn intersect>
            <p className="mb-4">
              <Link
                href={t("about.resume.url")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg cursor-pointer lowercase border-b-2 border-[#ddd] pb-1 leading-none hover:border-zinc-900 dark:border-zinc-700 hover:text-zinc-950 dark:hover:border-white dark:hover:text-white"
              >
                {t("about.resume.button")}
              </Link>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
