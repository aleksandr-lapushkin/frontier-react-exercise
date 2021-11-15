import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import formInstructions from '../data/form_instructions.json';
import Form from './Form';
const job = formInstructions as Frontier.Job;

const Root = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.text_color};
  font-family: sans-serif;
`

function App() {
  // Check your console to see the full instructions!
  console.log(job);

  return (
    <Root>
        <Form job={job} />
    </Root>
  );
}

export default App
