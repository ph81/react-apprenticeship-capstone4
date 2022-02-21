import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CheckoutForm from '../../components/Cart/CheckoutForm';
import { Section } from '../../GlobalStyles';

const Checkout = () => {
  const { cart } = useCartContext();

  return (
    <>
      <Header />
      <main>
        {cart.length < 1 ? (
          <Section>
            <h2>Your cart is empty</h2>
            <Link to="/products">Go Shopping</Link>
          </Section>
        ) : (
          <CheckoutForm />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
