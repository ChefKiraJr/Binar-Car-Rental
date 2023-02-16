import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import CarCatalogue from './components/carCatalogue/CarCatalogue';
import ResultForm from './components/resultForm/ResultForm';
import queryString from 'query-string';
import './searchResult.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/actions/getAllCarsAction';

const SearchResult = () => {
  // const [data, setData] = useState();
  const { search } = useLocation();
  const [input, setInput] = useState(queryString.parse(search));
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageStatus = cars && cars.length === 0 ? 'noResult' : 'searchResult';
  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car${search}`
  //     );
  //     setData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleChange = (e) => {
    let temp = { ...input };
    temp[e.target.name] = e.target.value;
    if (e.target.name === 'minPrice') {
      if (e.target.value === '0') {
        temp.maxPrice = '1000000';
      } else {
        temp.maxPrice = '';
      }
    }
    setInput(temp);
  };
  const handleEdit = () => {
    let temp = { ...input };
    let queries = queryString.stringify(temp);
    navigate(`/search-result?${queries}`);
    dispatch(getAllCars(queries));
  };
  // const handleEdit = async () => {
  //   try {
  //     let temp = { ...input };
  //     let queries = queryString.stringify(temp);
  //     navigate(`/search-result?${queries}`);
  //     const { data } = await axios.get(
  //       `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?${queries}`
  //     );
  //     setData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    dispatch(getAllCars(search));
  }, [search]);
  return (
    <CommonLayout page={pageStatus}>
      <div className="search-result__header"></div>
      <ResultForm
        input={input}
        handleChange={handleChange}
        handleEdit={handleEdit}
      />
      <CarCatalogue data={cars} />
    </CommonLayout>
  );
};

export default SearchResult;
