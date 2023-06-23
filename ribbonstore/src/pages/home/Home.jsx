import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/Products/Products";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">All Products</h1>
        <Products/>
       
        {/* <PropertyList/> */}
        <h1 className="homeTitle">Top sales</h1>
        <FeaturedProducts/>
        {/* <MailList/> */}
        <Footer/>
      </div>
    </div>
  );
};

export default Home;