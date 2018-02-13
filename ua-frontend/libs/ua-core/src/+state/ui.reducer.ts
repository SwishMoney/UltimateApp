import { Ui } from './ui.interfaces';
import { UiAction } from './ui.actions';

export function uiReducer(state: Ui, action: UiAction): Ui {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
