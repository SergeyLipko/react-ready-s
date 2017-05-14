const INITIAL_STATE = {
  basicData: [1, 2, 3],
  loadedData: []
};

const basicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'BASIC_ACTION':
      return {
        ...state,
        basicData: [
          ...state.basicData,
          action.data
        ]
      };

    case 'SET_LOADED_DATA':
      return {
        ...state,
        loadedData: [
          ...state.loadedData,
          action.data
        ]
      };

    default:
      return state
  }
};

export default basicReducer;