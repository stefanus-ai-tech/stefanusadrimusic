import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: '(Original Song) v3-Dancing Petals',
    image: '/c (1).png',
    video:
      'https://player.vimeo.com/video/1043577437?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Original'],
  },
  {
    id: '2',
    title: 'BT 1',
    image: '/c (2a).png',
    video:
      'https://player.vimeo.com/video/1043577916?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Backing Track'],
  },
  {
    id: '3',
    title: 'BT 2',
    image: '/c (2b).png',
    video:
      'https://player.vimeo.com/video/1043577936?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Backing Track'],
  },
  {
    id: '4',
    title: 'Compro',
    image: '/c (3).png',
    video:
      'https://player.vimeo.com/video/1043577953?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Company Profile'],
  },
  {
    id: '5',
    title: 'Corporate',
    image: '/c (4).png',
    video:
      'https://player.vimeo.com/video/1043577978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Corporate'],
  },
  {
    id: '6',
    title: 'Cover song',
    image: '/c (5).png',
    video:
      'https://player.vimeo.com/video/1043577385?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Cover Song'],
  },
  {
    id: '7',
    title: 'Ori Cli',
    image: '/c (6).png',
    video:
      'https://player.vimeo.com/video/1043579556?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Original'],
  },
  {
    id: '8',
    title: 'Stream',
    image: '/c (7).png',
    video:
      'https://player.vimeo.com/video/1043579586?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Audio', 'Editing'],
  },
];

const Production = () => {
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
        categories={[
          'Backing Track',
          'Company Profile',
          'Corporate',
          'Cover Song',
          'Original',
        ]}
      />
    </div>
  );
};

export default Production;
