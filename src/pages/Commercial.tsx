import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Elle Raisa',
    image: '/a1.png',
    video:
      'https://player.vimeo.com/video/1043506796?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Fashion'],
  },
  {
    id: '2',
    title: 'Elle xiaomi',
    image: '/a2.png',
    video:
      'https://player.vimeo.com/video/1043506405?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Tech', 'Lifestyle'],
  },
  {
    id: '3',
    title: 'Kebunku',
    image: '/a3.png',
    video:
      'https://player.vimeo.com/video/1043506431?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Retail', 'Lifestyle'],
  },
  {
    id: '4',
    title: 'Telkomsel',
    image: '/a4.png',
    video:
      'https://player.vimeo.com/video/1043510240?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Tech', 'Lifestyle'],
  },
  {
    id: '5',
    title: 'Kominfo1',
    image: '/a5.png',
    video:
      'https://player.vimeo.com/video/1043506555?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Health'],
  },
  {
    id: '6',
    title: 'Kominfo2',
    image: '/a6.png',
    video:
      'https://player.vimeo.com/video/1043506654?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Health'],
  },
  {
    id: '7',
    title: 'Arung Songket',
    image: '/a7.png',
    video:
      'https://player.vimeo.com/video/1043506912?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Lifestyle'],
  },
];

const Commercial = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Commercial</h1>
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
        categories={['Tech', 'Lifestyle', 'Health', 'Retail', 'Fashion']}
      />
    </div>
  );
};

export default Commercial;
