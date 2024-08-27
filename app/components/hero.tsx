// export default function Hero() {
//   return (
//     <>
//       {/* Hero */}
//       <div className="relative overflow-hidden py-24 lg:py-32">
//         <div className="container">
//           <div className="max-w-2xl text-center mx-auto">
//             <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
//               GANYOS
//             </h1>
//             <p className="mt-3 text-xl text-muted-foreground"></p>
//           </div>
//           <a
//             href="https://open.spotify.com/track/3cQ2y9matKF3GgDSBmSrPT"
//             target="_blank"
//           >
//             <div className="mt-10 relative mx-auto ">
//               <img
//                 src="/assets/Ganyos_Face.jpeg"
//                 className="rounded-xl min-w-screen min-h-screen mx-auto"
//                 alt="Image Description"
//               />
//               <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
//                 <div className="w-48 h-48 rounded-lg bg-background/10" />
//               </div>
//               <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
//                 <div className="w-48 h-48 rounded-full bg-background/10" />
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//       {/* End Hero */}
//     </>
//   );
// }
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ao998MpTLmx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Discover the Best Music
            </h1>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <b>"The Show"</b> by <b>Ganyos</b> is now streaming on all
              platforms
            </p>
            <div className="flex items-center space-x-4 hover:scale-110 duration-150">
              <Link
                href="https://open.spotify.com/track/3cQ2y9matKF3GgDSBmSrPT"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground p-2 text-primary transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <img
                  src="/assets/Spotify_Black.png"
                  className="h-12 w-12 rounded-full"
                />
                <span className="sr-only">Spotify</span>
                <span className="ml-5"> PLAY NOW ON SPOTIFY</span>
              </Link>
              {/* <Link
                href="https://open.spotify.com/track/3cQ2y9matKF3GgDSBmSrPT"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground p-2 text-primary transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <img
                  src="/assets/Apple_Music.svg"
                  className="h-12 w-12 rounded-full"
                />
                <span className="sr-only">Apple Music</span>
              </Link> */}
              {/* <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground p-2 text-primary transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <WavesIcon className="h-6 w-6" />
                <span className="sr-only">Tidal</span>
              </Link> */}
            </div>
          </div>
          <img
            src="/assets/Ganyos_Face.jpeg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}

function AirplayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </svg>
  );
}

function AppleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function WavesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
