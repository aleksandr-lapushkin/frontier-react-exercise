
import { css } from 'styled-components'

export type BaseInputProps = {
    id: string
    required?: boolean
}

export const BaseInputStyle = css`
    padding: ${props => props.theme.space_med};
    font-size: 0.9rem;
    border-radius: 6px;
    border: 2px solid #adadad;
    width: 100%;
`