// import types
const {
  TRANSACTIONS,
  LOAD_TRANSACTIONS,
  FAIL_TRANSACTIONS,
} = require('../constants/transactions');

// initialstate
const initialState = {
  dataTransactions: [],
  loadingTransactions: false,
  errorTransactions: '',
};

const transactionsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_TRANSACTIONS:
      return { ...state, loadingTransactions: true };
    case TRANSACTIONS:
      return {
        ...state,
        dataTransactions: payload,
        loadingTransactions: false,
      };
    case FAIL_TRANSACTIONS:
      return { ...state, errorTransactions: payload };
    default:
      return state;
  }
};

export default transactionsReducer;
