import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import FeaturedContent from '../../components/FeaturedContent';
import Categories from '../../components/Categories';
import FeaturedProducts from '../../components/FeaturedProducts';

const Home = () => {
  return (
    <>
      {' '}
      <Header />
      <main>
        <FeaturedContent />
        <Categories />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
