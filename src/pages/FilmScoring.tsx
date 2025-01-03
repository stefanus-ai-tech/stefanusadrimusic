import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import PortfolioGrid from '../components/PortfolioGrid';

const projects = [
  {
    id: '1',
    title: 'Asura Wrath',
    image: 'webp/3.webp',
    video:
      'https://www.youtube.com/embed/6F6co75UrMc?si=f1RDjCwBuvNFJ_VA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Action', 'Game'],
  },
  {
    id: '2',
    title: 'Taxi Driver',
    image: 'webp/4.webp',
    video:
      'https://www.youtube.com/embed/ZM7wM1NcKx4?si=dJhdKlZAu_Ak4pyy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Jazz', 'Cinematic'],
  },
  {
    id: '3',
    title: 'Theory of Everything',
    image: 'webp/5.webp',
    video:
      'https://www.youtube.com/embed/AlzbWAZ2z3s?si=_dHZNm0YVg-fTJIu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Cinematic'],
  },
  {
    id: '4',
    title: 'The secret life of walter mitty',
    image: 'webp/6.webp',
    video:
      'https://player.vimeo.com/video/1043488900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Cinematic'],
  },
  {
    id: '5',
    title: 'Autopsy of Jane Doe',
    image: 'webp/7.webp',
    video:
      'https://www.youtube.com/embed/Wv20WEzzDz0?si=u6sFuCq5mbWXfD-j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Horror'],
  },
  {
    id: '6',
    title: 'The tale of princess kaguya',
    image: 'webp/8.webp',
    video:
      'https://player.vimeo.com/video/1043501146?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    categories: ['Japan Style'],
  },
  {
    id: '7',
    title: 'Lion',
    image: 'webp/9.webp',
    video:
      'https://www.youtube.com/embed/lKpFkG8UohI?si=BgNfhDxeBa9IvVPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Cinematic'],
  },
  {
    id: '8',
    title: 'Ratatouille',
    image: 'webp/10.webp',
    video:
      'https://www.youtube.com/embed/OBrUX6NbswQ?si=rKCqH7pb4M6Y1sZZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Disney'],
  },
  {
    id: '9',
    title: 'Langit-langit toples kaca',
    image: 'webp/11.webp',
    video:
      'https://www.youtube.com/embed/x9FPZxbcFDQ?si=00WljBZ0ZB5jHgA1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Animatic'],
  },
  {
    id: '10',
    title: 'Abandoned skies',
    image: 'webp/12.webp',
    video:
      'https://www.youtube.com/embed/O-AHJSJ1GxQ?si=45jUAWktYYnT1Usm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Animatic'],
  },
  {
    id: '11',
    title: 'Westworld',
    image: 'webp/13.webp',
    video:
      'https://www.youtube.com/embed/1sF4D3iKRi8?si=QkG_hPB6cPn4Ifq1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
    categories: ['Action', 'Cinematic'],
  },
  {
    id: '12',
    title: 'Mad Max',
    image: 'webp/14.webp',
    video:
      'https://www.youtube.com/embed/P2tyTsJVYBg?si=ap3FI-kwY30Qfrh_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
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
