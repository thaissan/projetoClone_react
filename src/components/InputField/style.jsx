import styled from 'styled-components';

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  color: #000;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 0.8rem;
`;

export const Input = styled.input`
  padding: 0.3rem;
  border: 1.3px solid #808084;
  border-radius: 5px;
  font-size: 1rem;
  /* width: 100%; */
  
  &:focus {
    outline: none;
    border-color: #772CE8; 
    border-width: 0.2rem;
  }
`;

