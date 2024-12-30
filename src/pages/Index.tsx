const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-serif mb-6">Hi,<br />I'm Stefanus Adri Irawan</h1>
        <p className="text-xl text-gray-600 mb-8">
          A composer and music producer with a passion for music production, film scoring, and commercial sound design. My background in a variety of instruments and production techniques allows me to create music that connects deeply with audiences and complements any story.
        </p>
        <div className="flex gap-4">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-wine text-white rounded-md hover:bg-wine-700 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="/about"
            className="inline-block px-6 py-3 border border-wine text-wine rounded-md hover:bg-wine/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;