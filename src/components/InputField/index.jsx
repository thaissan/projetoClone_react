/* eslint-disable react/prop-types */
import { Label, InputContainer, Input} from './style'

export const InputField = ({ label, type, value, onChange}) => (
    <InputContainer>
      <Label>{label}</Label>
      <Input type={type} value={value} onChange={onChange} />
    </InputContainer>
)