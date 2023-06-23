import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./styles/layout";
import theme from "./styles/theme";
import Home from "./pages/index";
import Portfolio from "./pages/portfolio";
import ProjectRoute from "./projects/projectRoute";

const App = () => {
  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:projectId" element={<ProjectRoute />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </main>
  );
};

export default App;
