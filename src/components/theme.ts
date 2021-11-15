import formInstructions from '../data/form_instructions.json';

const job = formInstructions as Frontier.Job;
const theme = {
    primary: job.theme.primary_color ?? '#ff0000',
    secondary: job.theme.secondary_color ?? '#00ff00',
    background: job.theme.background_color ?? '#ffffff',
    text_color: job.theme.text_color ?? '#000000',
    text_color_secondary: job.theme.text_color_secondary ?? '#ffffff',
    space_small: '0.2rem',
    space_med: '0.5rem',
    space_large: '1rem'
  }
export type AppThemeType = typeof theme

export default theme;