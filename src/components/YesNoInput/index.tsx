import { BaseInputProps } from "components/BaseInput";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type YesNoInputProps = BaseInputProps
const StyledRadioInput = styled.input`
    margin-top: ${props => props.theme.space_med};
`
const YesNoInput: React.FC<YesNoInputProps> = ({ id, required }) => {
    const { register } = useFormContext()
    return (
        <div>
            <StyledRadioInput type='radio' value='yes' id={id} data-testid={`${id}_yes`} {...register(id, { required })} /> Yes<br/>
            <StyledRadioInput type='radio' value='no' id={id} data-testid={`${id}_no`} {...register(id, { required })} /> No
        </div>
    )
}

export default YesNoInput;