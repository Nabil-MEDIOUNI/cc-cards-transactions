import { useState } from 'react';
import { Slider, AutoComplete, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { addFilter } from '../redux/actions/filters';

import 'antd/dist/antd.min.css';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2fr 2fr 150px;
  gap: 10px;
  margin: 15px 10px;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

const SearchBar = (): JSX.Element => {
  const dispatch: any = useDispatch();

  const [searchByAmount, setSearchByAmount]: any = useState([0, 600]);
  const [searchByTitle, setSearchByTitle] = useState('');

  const handleSearchChange: any = (event: any) => {
    setSearchByTitle(event);
    dispatch(addFilter('q', event));
  };

  const handleRangeChange: any = (event: any) => {
    setSearchByAmount(event);
    dispatch(addFilter('amount', event));
  };

  const onClearFilter = () => {
    setSearchByTitle('');
    setSearchByAmount([0, 600]);
    dispatch(addFilter('q', ''));
    dispatch(addFilter('amount', [0, 600]));
  };

  return (
    <Container className="SearchBar">
      <AutoComplete
        value={searchByTitle}
        placeholder="Search by Title"
        onChange={handleSearchChange}
      />
      <Slider
        range
        onChange={handleRangeChange}
        value={searchByAmount}
        max={600}
      />
      <Button onClick={onClearFilter}>Clear filters</Button>
    </Container>
  );
};

export default SearchBar;
