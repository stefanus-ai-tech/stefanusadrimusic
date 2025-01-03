import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Sanghamitta',
    image: 'webp/b1.webp',
    video:
      'https://www.youtube.com/embed/g9G6axPvUBc?si=ueypSEBkdoihMqQi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Religious'],
  },
  {
    id: '2',
    title: 'Artsensei1',
    image: 'webp/b2.webp',
    video:
      'https://www.youtube.com/embed/mEn79NSzv4U?si=yozf6emV6bp90vDD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Art'],
  },
  {
    id: '3',
    title: 'Artsensei2',
    image: 'webp/b3.webp',
    video: 'https://www.youtube.com/embed/aosNhY8tlHM?si=84p3cjoZwk9M8GaU',
    categories: ['Art'],
  },
  {
    id: '4',
    title: 'Warefleet',
    image: 'webp/b4.webp',
    video: 'https://www.youtube.com/embed/ARDOj9u-h4g?si=U61gxjMWIWsp6a57',
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
