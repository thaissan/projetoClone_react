import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4px 5px;
  background-color: white;
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
  cursor: pointer;

  img {
    width: 24px;
    height: 28px;
    margin-left: 0.7rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  span {
    font-weight: 600;

     &:hover {
      color: #7f5eea; 
    }
  }

  @media (max-width: 768px) {
    gap: 10px;

    span {
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
  cursor: pointer;

  input {
    width: 70%;
    padding: 8px;
    border: 0.1rem solid #808084;
    border-radius: 5px 0 0 5px;

    &:focus {
      outline: none;
      border-color: #772ce8;
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

  button {
    display: flex;
    background-color: #e2e2e6;
    border: none;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
`;
