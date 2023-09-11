import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type CharInfo = {
  name: string;
  gender: string;
  titles: string[];
};

export type State = {
  hasBeenFetched: boolean;
  isFetching: boolean;
  charInfo: CharInfo;
  errorMessage: string;
};

export type DispatchType = ThunkDispatch<State, null, AnyAction>;
