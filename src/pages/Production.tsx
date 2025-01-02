import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Album Production',
    image: '/placeholder.svg',
    categories: ['Music', 'Mixing'],
  },
  {
    id: '2',
    title: 'Podcast Series',
    image: '/placeholder.svg',
    categories: ['Audio', 'Editing'],
  },
];

const categories = [
  'Mixing',
  'Mastering',
  'Editing',
  'Sound Design',
  'Music',
  'Audio',
  'Post-Production',
];

const Production = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Production</h1>
      <PortfolioGrid projects={projects} categories={categories} />
    </div>
  );
};

export default Production;
