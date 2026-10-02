import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PopularItems from "./components/popular-items/PopularItems";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PopularItems />
        <About />
      </main>
    </div>
  );
}
