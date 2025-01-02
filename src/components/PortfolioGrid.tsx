import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  image: string;
  video?: string;
  categories: string[];
}

interface PortfolioGridProps {
  projects: Project[];
  categories: string[];
}

const PortfolioGrid = ({ projects, categories }: PortfolioGridProps) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProjects =
    selectedCategories.length > 0
      ? projects.filter((project) =>
          selectedCategories.some((category) =>
            project.categories.includes(category)
          )
        )
      : projects;

  const handleVideoClick = (videoUrl: string) => {
    setActiveVideo(activeVideo === videoUrl ? null : videoUrl);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategories.includes(category)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.video && (
                <>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleVideoClick(project.video!)}
                      className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {activeVideo === project.video && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
                      <div className="relative w-full max-w-4xl">
                        <button
                          onClick={() => setActiveVideo(null)}
                          className="absolute -top-8 right-0 text-white hover:text-gray-300">
                          Close
                        </button>
                        <video
                          controls
                          autoPlay
                          className="w-full"
                          onEnded={() => setActiveVideo(null)}>
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 text-sm bg-gray-200 rounded">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
