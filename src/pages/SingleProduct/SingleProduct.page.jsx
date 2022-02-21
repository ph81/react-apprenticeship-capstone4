import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ProductDetail from '../../components/Products/ProductDetail';

const SingleProduct = () => {
  return (
    <>
      <Header />
      <main>
        <ProductDetail />
      </main>
      <Footer />
    </>
  );
};

export default SingleProduct;
