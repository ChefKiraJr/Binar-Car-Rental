import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import CarSearch from './pages/carSearch/CarSearch';
import SearchResult from './pages/searchResult/SearchResult';
import CarDetail from './pages/carDetail/CarDetail';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './pages/customer/payment/Payment';
import ETicket from './pages/customer/eTicket/ETicket';
import Payout from './pages/customer/payout/Payout';
import LoginPage from './pages/customer/loginPage/LoginPage';
import ProtectedRoute from './helpers/ProtectedRoute';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage page="login" />} />
          <Route path="/register" element={<LoginPage page="register" />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/car-search"
            element={
              <ProtectedRoute>
                <CarSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-result"
            element={
              <ProtectedRoute>
                <SearchResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="/car-detail/:anak"
            element={
              <ProtectedRoute>
                <CarDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment/:anak"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payout/:anak"
            element={
              <ProtectedRoute>
                <Payout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ticket/:anak"
            element={
              <ProtectedRoute>
                <ETicket />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
