import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer, NavBar } from "./components/";

import { Home, Surah } from "./pages";

const App = () => {
  return (
    <Box
      color="#272727"
      as="div"
      maxW={400}
      m="auto"
      className="App"
      fontFamily="Proxima Nova"
      position="relative"
      px="15px"
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/surah/:nomor" element={<Surah />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
