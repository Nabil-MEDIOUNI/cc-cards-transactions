// import types
const { CARDS, LOAD_CARDS, FAIL_CARDS } = require('../constants/cards');

// initialstate
const initialState = {
  dataCards: [],
  loadingCards: false,
  errorCards: '',
};

const cardsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_CARDS:
      return { ...state, loadingCards: true };
    case CARDS:
      return { ...state, dataCards: payload, loadingCards: false };
    case FAIL_CARDS:
      return { ...state, errorCards: payload };
    default:
      return state;
  }
};

export default cardsReducer;
