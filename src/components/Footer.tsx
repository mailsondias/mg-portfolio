import { ArrowLongUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="max-w-[1600px] mx-auto w-full">
      <FadeIn intersect className="my-10 pl-10">
        <span className="w-full h-0.5 bg-black dark:bg-slate-600 block"></span>
      </FadeIn>

      <section id="contact" className="py-10 mb-[10%] px-10 font-regular">
        <div className="w-full md:flex md:flex-row md:justify-between flex flex-col-reverse">
          <div className="mt-6 sm:mt-0">
            <FadeIn intersect>
              <h1 className="text-[10vw] md:text-5xl sm:text-[7vw] relative dark:text-[#f1f1f1] leading-none">
                {t("social")}
              </h1>
            </FadeIn>
            <FadeIn intersect delay={150} className="md:flex md:flex-row pt-4 md:pt-10 md:pl-10 gap-4">
              <Link
                href="mailto:mailsondg@gmail.com"
                target="_blank"
                className="inline-flex items-center justify-start rounded-full text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 gap-2"
                aria-label="Email"
                rel="noopener noreferrer"
              >
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mailsondg/"
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
                href="https://github.com/mailsondg"
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
              <Link
                href="https://wa.me/5561998369597"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-start rounded-full text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 gap-2"
                aria-label="WhatsApp"
              >
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5.1-3.7-10.6-6.5z" />
                </svg>
              </Link>
            </FadeIn>
          </div>
          <FadeIn intersect className="text-right pl-10 sm:pr-20 dark:text-[#f1f1f1] sm:w-auto">
            <p className="sm:pl-20 text-2xl">{t("offer")}</p>
          </FadeIn>
        </div>
      </section>

      <FadeIn intersect className="float-right">
        <a href="#top">
          <ArrowLongUpIcon className="size-8 sm:size-10 dark:text-zinc-300" />
        </a>
      </FadeIn>
    </footer>
  );
}
