import About from "./components/about/About";
import Advantages from "./components/advantages/Advantages";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MakeOrder from "./components/make-order/MakeOrder";
import PopularItems from "./components/popular-items/PopularItems";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PopularItems />
        <About />
        <MakeOrder />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}
