import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Sanghamitta',
    image: '/b1.png',
    video:
      'https://player.vimeo.com/video/1043512489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Religious'],
  },
  {
    id: '2',
    title: 'Artsensei1',
    image: '/b2.png',
    video:
      'https://player.vimeo.com/video/1043512459?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Art'],
  },
  {
    id: '3',
    title: 'Artsensei2',
    image: '/b3.png',
    video:
      'https://player.vimeo.com/video/1043512468?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Art'],
  },
  {
    id: '4',
    title: 'Warefleet',
    image: '/b4.png',
    video:
      'https://player.vimeo.com/video/1043513042?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Corporate'],
  },
];

const SFX = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">SFX</h1>
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
        categories={['Religious', 'Art', 'Corporate']}
      />
    </div>
  );
};

export default SFX;
