import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  image: string;
  video: string;
  categories: string[];
  renderItem?: React.ReactNode;
}

interface PortfolioGridProps {
  projects: Project[];
  categories: string[];
}

const PortfolioGrid = ({ projects, categories }: PortfolioGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProjects = selectedCategory
    ? projects.filter((project) =>
        project.categories.includes(selectedCategory)
      )
    : projects;

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === ''
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setSelectedCategory('')}>
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative aspect-square overflow-hidden rounded-lg">
            {project.renderItem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
