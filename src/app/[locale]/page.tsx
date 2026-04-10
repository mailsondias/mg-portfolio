import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ExperienceList } from "@/components/ExperienceList";
import FadeIn from "@/components/FadeIn";
import FeaturedProjects from "@/components/FeaturedProjects";
import TypewriterText from "@/components/TypewriterText";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

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
    <div
      className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col bg-background font-sans transition-colors duration-200 ease-out dark:bg-background"
      suppressHydrationWarning
    >
      {/* Hero Section */}
      <section
        className="flex flex-row items-end justify-between px-6 py-2 h-[98dvh] relative"
        aria-labelledby="hero-heading"
      >
        <div className="flex flex-col justify-center h-full w-4/3">
          <h1
            id="hero-heading"
            className="text-left text-[9vw] font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-[8vw] lg:pr-[10vw] lg:text-[6vw] xl:text-8xl xl:pr-7xl"
          >
            <TypewriterText text={t("headline")} speed={40} />
          </h1>
          <FadeIn
            delay={t("headline").length * 40 + 200}
            className="mt-10 flex text-zinc-500 dark:text-slate-600"
          >
            <ArrowLongDownIcon className="size-8 sm:size-16" aria-hidden />
          </FadeIn>
        </div>

        <FadeIn
          delay={t("headline").length * 40 + 600}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-4 mt-2">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start rounded-full text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 gap-2"
              aria-label="LinkedIn"
            >
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start rounded-full text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 gap-2"
              aria-label="GitHub"
            >
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>

        {/* <div className="flex items-end justify-end h-full absolute right-0 bottom-0">
          <Image
            src="/image2.png"
            alt="Mailson Guimarães"
            width={320}
            height={420}
            className="object-contain object-bottom opacity-80 mix-blend-multiply dark:mix-blend-luminosity"
            priority
          />
        </div> */}
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="px-6 py-16 sm:py-12"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-[1600px] flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <FadeIn intersect>
              <h3
                id="about-heading"
                className="text-left lowercase font-bold text-2xl font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                {t("about.title")}
              </h3>
            </FadeIn>
          </div>
          <div className="flex flex-col items-start max-w-1/2 md:max-w-1/2 md:pr-32 gap-2">
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
                      className="inline-block space-y-1"
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
                                "dark:bg-slate-700",
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

      {/* Projects Section */}
      <section id="projetos" className="px-6 py-16 sm:py-24">
        <FadeIn intersect>
          <h3 className="text-left lowercase font-bold text-2xl font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">
            {t("projects.title")}
          </h3>
          <p className="block my-2 text-xs uppercase tracking-wide dark:text-slate-600">
            {t("projects.tagline")}
          </p>
        </FadeIn>

        <FeaturedProjects />
      </section>
    </div>
  );
}
