import { uiReducer } from './ui.reducer';
import { uiInitialState } from './ui.init';
import { Ui } from './ui.interfaces';
import { DataLoaded } from './ui.actions';

describe('uiReducer', () => {
  it('should work', () => {
    const state: Ui = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = uiReducer(state, action);
    expect(actual).toEqual({});
  });
});
