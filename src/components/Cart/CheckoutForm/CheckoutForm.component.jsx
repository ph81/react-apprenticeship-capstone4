import CartContent from '../CartContent';
import { Section } from '../../../GlobalStyles';
import { UserInfo } from './CheckoutForm.styles';

const CheckoutForm = () => {
  return (
    <Section>
      <h2>Billing info</h2>
      <UserInfo>
        <form>
          <label>
            First name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last name:
            <input type="text" required />
          </label>
          <label>
            Address:
            <input type="text" required />
          </label>
          <label>
            City/State:
            <input type="text" required />
          </label>
          <label>
            Country:
            <input type="text" required />
          </label>
          <label>
            Zip code:
            <input type="text" required />
          </label>
          <label>
            Order notes:
            <textarea rows="5" cols="33" />
          </label>
        </form>
      </UserInfo>
      <CartContent />
    </Section>
  );
};

export default CheckoutForm;
