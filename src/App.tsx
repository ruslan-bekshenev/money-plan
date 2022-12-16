import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import PlanList from "./pages/PlanList"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<PlanList />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
