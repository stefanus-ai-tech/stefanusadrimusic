import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Drum',
    image: '/d1.png',
    video:
      'https://www.youtube.com/embed/OM2pFxH1e9E?si=A-C0N45Hp60UcEmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Drum'],
  },
  {
    id: '2',
    title: 'Piano',
    image: '/d2.png',
    video: 'https://www.youtube.com/embed/w5B_9wSUcKE',
    categories: ['Piano'],
  },
  {
    id: '3',
    title: 'Guitar',
    image: '/d3.png',
    video: 'https://www.youtube.com/embed/XWGM_3IWTrs',
    categories: ['Guitar'],
  },
  {
    id: '4',
    title: 'Bb Trumpet',
    image: '/d4.png',
    video: 'https://www.youtube.com/embed/vJ7t08tthKk',
    categories: ['Brass'],
  },
  {
    id: '5',
    title: 'Bamboo flute',
    image: '/d5.png',
    video: 'https://www.youtube.com/embed/LYkM1kCe_uc',
    categories: ['Woodwind'],
  },
  {
    id: '6',
    title: 'Erhu',
    image: '/d6.png',
    video: 'https://www.youtube.com/embed/ZEXBBhImpqw',
    categories: ['String'],
  },
  {
    id: '7',
    title: 'Pianika',
    image: '/d7.png',
    video:
      'https://www.youtube.com/embed/4eWNq8WamH0?si=lq7bozx3h4zagbnp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Piano'],
  },
  {
    id: '8',
    title: 'Recorder',
    image: '/d8.png',
    video: 'https://www.youtube.com/embed/64Nsk6AnkIo',
    categories: ['Woodwind'],
  },
];

const Instruments = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Instruments</h1>
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
