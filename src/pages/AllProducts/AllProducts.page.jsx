import React, { useEffect } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ProductList from '../../components/Products/ProductList';
import Loading from '../../components/Loading';

const AllProducts = () => {
  useEffect(() => {
    setTimeout(() => {
      return <Loading />;
    }, 3000);
  });

  return (
    <>
      {' '}
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </>
  );
};

export default AllProducts;
