import { CharInfo, DispatchType } from '../../types';

const FETCH_STARTED = 'FETCH_STARTED';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED';

const fetchStarted = () => {
  return { type: FETCH_STARTED };
};

const fetchSuccess = (payload: CharInfo) => {
  return { type: FETCH_SUCCESS, payload };
};

const fetchFailed = (payload: CharInfo) => {
  return { type: FETCH_FAILED, payload };
};

export const fetchApData = (charName: string) => {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${charName}`);
      const data = await response.json();
      const { name, gender, titles } = data[0];
      const charInfo = { name, gender, titles };
      dispatch(fetchSuccess(charInfo));
    } catch (e: any) {
      dispatch(fetchFailed(e.message));
    }
  };
};
