import styled from 'styled-components';

export const UserInfo = styled.div`
  text-align: left;
  form {
    width: 70vw;
    padding: 1.5rem 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  label {
    text-align: left;
    margin-bottom: 0.9rem;
  }
  input,
  textarea {
    display: block;
    margin-bottom: 1.5rem;
  }
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      background: #2f4f4f;
    }
  }
`;
