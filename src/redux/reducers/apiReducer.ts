import { CharInfo, State } from '../../types';

type ActionType = {
  type: string;
  payload: CharInfo | string;
};

const emptyChar: CharInfo = {
  name: '',
  gender: '',
  titles: [],
};

const initialState: State = {
  hasBeenFetched: false,
  isFetching: false,
  charInfo: emptyChar,
  errorMessage: '',
};

const apiReducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return {
        ...state,
        hasBeenFetched: true,
        isFetching: true,
        charInfo: emptyChar,
        errorMessage: '',
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        charInfo: action.payload as CharInfo,
        errorMessage: '',
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        isFetching: false,
        charInfo: emptyChar,
        errorMessage: action.payload as string,
      };
    default:
      return state;
  }
};

export default apiReducer;
