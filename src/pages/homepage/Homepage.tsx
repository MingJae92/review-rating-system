import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import CategoryList from "../../components/categoryList/Categorylist";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CategoryList/>
      Homepage
      <Footer />
    </div>
  );
}

export default Homepage;
