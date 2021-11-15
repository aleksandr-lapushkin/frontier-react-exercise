import styled, { css } from "styled-components";

export const BaseButtonStyle = css`
    background: ${props => props.theme.secondary};
    padding: ${props => props.theme.space_large};
    border-radius: 6px;
    border: 0;
    color: ${props => props.theme.text_color};
    font-size: 1.1rem;
    cursor: pointer;
    width: 100%;
    margin-bottom: ${props => props.theme.space_med};
    :hover {
        filter: brightness(105%);
    }
`
const StyledButton = styled.button`
    ${BaseButtonStyle}
`

export default StyledButton