import { BaseButtonStyle } from "components/Button";
import styled from "styled-components";

const SubmitButton = styled.input`
    ${BaseButtonStyle}
    background: ${props => props.theme.primary};
    color: ${props => props.theme.text_color_secondary};
`

export default SubmitButton;