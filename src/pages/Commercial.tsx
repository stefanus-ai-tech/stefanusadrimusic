import { PortfolioGrid } from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Tech Startup Ad',
    image: '/placeholder.svg',
    categories: ['Corporate', 'Tech'],
  },
  {
    id: '2',
    title: 'Fashion Campaign',
    image: '/placeholder.svg',
    categories: ['Lifestyle', 'Fashion'],
  },
];

const categories = [
  'Corporate',
  'Tech',
  'Lifestyle',
  'Fashion',
  'Automotive',
  'Food & Beverage',
  'Retail',
];

const Commercial = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Commercial</h1>
      <PortfolioGrid projects={projects} categories={categories} />
    </div>
  );
};

export default Commercial;
