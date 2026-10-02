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
      </main>
    </div>
  );
}
