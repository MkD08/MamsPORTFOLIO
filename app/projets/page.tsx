import type { Metadata } from "next";
import ProjectsCatalog from "./ProjectsCatalog";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez une sélection des projets web, mobiles, e-commerce et API réalisés par Mamadou Dia.",
};
export default function ProjectsPage() {
  return <ProjectsCatalog />;
}
