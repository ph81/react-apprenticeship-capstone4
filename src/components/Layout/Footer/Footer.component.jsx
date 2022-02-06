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
function Footer() {
  return (
    <div>
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
                <FooterLink to="/">Our Suppliers</FooterLink>
                <FooterLink to="/">Sustainability</FooterLink>
                <FooterLink to="/">Work with us</FooterLink>
                <FooterLink to="/">Contact us</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle>Customer Service</FooterLinkTitle>
                <FooterLink to="/about">Track your order</FooterLink>
                <FooterLink to="/">FAQ</FooterLink>
                <FooterLink to="/">Shipping</FooterLink>
                <FooterLink to="/">Terms and conditions</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle>Social</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Linkedin</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <FooterCredits to="https://github.com/edithmg">
            {' '}
            &copy; Copyright 2022, made with 💛 by Edith
          </FooterCredits>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}

export default Footer;
