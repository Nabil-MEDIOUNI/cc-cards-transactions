import { ADD_FILTER } from '../constants/transactions';

const addFilter = (key: string, value: any) => async (dispatch: any) => {
  dispatch({ type: ADD_FILTER, payload: { key, value } });
};

export { addFilter };
