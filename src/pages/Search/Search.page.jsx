import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchProducts from '../../components/Products/SearchProducts';

const Search = () => {
  return (
    <>
      <Header />
      <main>
        <SearchProducts />
      </main>
      <Footer />
    </>
  );
};

export default Search;
