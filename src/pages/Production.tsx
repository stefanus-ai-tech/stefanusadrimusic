import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: '(Original Song) v3-Dancing Petals',
    image: 'webp/c (1).webp',
    video: 'https://www.youtube.com/embed/hLUS1hNSCGY?si=bsF18xo7q2lv_T2S',
    categories: ['Original'],
  },
  {
    id: '2',
    title: 'BT 1',
    image: 'webp/c (2a).webp',
    video: 'https://www.youtube.com/embed/0Ps7ZrnUmMg?si=Wih9BNXK5RWsE5VY',
    categories: ['Backing Track'],
  },
  {
    id: '3',
    title: 'BT 2',
    image: 'webp/c (2b).webp',
    video: 'https://www.youtube.com/embed/jmoq13LD-pw?si=KjYPwP8nn6C14io_',
    categories: ['Backing Track'],
  },
  {
    id: '4',
    title: 'Compro',
    image: 'webp/c (3).webp',
    video: 'https://www.youtube.com/embed/QzhNSsVwEkY?si=2v8eTDAE_SYJGFwg',
    categories: ['Company Profile'],
  },
  {
    id: '5',
    title: 'Corporate',
    image: 'webp/c (4).webp',
    video: 'https://www.youtube.com/embed/HgJtSYrfPRg',
    categories: ['Corporate'],
  },
  {
    id: '6',
    title: 'Cover song',
    image: 'webp/c (5).webp',
    video:
      'https://www.youtube.com/embed/FDZc-CVmmEM?si=1FRaUnnrsqoExIt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Cover Song'],
  },
  {
    id: '7',
    title: 'Ori Cli',
    image: 'webp/c (6).webp',
    video: 'https://www.youtube.com/embed/Ti33i8V-eVw?si=rKmr1Ofg3KBpKXa-',
    categories: ['Original'],
  },
  {
    id: '8',
    title: 'Stream',
    image: 'webp/c (7).webp',
    video: 'https://www.youtube.com/embed/1U-jocfBzm8',
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
