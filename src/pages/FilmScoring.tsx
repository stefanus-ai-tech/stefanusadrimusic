import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Asura Wrath',
    image: '../public/3.png',
    video: '../public/Zahar_Lupin_1.mp4',
    categories: ['Action', 'Game'],
  },
  {
    id: '2',
    title: 'Taxi Driver',
    image: '../public/4.png',
    video: '../public/Zahar_Lupin_1.mp4',
    categories: ['Cinematic'],
  },
  // Add more projects as needed
];

const categories = [
  'Action',
  'Horror',
  'Cinematic',
  'Game',
  'Disney',
  'Japan Style',
  'Jazz',
];

const FilmScoring = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Film Scoring</h1>
      <div className="mb-12"></div>
      <PortfolioGrid projects={projects} categories={categories} />
    </div>
  );
};

export default FilmScoring;
