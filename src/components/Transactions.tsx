import { useSelector } from 'react-redux';
import { SyncOutlined } from '@ant-design/icons';

import { TransactionInterface } from '../interfaces';

import {
  LoadingContainer,
  TransactionContainer,
  TransactionsTypography,
} from '../utils/styles';

function Transactions() {
  const { filters } = useSelector((state: any) => state.filterReducer);
  const { dataTransactions, loadingTransactions } = useSelector(
    (state: any) => state.transactionsReducer,
  );

  const filteredTransactions = dataTransactions?.filter(
    (transaction: any) =>
      transaction?.description
        ?.toLowerCase()
        ?.indexOf(filters.q.toLowerCase()) !== -1 &&
      transaction?.amount > filters?.amount[0] &&
      transaction?.amount < filters?.amount[1],
  );

  if (loadingTransactions) {
    return (
      <LoadingContainer>
        <SyncOutlined spin />
      </LoadingContainer>
    );
  }

  if (filteredTransactions.length === 0) {
    return <ErrorMessage>Empty List!</ErrorMessage>;
  }

  return (
    <>
      {filteredTransactions.map((transaction: TransactionInterface) => (
        <TransactionContainer key={transaction.id}>
          <TransactionsTypography>
            {transaction.description}
          </TransactionsTypography>
          <TransactionsTypography key={transaction.id}>
            {transaction.amount}€
          </TransactionsTypography>
        </TransactionContainer>
      ))}
    </>
  );
}

export default Transactions;
