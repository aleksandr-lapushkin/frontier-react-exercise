import styled from "styled-components"
import TextInput from "components/TextInput";
import YesNoInput from "components/YesNoInput";
import TextAreaInput from "components/TextAreaInput";
import MultiChoiceInput from "components/MultiChoiceInput";


type SectionContentItemProps = {
    item: Frontier.Element
}

const StyledLabel = styled.label`
    font-weight: 600;
    font-size: 0.85rem;
    margin: ${props => props.theme.space_small};
`
const InputContainer = styled.div`
    margin-top: ${props => props.theme.space_small};
    margin-bottom: ${props => props.theme.space_large};
`
const SectionContentItem: React.FC<SectionContentItemProps> = ({ item }) => {
    return (
        <div>
            <StyledLabel htmlFor={item.id}>
            {item.metadata.required ? '* ' : ''}{item.question_text}
                <InputContainer>
                    {item.type === 'text' && <TextInput id={item.id} placeholder={item.metadata.placeholder} required={item.metadata.required} format={item.metadata.format} pattern={item.metadata.pattern} />}
                    {item.type === 'boolean' && <YesNoInput id={item.id} required={item.metadata.required} />}
                    {item.type === 'textarea' && <TextAreaInput id={item.id} placeholder={item.metadata.placeholder} required={item.metadata.required} />}
                    {item.type === 'multichoice' && <MultiChoiceInput id={item.id} options={item.metadata.options ?? []} required={item.metadata.required} />}    
                </InputContainer>
            </StyledLabel>
        </div>
    )
}


type SectionProps = {
    section: Frontier.Section
}

const SectionRoot = styled.div`
    background: ${props => props.theme.background};
    border-radius: 10px;
    padding: ${props => props.theme.space_large};
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
    margin-bottom: ${props => props.theme.space_med};
`

const Heading2 = styled.h2`
    font-size: 1.2rem;
    margin-top: 0;
`
const Section: React.FC<SectionProps> = ({ section }) => {
    return (
        <SectionRoot>
            <Heading2>{section.title}</Heading2>
            {section.content.map(item => <SectionContentItem key={item.id} item={item} />)}
        </SectionRoot>
        
    )
}

export default Section;