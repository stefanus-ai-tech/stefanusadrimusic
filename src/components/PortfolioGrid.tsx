import { useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  image: string;
  categories: string[];
};

type PortfolioGridProps = {
  projects: Project[];
  categories: string[];
};

export const PortfolioGrid = ({ projects, categories }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={cn(
            "px-4 py-2 rounded-full border transition-colors",
            activeCategory === "All"
              ? "bg-wine text-white border-wine"
              : "border-gray-200 hover:border-wine"
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full border transition-colors",
              activeCategory === category
                ? "bg-wine text-white border-wine"
                : "border-gray-200 hover:border-wine"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-square overflow-hidden bg-gray-100 rounded-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="text-white text-xl font-medium">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};