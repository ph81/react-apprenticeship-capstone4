import {
  FooterSection,
  FooterContainer,
  FooterNewsletter,
  FooterNewsletterTitle,
  FooterNewsletterForm,
  FooterNewsletterInput,
  FooterBtn,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCredits,
  FooterLabel,
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterNewsletter>
          <FooterNewsletterTitle>
            Join our newsletter for exclusive offers and remote events!
          </FooterNewsletterTitle>
          <FooterNewsletterForm>
            <FooterLabel htmlFor="email">Email address</FooterLabel>
            <FooterNewsletterInput
              name="email"
              id="email"
              type="email"
              placeholder="Email address"
            />
            <FooterBtn>Submit</FooterBtn>
          </FooterNewsletterForm>
        </FooterNewsletter>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink>Our Suppliers</FooterLink>
              <FooterLink>Sustainability</FooterLink>
              <FooterLink>Work with us</FooterLink>
              <FooterLink>Contact us</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLinkTitle>Customer Service</FooterLinkTitle>
              <FooterLink>Track your order</FooterLink>
              <FooterLink>FAQ</FooterLink>
              <FooterLink>Shipping</FooterLink>
              <FooterLink>Terms and conditions</FooterLink>
            </FooterLinks>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLinkTitle>Social</FooterLinkTitle>
              <FooterLink>Instagram</FooterLink>
              <FooterLink>Facebook</FooterLink>
              <FooterLink>Youtube</FooterLink>
              <FooterLink>Linkedin</FooterLink>
            </FooterLinks>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <FooterCredits>
          {' '}
          &copy; Copyright 2022, made with 💛 by Edith
        </FooterCredits>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
