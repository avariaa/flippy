import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#111318',
            contrastText: '#fff',
        },
        secondary: {
            main: '#315cff',
        },
        background: {
            default: '#f7f4ec',
            paper: '#fff',
        },
        text: {
            primary: '#111318',
            secondary: '#666b78',
        },
    },

    shape: {
        borderRadius: 20,
    },

    typography: {
        fontFamily: 'Inter, Arial, sans-serif',

        h1: {
            fontWeight: 900,
            letterSpacing: '-0.045em',
        },
        h2: {
            fontWeight: 850,
            letterSpacing: '-0.035em',
        },
        h3: {
            fontWeight: 800,
            letterSpacing: '-0.03em',
        },
        button: {
            fontWeight: 700,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minHeight: 48,
                    paddingInline: 24,
                    borderRadius: 999,
                    textTransform: 'none',
                    boxShadow: 'none',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    boxShadow: '0 14px 40px rgba(17, 19, 24, 0.08)',
                },
            },
        },
    },
})

export default theme