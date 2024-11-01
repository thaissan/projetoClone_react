import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 24px;
    height: 28px;
    margin-left: 0.7rem;
   }

   span{
    font-weight: 600;
   }

   @media (max-width: 768px) {
    gap: 10px; 

    span{
      display: none;
    }
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
    border: 0.1rem solid #808084;
    border-radius: 5px 0 0 5px;

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

export const UserIcon = styled.div`
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

`;