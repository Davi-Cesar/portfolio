import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        teal: {
            '900': '#010D13',
        },
        white: {
            '50': '#e2f4ff'
        },
        cyan: {
            '600': '#429aff', 
        }
    },
    fonts: {
        heading: 'Outfit',
        body: 'Outfit',
    },
    styles: {
        global: {
            html: {
                scrollBehavior: "smooth",  
            },      
            body: {
                
                '&::-webkit-scrollbar':{
                    paddingRight: '4px',
                    width: '15px',
                    background: '#010D13',
                },
               '&::-webkit-scrollbar-track': {
                    background: 'transparent',      
                },
                
                '&::-webkit-scrollbar-thumb':{
                    borderRadius: '10px',
                    background: '#2D3748',
                    border: '3px solid #010D13',
                },
                h: '100%',
                h2: {
                    fontSize: '40px',
                    
                    p: { base: "0rem 2rem", md: "0px", lg: "10px" }
                },
                fontSize: {  
                    lg: '1.1rem' 
                },
               
                p: { base: "0 0%", md: "0 5%", lg: "0 10%" },
                
                bg:"teal.900",
                color: 'white'
            }
        }
    }
})