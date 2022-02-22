import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CartContent from '../../components/Cart/CartContent';
import { Section } from '../../GlobalStyles';

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <Header />
      <main>
        {cart.length < 1 ? (
          <Section data-testid="cart">
            <h2>Your cart is empty</h2>
            <Link to="/products">Go Shopping!</Link>
          </Section>
        ) : (
          <CartContent />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
