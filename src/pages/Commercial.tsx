import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Elle Raisa',
    image: 'webp/a1.webp',
    video:
      'https://www.youtube.com/embed/PUgtFhHFtCc?si=GFS1Avn0sKpOcBFV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Fashion'],
  },
  {
    id: '2',
    title: 'Elle xiaomi',
    image: 'webp/a2.webp',
    video:
      'https://www.youtube.com/embed/pL7ksB6iTdM?si=Jgh83OHfby3_Tc_G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Tech', 'Lifestyle'],
  },
  {
    id: '3',
    title: 'Kebunku',
    image: 'webp/a3.webp',
    video:
      'https://www.youtube.com/embed/cPPPgTWqY7c?si=4gYX3muNmJLyKav8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Retail', 'Lifestyle'],
  },
  {
    id: '4',
    title: 'Telkomsel',
    image: 'webp/a4.webp',
    video:
      'https://www.youtube.com/embed/dh03qRzm7-E?si=zmzlIuZJmCvYwFqG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Tech', 'Lifestyle'],
  },
  {
    id: '5',
    title: 'Kominfo1',
    image: 'webp/a5.webp',
    video:
      'https://www.youtube.com/embed/7jJZrueMyjg?si=pWyLbZXXibO76tg_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Health'],
  },
  {
    id: '6',
    title: 'Kominfo2',
    image: 'webp/a6.webp',
    video:
      'https://www.youtube.com/embed/65mNNFsDvR0?si=Y5VkwDrYSQHb6fQK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Health'],
  },
  {
    id: '7',
    title: 'Arung Songket',
    image: 'webp/a7.webp',
    video:
      'https://www.youtube.com/embed/7MNmOrlGJ9w?si=lj5ulzj1TSAtDKC1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
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
