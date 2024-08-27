export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              GANYOS
            </h1>
            <p className="mt-3 text-xl text-muted-foreground"></p>
          </div>
          <a
            href="https://open.spotify.com/track/3cQ2y9matKF3GgDSBmSrPT"
            target="_blank"
          >
            <div className="mt-10 relative mx-auto ">
              <img
                src="/assets/Ganyos_Face.jpeg"
                className="rounded-xl min-w-screen min-h-screen mx-auto"
                alt="Image Description"
              />
              <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
                <div className="w-48 h-48 rounded-lg bg-background/10" />
              </div>
              <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
                <div className="w-48 h-48 rounded-full bg-background/10" />
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
