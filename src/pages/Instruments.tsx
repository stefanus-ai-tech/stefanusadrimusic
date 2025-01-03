import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Drum',
    image: '/d1.png',
    video: '',
    categories: ['Classical', 'Solo'],
  },
  {
    id: '2',
    title: 'String Quartet',
    image: '/d2.png',
    video: '',
    categories: ['Ensemble'],
  },
  {
    id: '2',
    title: 'String Quartet',
    image: '/d3.png',
    video: '',
    categories: ['Ensemble'],
  },
  {
    id: '2',
    title: 'String Quartet',
    image: '/d4.png',
    video: '',
    categories: ['Ensemble'],
  },
  {
    id: '2',
    title: 'String Quartet',
    image: '/d5.png',
    video: '',
    categories: ['Ensemble'],
  },
  {
    id: '2',
    title: 'String Quartet',
    image: '/d6.png',
    video: '',
    categories: ['Ensemble'],
  },
  {
    id: '2',
    title: 'String Quartet',
    image: '/d7.png',
    video: '',
    categories: ['Ensemble'],
  },
];

const Instruments = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Production</h1>
      <PortfolioGrid
        projects={projects.map((project) => ({
          ...project,
          renderItem: (
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src={project.image}
                  alt={project.title}
                  className="cursor-pointer hover:opacity-80 transition-opacity w-full h-full object-cover"
                />
              </DialogTrigger>
              <DialogContent className="max-w-[800px]">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src={project.video}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    title={project.title}></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </DialogContent>
            </Dialog>
          ),
        }))}
        categories={['Drum', 'Piano', 'Guitar', 'String', 'Brass', 'Woodwind']}
      />
    </div>
  );
};

export default Instruments;
