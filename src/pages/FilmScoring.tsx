import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Asura Wrath',
    image: '/3.png',
    video:
      'https://player.vimeo.com/video/1043483984?badge=0&autopause=0&player_id=0&app_id=58479',
    categories: ['Action', 'Game'],
  },
  {
    id: '2',
    title: 'Taxi Driver',
    image: '/4.png',
    video:
      'https://player.vimeo.com/video/1043488308?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Jazz', 'Cinematic'],
  },
  {
    id: '3',
    title: 'Theory of Everything',
    image: '/5.png',
    video:
      'https://player.vimeo.com/video/1043488987?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Cinematic'],
  },
  {
    id: '4',
    title: 'The secret life of walter mitty',
    image: '/6.png',
    video:
      'https://player.vimeo.com/video/1043488900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Cinematic'],
  },
  {
    id: '5',
    title: 'Autopsy of Jane Doe',
    image: '/7.png',
    video:
      'https://player.vimeo.com/video/1043501222?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Horror'],
  },
  {
    id: '6',
    title: 'The tale of princess kaguya',
    image: '/8.png',
    video:
      'https://player.vimeo.com/video/1043501146?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Japan Style'],
  },
  {
    id: '7',
    title: 'Lion',
    image: '/9.png',
    video:
      'https://player.vimeo.com/video/1043502315?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Cinematic'],
  },
  {
    id: '8',
    title: 'Ratatouille',
    image: '/10.png',
    video:
      'https://player.vimeo.com/video/1043504084?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Disney'],
  },
  {
    id: '9',
    title: 'Langit-langit toples kaca',
    image: '/11.png',
    video:
      'https://player.vimeo.com/video/1043498097?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Animatic'],
  },
  {
    id: '10',
    title: 'Abandoned skies',
    image: '/12.png',
    video:
      'https://player.vimeo.com/video/1043504426?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Animatic'],
  },
  {
    id: '11',
    title: 'Westworld',
    image: '/13.png',
    video:
      'https://player.vimeo.com/video/1043504358?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Action', 'Cinematic'],
  },
  {
    id: '12',
    title: 'Mad Max',
    image: '/14.png',
    video:
      'https://player.vimeo.com/video/1043504223?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Action', 'Cinematic'],
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
          'Animatic',
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
