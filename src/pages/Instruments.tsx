import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Piano Composition',
    image: '/placeholder.svg',
    categories: ['Classical', 'Solo'],
  },
  {
    id: '2',
    title: 'String Quartet',
    image: '/placeholder.svg',
    categories: ['Ensemble'],
  },
];

const categories = [
  'Piano',
  'Strings',
  'Woodwinds',
  'Brass',
  'Percussion',
  'Ensemble',
  'Solo',
];

const Instruments = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Instruments</h1>
      <PortfolioGrid projects={projects} categories={categories} />
    </div>
  );
};

export default Instruments;
