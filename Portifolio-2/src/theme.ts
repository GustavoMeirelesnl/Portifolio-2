import {createTheme, responsiveFontSizes} from "@mui/material";


let theme = createTheme({
    palette: {
      primary: {
        main: '#3F82BE',
      },
      secondary: {
        main: '#B7E0E7',
      },
    },
    typography:{
      fontFamily:"Helvetica Neue", 
    }
  });
  theme = responsiveFontSizes (theme)
  export default theme