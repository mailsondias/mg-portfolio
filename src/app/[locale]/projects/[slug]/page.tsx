
import { notFound } from "next/navigation";
import { RelatedProjects } from "@/components/RelatedProjects";
import SingleProject from "@/components/SingleProject";
import { projects } from "@/store/projects/data";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="max-w-[1600px] mx-auto w-full mt-16">
      <SingleProject project={project} />
      <RelatedProjects project={project} />
    </div>
  );
}
