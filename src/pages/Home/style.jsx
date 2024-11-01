import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  padding: 0px;
`;

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

//main
export const Sidebar = styled.aside`
  width: 230px;
  height: 100vh;
  background-color: #EFEFF1;
  border-right: 1px solid #e5e5e5;
  padding: 9px;
`;

export const SidebarDivs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  #titleFollowed{
    font-weight: 600;
    font-size: smaller;
    color: #8e8e8f;
  }
  
  #titleRecommended{
    font-weight: 700;
    font-size: smaller;
    color: #000000;
  }
`;

export const ChannelList = styled.div`
  margin-top: 5px;

  a{
    text-decoration: none;
    color: #7F5EEA;
    font-size: smaller;
  }
`;

export const ChannelItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;

  p{
    font-weight: 600;
  }
  
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const RedCircle = styled.div`
  width: 7px;         
  height: 7px;          
  background-color: red; 
  border-radius: 50%;
`;   
