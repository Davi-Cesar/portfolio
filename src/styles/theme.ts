import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        teal: {
            '900': '#010D13',
        },
        white: {
            '50': '#e2f4ff'
        }
    },
    fonts: {
        heading: 'Comfortaa',
        body: 'Comfortaa',
    },
    styles: {
        global: {
            body: {
                h: '100%',
                fontSize: { 
                    base: '18px', 
                    md: '20px', 
                    lg: '22px' 
                },
                h2: '64px',
                p: { base: "0 0%", md: "0 5%", lg: "0 10%" },
                // bgGradient: 'linear(169.44deg, #1F1D2B 1.85%, rgba(65, 48, 90, 0.08) 98.72%)',
                bg:'gray.900',
                color: 'white'
            }
        }
    }
})