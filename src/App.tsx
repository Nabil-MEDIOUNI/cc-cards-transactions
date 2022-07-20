import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCardsAction } from './redux/actions/cards';
import { getTransactionsAction } from './redux/actions/transactions';

import { Card, Transaction } from './interfaces';

function App() {
  const dispatch: any = useDispatch();
  const { dataCards } = useSelector((state: any) => state.cardsReducer);
  const { dataTransactions } = useSelector(
    (state: any) => state.transactionsReducer,
  );

  useEffect(() => {
    dispatch(getCardsAction());
    dispatch(getTransactionsAction(dataCards[0]?.id));
  }, [dataCards, dispatch]);

  const onCardSelect = (id: string) => {
    dispatch(getTransactionsAction(id));
  };

  return (
    <div className="App">
      <h1>Cards & Transactions</h1>
      {dataCards.map((card: Card) => (
        <div key={card.id} onClick={() => onCardSelect(card.id)}>
          {card.description}
        </div>
      ))}
      {dataTransactions.map((transaction: Transaction) => (
        <p key={transaction.id}>{transaction.description}</p>
      ))}
    </div>
  );
}

export default App;
