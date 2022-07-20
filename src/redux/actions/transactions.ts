import { getTransactions } from '../../ApiClient';
import {
  FAIL_TRANSACTIONS,
  TRANSACTIONS,
  LOAD_TRANSACTIONS,
} from '../constants/transactions';

export const getTransactionsAction = (id: string) => async (dispatch: any) => {
  dispatch({ type: LOAD_TRANSACTIONS });
  try {
    const result = await getTransactions(id);
    dispatch({ type: TRANSACTIONS, payload: result });
  } catch (error: any) {
    dispatch({ type: FAIL_TRANSACTIONS, payload: 'Error Occured!' });
  }
};
