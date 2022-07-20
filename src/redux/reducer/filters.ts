import { ADD_FILTER } from '../constants/transactions';

const initialState = {
  filters: { q: '', amount: [0, 600] },
};

const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FILTER:
      const { key, value } = action.payload;
      return { filters: { ...state.filters, [key]: value } };

    default:
      return state;
  }
};

export default filterReducer;
