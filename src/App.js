import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import CarSearch from "./pages/carSearch/CarSearch";
import SearchResult from "./pages/searchResult/SearchResult";
import CarDetail from "./pages/carDetail/CarDetail";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/customer/payment/Payment";
import ETicket from "./pages/customer/eTicket/ETicket";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/car-search" element={<CarSearch />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/car-detail/:anak" element={<CarDetail />} />
          <Route path="/payment/:anak" element={<Payment />} />
          <Route path="/ticket/:anak" element={<ETicket />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
