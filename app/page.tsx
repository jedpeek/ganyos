import Image from "next/image";
import Hero from "./components/hero";
import Albums from "./components/albums";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Albums />
    </main>
  );
}
