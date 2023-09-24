import { Inter } from '@next/font/google'
import { createGlobalStyle } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const GlobalStyles = createGlobalStyle`
:root{
    --red: #E40F0F;
    --grey: #1D1D1D;
    --light-red: #DF8686;
    --light-grey:#747474;
    --border:#D5D5D5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${inter.style.fontFamily};
    color: var(--grey); 
    line-height: 121%;
}

html, body {
    height: 100%;
}

a {
    text-decoration: none;
}

ul {
    list-style-type:none
}
button{cursor:pointer}

`

export default GlobalStyles
