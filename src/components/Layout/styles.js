import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1rem;
  background-color: #222;
  border-radius: 4px;
  margin: 16px 0;

  a {
    color: #fff;
    text-decoration: none;
    
    & + a {
      margin-left: 1rem;
    }
  }
`;