import { PortfolioGrid } from "@/components/PortfolioGrid";

const projects = [
  {
    id: "1",
    title: "Asura Wrath",
    image: "/placeholder.svg",
    categories: ["Action", "Game"],
  },
  {
    id: "2",
    title: "Taxi Driver",
    image: "/placeholder.svg",
    categories: ["Cinematic"],
  },
  // Add more projects as needed
];

const categories = ["Action", "Horror", "Cinematic", "Game", "Disney", "Japan Style", "Jazz"];

const FilmScoring = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Film Scoring</h1>
      <PortfolioGrid projects={projects} categories={categories} />
    </div>
  );
};

export default FilmScoring;