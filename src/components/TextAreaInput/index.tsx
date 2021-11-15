import { BaseInputProps, BaseInputStyle } from "components/BaseInput"
import InputWrapper from "components/InputWrapper"
import { useFormContext } from "react-hook-form"
import styled from "styled-components"

const StyledTextArea = styled.textarea`
    ${BaseInputStyle}
`

type TextAreaInputProps = BaseInputProps & { placeholder?: string }
const TextAreaInput: React.FC<TextAreaInputProps> = ({ id, placeholder, required }) => {
    const { register } = useFormContext()
    return (
        <InputWrapper>
            <StyledTextArea id={id} placeholder={placeholder} {...register(id, { required })} />
        </InputWrapper>        
    )
}

export default TextAreaInput