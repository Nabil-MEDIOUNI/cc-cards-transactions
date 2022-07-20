import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar';
import Cards from './components/Cards';

import { getCardsAction } from './redux/actions/cards';
import { getTransactionsAction } from './redux/actions/transactions';

import { Container, TitleHeader } from './utils/styles';
import Transactions from './components/Transactions';

function App() {
  const dispatch: any = useDispatch();
  const { dataCards } = useSelector((state: any) => state.cardsReducer);

  const [selectedCard, setSelectedCard] = useState('');

  useEffect(() => {
    dispatch(getCardsAction());
    dispatch(getTransactionsAction(dataCards[0]?.id));
    setSelectedCard(dataCards[0]?.id);
  }, [dataCards, dispatch]);

  return (
    <Container className="App">
      <TitleHeader>Cards & Transactions</TitleHeader>
      <Cards setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
      <SearchBar />
      <Transactions />
    </Container>
  );
}

export default App;
