import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Drum',
    image: '/d1.png',
    video:
      'https://player.vimeo.com/video/1043586176?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Drum'],
  },
  {
    id: '2',
    title: 'Piano',
    image: '/d2.png',
    video:
      'https://player.vimeo.com/video/1043586303?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Piano'],
  },
  {
    id: '3',
    title: 'Guitar',
    image: '/d3.png',
    video:
      'https://player.vimeo.com/video/1043586253?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Guitar'],
  },
  {
    id: '4',
    title: 'Bb Trumpet',
    image: '/d4.png',
    video:
      'https://player.vimeo.com/video/1043588437?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Brass'],
  },
  {
    id: '5',
    title: 'Bamboo flute',
    image: '/d5.png',
    video:
      'https://player.vimeo.com/video/1043586152?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Woodwind'],
  },
  {
    id: '6',
    title: 'Erhu',
    image: '/d6.png',
    video:
      'https://player.vimeo.com/video/1043586242?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['String'],
  },
  {
    id: '7',
    title: 'Pianika',
    image: '/d7.png',
    video:
      'https://player.vimeo.com/video/1043586270?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Piano'],
  },
  {
    id: '8',
    title: 'Recorder',
    image: '/d8.png',
    video:
      'https://player.vimeo.com/video/1043586311?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
