import { useCallback, useState } from "react";
import { Project } from "../types";

export const useSelectedProject = (projects: Project[]) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = useCallback(
    (id: number) => {
      const matchingProject = projects.find((prj) => prj.id === id) ?? null;
      setSelectedProject(matchingProject);
    },
    [projects, setSelectedProject]
  );

  return {
    selectedProject,
    handleProjectSelect,
  };
};
