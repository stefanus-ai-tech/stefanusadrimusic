import { PortfolioGrid } from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'City Ambience',
    image: '/placeholder.svg',
    categories: ['Urban', 'Background'],
  },
  {
    id: '2',
    title: 'Sci-Fi Effects',
    image: '/placeholder.svg',
    categories: ['Futuristic', 'Technology'],
  },
];

const categories = [
  'Urban',
  'Nature',
  'Technology',
  'Futuristic',
  'Background',
  'Foley',
  'Impact',
];

const SFX = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">SFX</h1>
      <PortfolioGrid projects={projects} categories={categories} />
    </div>
  );
};

export default SFX;
