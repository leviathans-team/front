import AppRouter from "./router";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5"
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
