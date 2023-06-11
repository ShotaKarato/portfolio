import { useCallback, useState } from "react";
import { Project } from "../types";

export const useSelectedProject = (projects: Project[]) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = useCallback(
    (title: string) => {
      const matchingProject =
        projects.find((prj) => prj.title === title) ?? null;
      setSelectedProject(matchingProject);
    },
    [projects, setSelectedProject]
  );

  return {
    selectedProject,
    handleProjectSelect,
  };
};
