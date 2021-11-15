import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const testJob: Frontier.Job = {
    theme: {},
    sections: [
        { 
            id: 'hello',
            title: 'Say hello',
            content: [
                { 
                    id: 'test_hello',
                    type: 'boolean',
                    metadata: {
                        required: true
                    },
                    question_text: 'Will you say hello?'
                },
                { 
                    id: 'say_hello',
                    type: 'text',
                    metadata: {
                        required: true
                    },
                    question_text: 'Write hello here'
                }
            ]
        }
    ]
}

describe('<Form />', () => {
    it('should trigger submission for a well-formed form', async () => {
        const submitFn = jest.fn();
        const { getByLabelText, getByTestId } = render(<Form job={testJob} onSubmit={submitFn} />);
        userEvent.click(getByTestId('test_hello_no'))
        userEvent.type(getByLabelText(/Write hello here/), 'Hello')
        userEvent.click(getByTestId('form-submit'))
        await waitFor(() => {
            expect(submitFn).toHaveBeenCalledWith({ test_hello: 'no', say_hello: 'Hello' })
        })
    })

    it('should not trigger submission for an incomplete form', async () => {
        const submitFn = jest.fn();
        const { getByTestId } = render(<Form job={testJob} onSubmit={submitFn} />);
        
        userEvent.click(getByTestId('form-submit'))
        expect(submitFn).toHaveBeenCalledTimes(0)    
    })
})