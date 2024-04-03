import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
   brand: {
     100: "#f7fafc",
     200: "#1a202c",
     300: "#008792",
     400: "#024fc9",
     500: "teal"
   }
}

const fonts = {
   body: 'Tahoma',
   heading: 'Courier New'
}
const theme  = extendTheme({
   colors,
   fonts
})

ReactDOM.createRoot(document.getElementById('root')!).render(
 <ChakraProvider theme={theme}>
    <App />
 </ChakraProvider>
)
