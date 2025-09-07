// src/pages/AboutPage.tsx

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* --- Main Headings --- */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Hello world
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">Aum Pauskar here!</p>
      </div>

      {/* --- Main Content Section (2-column layout) --- */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {/* --- Left Column (Image & Info) --- */}
        <div className="md:col-span-1">
          <img
            src="/profile.png" // This path works because the image is in the 'public' folder
            alt="Aum Pauskar"
            className="w-full max-w-xs mx-auto rounded-lg shadow-md"
          />
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center">
              <span className="mr-2">■</span>
              Studied in KV2 Belagavi
            </li>
            <li className="flex items-center">
              <span className="mr-2">■</span>
              CSE '25 GIT
            </li>
          </ul>
        </div>

        {/* --- Right Column (About Me) --- */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I am a driven and creative professional with a passion for solving
            complex problems and delivering innovative solutions. With a diverse
            background in IOT, Python, Full Stack web development... I bring a
            unique perspective and a wealth of experience to every project I work
            on. Whether I am developing cutting edge technology, leading
            cross-functional teams, or collaborating with clients and partners, I
            am always striving to push the boundaries of what is possible and
            make a positive impact in the world. In my free time, I enjoy coding,
            music and staying active in the programming community.
          </p>
        </div>
      </div>
    </div>
  );
}