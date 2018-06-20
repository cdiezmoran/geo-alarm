const initialState = { counter: 0 };

const counter = (state = initialState, { type }) => {
  switch (type) {
    case 'ADD_TO_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};

export default counter;
