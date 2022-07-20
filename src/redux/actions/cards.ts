import { getCards } from '../../ApiClient';
import { FAIL_CARDS, CARDS, LOAD_CARDS } from '../constants/cards';

export const getCardsAction = () => async (dispatch: any) => {
  dispatch({ type: LOAD_CARDS });
  try {
    const result = await getCards();
    dispatch({ type: CARDS, payload: result });
  } catch (error: any) {
    dispatch({ type: FAIL_CARDS, payload: 'Error Occured!' });
  }
};
