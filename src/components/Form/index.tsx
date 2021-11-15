import { FormProvider, useForm, useFormContext } from "react-hook-form"
import styled from 'styled-components';
import { useState, useCallback } from "react";
import Section from "./Section";
import Button from "components/Button";
import SubmitButton from "components/SubmitButton";

type FormProps = {
    job: Frontier.Job
    onSubmit?: (data: unknown) => void
}

const FormRoot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 640px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    padding: 0.5rem;
`
const FormSizer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`

const Form: React.FC<FormProps> = ({ job, onSubmit }) => {
    const methods = useForm()

    const onSubmitCallback = useCallback((data: unknown) => {
        console.log(data);
        if (onSubmit) {
            onSubmit(data)
        }
    }, [onSubmit]);

    const [currentSection, setCurrentSection] = useState(0)
    const atFinalSection = currentSection === job.sections.length - 1
    const atFirstSection = currentSection === 0

    const goNext = useCallback(() => {
        if (!atFinalSection) {
            setCurrentSection(currentSection + 1)
        }
    }, [atFinalSection, setCurrentSection, currentSection])
    const goBack = useCallback(() => {
        if (!atFirstSection) {
            setCurrentSection(currentSection - 1)
        }
    }, [atFinalSection, setCurrentSection, currentSection])

    return (
        <FormRoot>
            <FormSizer>
            <form onSubmit={methods.handleSubmit(onSubmitCallback)}>
                <FormProvider {...methods}>
                    <Section section={job.sections[currentSection]} />
                </FormProvider>
                <div>
                    {atFinalSection && <SubmitButton data-testid='form-submit' type='submit' />}
                    {!atFinalSection && <Button style={{width: '100%'}} onClick={goNext}>Next</Button>}
                    {!atFirstSection && <Button style={{width: '100%'}} onClick={goBack}>Previous</Button>}
                </div>
            </form>
            </FormSizer>
        </FormRoot>
    )
}

export default Form;