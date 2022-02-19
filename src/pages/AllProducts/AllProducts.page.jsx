import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ProductList from '../../components/Products/ProductList';

const AllProducts = () => {
  return (
    <>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </>
  );
};

export default AllProducts;
