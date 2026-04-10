"use client";

import { useRef, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { cn } from "@/lib/utils";

type Experience = {
  role: string;
  company: string;
  period: { start: string; end: string };
  description: string;
};

type Props = {
  experiences: Experience[];
  label: string;
};

export function ExperienceList({ experiences, label }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [runKey, setRunKey] = useState(0);

  const handleToggle = () => {
    if (detailsRef.current?.open) {
      setRunKey((k) => k + 1);
    }
  };

  return (
    <details ref={detailsRef} onToggle={handleToggle} className="mb-4">
      <summary className="font-bold text-lg mb-6 cursor-pointer lowercase w-auto pb-1 leading-none hover:text-zinc-950 dark:hover:border-white dark:hover:text-white">
        <span className="border-b-2 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-white dark:hover:text-white border-[#ddd] pb-1">
          {label}
        </span>
      </summary>
      <ul className="space-x-1 space-y-4">
        {experiences.map((experience, index) => (
          <FadeIn key={`${runKey}-${index}`} delay={index * 80} as="li">
            <div
              className={cn(
                "border-2 border-slate-300 dark:border-slate-600 -ml-1 p-4 dark:text-[#f1f1f1]",
                index === 0 && "dark:bg-slate-700",
              )}
            >
              <h3 className="text-2xl font-text font-semibold mb-2">
                {experience.role}
              </h3>
              <p className="text-sm mb-4">
                {experience.company}{" "}
                <span className="pl-5 text-[10px]">
                  {experience.period.start} &nbsp; {experience.period.end}
                </span>
              </p>
              <p className="text-lg">{experience.description}</p>
            </div>
          </FadeIn>
        ))}
      </ul>
    </details>
  );
}
