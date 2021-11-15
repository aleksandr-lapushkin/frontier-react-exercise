import { BaseInputProps, BaseInputStyle } from "components/BaseInput"
import styled from "styled-components"
import { useFormContext } from "react-hook-form"
import InputWrapper from "components/InputWrapper"

const StyledInput = styled.input`
    ${BaseInputStyle}
`

type TextInputProps = BaseInputProps & { placeholder?: string, format?: string, step?: number, pattern?: string }
const TextInput: React.FC<TextInputProps> = ({ id, placeholder, required, format, step, pattern }) => {
    const { register } = useFormContext()
    return (
        <InputWrapper>
            <StyledInput 
                id={id} 
                placeholder={placeholder} 
                type={format === 'number' ? 'number' : 'text'} 
                step={format === 'number' ? step : undefined}
                {...register(id, { required, pattern: pattern ? RegExp(pattern) : undefined })}
            >
            </StyledInput>
        </InputWrapper>
    )
}

export default TextInput;