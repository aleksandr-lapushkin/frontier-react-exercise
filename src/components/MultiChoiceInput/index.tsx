import { BaseInputProps, BaseInputStyle } from "components/BaseInput"
import { useFormContext } from "react-hook-form"
import styled from "styled-components"

const StyledSelect = styled.select`
    ${BaseInputStyle}
    padding: 0;
`

const StyledOption = styled.option`
    padding: ${props => props.theme.space_small};
    padding-left: ${props => props.theme.space_med};
    color: ${props => props.theme.text_color}
`

type ChoiceOption = { value: string, label: string }
type MultiChoiceInputProps = BaseInputProps & { options: ChoiceOption[] }
const MultiChoiceInput: React.FC<MultiChoiceInputProps> = ({ id, options, required }) => {
    const { register } = useFormContext()

    return (
        <StyledSelect id={id} multiple {...register(id, { required })}>
            {options.map(it => <StyledOption value={it.value}>{it.label}</StyledOption>)}
        </StyledSelect>
    )
}

export default MultiChoiceInput;