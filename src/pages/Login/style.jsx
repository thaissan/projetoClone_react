import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4a4a4ab2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: white;
  border-radius: 6px;
  padding: 1.5rem;
  width: 100%;
  max-width: 450px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute; 
  right: 1rem; 
  top: 1rem; 
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
  
  &:hover {
    background-color: #efecec;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 0rem;
  
  img {
    width: 46px;
    height: 51px;
    margin-right: 0.7rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SubmitButton = styled.button`
  background-color: #9147ff;
  color: white;
  padding: 0.45rem;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 400;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: #772ce8;
  }
  
  &:disabled {
    color: #c7b8b8;
    background-color: #F6F6F7;
    cursor: not-allowed;
  }
`;

export const LoginLink = styled.a`
  color: #9147ff;
  text-decoration: none;
  font-size: 0.8rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Signup = styled.div`
 padding: 0.45rem;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.86rem;
  font-weight: 600;
  border-radius: 4px;

  &:hover {
    background-color: #e5e1ea; 
  }

    a {
    color: #5C16C5;
    text-decoration: none;
    
    &:hover {
      text-decoration: none;
      background-color: #e5e1ea;
      color: black;
    }
  }
`;
