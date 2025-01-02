import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Asura Wrath',
    image: '../public/3.png',
    video:
      'https://player.vimeo.com/video/1043483984?badge=0&autopause=0&player_id=0&app_id=58479',
    categories: ['Action', 'Game'],
  },
  {
    id: '2',
    title: 'Taxi Driver',
    image: '../public/4.png',
    video: '../public/Zahar_Lupin_1.mp4',
    categories: ['Cinematic'],
  },
  // ... existing code ...
];

const FilmScoring = () => {
  return (
    <div>
      <h1 className="text-4xl font-serif mb-12">Film Scoring</h1>
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
          'Action',
          'Horror',
          'Cinematic',
          'Game',
          'Disney',
          'Japan Style',
          'Jazz',
        ]}
      />
    </div>
  );
};

export default FilmScoring;
