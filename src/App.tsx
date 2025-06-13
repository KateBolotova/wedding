import "./App.css";
import Starting from "./components/Starting";
import Date from "./components/Date";
import Location from "./components/Location";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Plan from "./components/Plan";
import { Box } from "@mui/material";
import Palette from "./components/Palette";
import Request from "./components/Request";
import Intro from "./components/Intro";
import Details from "./components/Details";
import Form from "./components/Form";

const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: "Dance Partner",
      color: "#5B755C",
    },
    h2: {
      fontFamily: "Dance Partner",
      fontSize: "32px",
      fontWeight: 400,
      lineHeight: "100%",
      color: "#5B755C",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Starting />
        <Intro />
        <Date />
        <Location />
        <Plan />
        <Request />
        <Palette />
        <Form />
        <Details />
      </Box>
    </ThemeProvider>
  );
}

export default App;
