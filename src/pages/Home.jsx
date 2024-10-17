import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductsCategory from "@/components/ProductsCategory";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { useMenu } from "@/contexts/MenuContext";
import Menu from "@/components/Menu";
import SearchTab from "@/components/SearchTab";

function Home() {
  const { openMenu, openSearchQuery } = useMenu();
  return (
    <div className="relative">
      {openMenu && <Menu />}
      {openSearchQuery && <SearchTab />}
      <Hero />
      <Services />
      <ProductsCategory />
      <Testimonial />
      <div className="my-40"></div>
      <Footer />
    </div>
  );
}

export default Home;
