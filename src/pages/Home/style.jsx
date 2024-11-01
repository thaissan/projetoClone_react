import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 35px;
    height: 41px;
    margin-left: 0.7rem;
   }

   span{
    font-weight: bold;
   }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 20px;
  
  input {
    width: 70%;
    padding: 8px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    &:focus {
    outline: none;
    border-color: #772CE8; 
    border-width: 0.2rem;
  }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  button{
    display: flex;
    background-color: #E2E2E6;
    border: none;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
`;
