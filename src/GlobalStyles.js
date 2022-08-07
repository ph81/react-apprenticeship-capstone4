import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(22, 28%, 21%);
  --clr-primary-2: hsl(22, 28%, 29%);
  --clr-primary-3: hsl(22, 28%, 37%);
  --clr-primary-4: hsl(22, 28%, 45%);
  /* primary/main color */
  --clr-primary-5: hsl(22, 31%, 52%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(22, 31%, 60%);
  --clr-primary-7: hsl(22, 31%, 67%);
  --clr-primary-8: hsl(20, 31%, 74%);
  --clr-primary-9: hsl(22, 31%, 81%);
  --clr-primary-10: hsl(22, 31%, 88%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --swiper-theme-color: darkgrey;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body { 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  background: var(--clr-white);
}
hr {
  border: none;
  border-top: 1px solid var(--clr-grey-8);
}
h1,h2,h3,h4,h5,h6 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2.5rem;
}
h4 {
  font-size: 1.8rem;
}
h5 {
  font-size: 1.2rem;
}

h2,
p {
  margin-bottom: 1.2rem;
}

a {
  color: inherit;
  text-decoration: none;
  
  &:active {
    transform: traslateY(3rem);
  }
} 

svg {
  font-size: 2rem;
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
}
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 4rem auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }
  @media (min-width: 1500px) {
    max-width: 1500px;
  }
  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Section = styled.section`
  margin: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-primary-6);
`;

export const ListContainer = styled.section`
  margin-left: 200px;
  padding: 1px 16px;
  height: 90%;
  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  background: #fff;
  max-width: 1400px;
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '20px')};
  background-color: ${({ primary }) => (primary ? '#E38B06' : '#000')};
  color: ${({ primary }) => (primary ? '#000' : '#fff')};
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '18px')};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ primary }) => (primary ? '#fff' : '#E38B06')};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? '18px 30px' : '10px 20px')};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? '12px 20px' : '10px 20px')};
    font-size: ${({ bigFont }) => (bigFont ? '16px' : '18px')};
  }
`;

export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '40px' : '30px')};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${({ big }) => (big ? '15px 60px' : '13px 55px')};
  font-size: ${({ fontBig }) => (fontBig ? '22px' : '18px')};
  transition: all 0.5s ease;
  background-color: #fefefe;
  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? '20px' : '18px')};
    padding: ${({ big }) => (big ? '9px 30px' : '8px 28px')};
    font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  }
  @media only screen and (max-width: 780px) {
    border: none;
    color: #e38b06;
    padding: 1rem 2rem;
    background: none;
    transition: all 0.4s ease;
    &:hover {
      border-bottom: 1px solid #e38b06;
      background: none;
      border-radius: 0;
      color: #e38b06;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 3rem auto;
  width: 100%;
`;

export const Page = styled.button`
  color: var(--clr-grey-1);
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: solid 0.2rem var(--clr-primary-3);
  background-color: transparent;
  border-radius: 0.7rem;
  cursor: pointer;
  &:active&:hover {
    color: var(--clr-white);
    background-color: var(--clr-primary-3);
  }
  &:disabled {
    background-color: transparent !important;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
