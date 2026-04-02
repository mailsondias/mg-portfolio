import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const resume = {
		name: t("about.resume.name"),
		link: t("about.resume.url"),
	};

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
				"React",
				"Next",
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
				"Vue",
				"Nuxt",
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

  const arrExpertise = [
		{
			role: t("about.expertise.developer.title"),
			description: t("about.expertise.developer.description"),
		},
		{
			role: t("about.expertise.engineer.title"),
			description: t("about.expertise.engineer.description"),
		},
	];

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
        className="flex flex-1 flex-col justify-center px-6 py-2"
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="text-left text-[10vw] font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-[8vw] lg:pr-[10vw] lg:text-[6vw] xl:text-8xl xl:pr-7xl"
        >
          {t("headline")}
        </h1>
        <div
          className="mt-10 flex text-zinc-500 dark:text-zinc-400"
          aria-hidden
        >
          <ArrowLongDownIcon className="size-8 sm:size-10" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="px-6 py-16 sm:py-24"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-[1600px] flex items-start justify-between">
          <div className="flex flex-col">
            <h3
              id="about-heading"
              className="text-left lowercase font-bold text-4xl font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-600"
            >
              {t("about.title")}
            </h3>
            <div className="flex flex-col gap-3 mt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                aria-label="LinkedIn"
              >
                <svg
                  className="size-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                aria-label="GitHub"
              >
                <svg
                  className="size-7"
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
          </div>
          <div className="flex flex-col items-start max-w-1/2 md:max-w-2/3 gap-2">
            <small className="uppercase font-mono text-xs text-zinc-500 dark:text-zinc-400">{t("about.copyright")}</small>
            <p className="text-left text-3xl font-mono leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
              {t("about.description")}
            </p>

            {/* Skills */}
            <details className="mt-4 mb-4">
              <summary className="font-bold text-lg mb-6 cursor-pointer lowercase w-auto pb-1 leading-none  hover:text-zinc-950 dark:hover:border-white dark:hover:text-white">
                <span className="border-b-2 hover:border-zinc-900 dark:border-zinc-700 border-[#ddd] pb-1">{t("about.skills.button")}</span>
              </summary>
              <ul className="space-x-1 space-y-4">
                {arrSkills.map((arrSkill, index) => (
                  <li key={arrSkill.skills.join(",")} className="inline-block space-y-1">
                    {arrSkill.skills.map((skillItem, idx) => (
                      <h5
                        key={skillItem}
                        className={cn(
                          "text-md font-text py-1 px-3 border-2 border-slate-300 dark:border-slate-600 inline-block ml-1 dark:text-[#f1f1f1]",
                          (index === 0 && (idx === 0 || idx === 1 || idx === 2 || idx === 3) ||
                          (index === 1 && (idx === 0 || idx === 1)) ||
                          (index === 2 && (idx === 0 || idx === 1))) && "dark:bg-slate-700",
                        )}
                      >
                        {skillItem}
                      </h5>
                    ))}
                  </li>
                ))}
              </ul>
            </details>

            {/* Expertise */}
            <details className="mb-4">
              <summary className="font-bold text-lg mb-6 cursor-pointer lowercase w-auto pb-1 leading-none  hover:text-zinc-950 dark:hover:border-white dark:hover:text-white">
                <span className="border-b-2 hover:border-zinc-900 dark:border-zinc-700 border-[#ddd] pb-1">{t("about.expertise.button")}</span>
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
            </details>
            
            {/* Experience */}
            <details className="mb-4">
              <summary className="font-bold text-lg mb-6 cursor-pointer lowercase w-auto pb-1 leading-none  hover:text-zinc-950 dark:hover:border-white dark:hover:text-white">
                <span className="border-b-2 hover:border-zinc-900 dark:border-zinc-700 border-[#ddd] pb-1">{t("about.experience.button")}</span>
              </summary>
              <ul className="space-x-1 space-y-4">
                {arrExperiences.map((experience, index) => (
                  <div
											key={experience.role}
											className={cn("border-2 border-slate-300 dark:border-slate-600 -ml-1 p-4 mb-4 dark:text-[#f1f1f1]", index === 0 && "dark:bg-slate-700")}
										>
											<h3 className="text-2xl font-text font-semibold mb-2">
												{experience.role}
											</h3>
											<p className="text-sm mb-4">
												{experience.company}{" "}
												<span className="pl-5 text-[10px]">
													{experience.period.start} &nbsp;{" "}
													{experience.period.end}
												</span>
											</p>
											<p className="text-lg">{experience.description}</p>
										</div>
                ))}
              </ul>
            </details>

            {/* Resume */}
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
    </div>
  );
}
