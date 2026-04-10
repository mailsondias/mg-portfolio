"use client";

import { createContext, useContext, useMemo } from "react";
import { projects } from "./data";
import type { Project } from "./types";

type ProjectsContextValue = {
  projects: Project[];
  featured: Project[];
};

const ProjectsContext = createContext<ProjectsContextValue | null>(null);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo<ProjectsContextValue>(
    () => ({
      projects: projects,
      featured: projects.filter((project) => project.featured),
    }),
    []
  );

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used within ProjectsProvider");
  return ctx;
}
