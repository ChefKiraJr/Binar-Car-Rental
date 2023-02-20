import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import CarSearch from './pages/carSearch/CarSearch';
import SearchResult from './pages/searchResult/SearchResult';
import CarDetail from './pages/carDetail/CarDetail';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/customer/login/Login';
import Register from './pages/customer/register/Register';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/car-search" element={<CarSearch />} />
          <Route path='/customer/login' element={ <Login />} />
          <Route path='/customer/register' element={<Register />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/car-detail/:anak" element={<CarDetail />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
