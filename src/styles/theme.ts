import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        teal: {
            '900': '#010D13',
        }
    },
    fonts: {
        heading: 'Comfortaa',
        body: 'Comfortaa',
    },
    styles: {
        global: {
            body: {
                bg: 'teal.900',
                color: 'cyan.600'
            }
        }
    }
})