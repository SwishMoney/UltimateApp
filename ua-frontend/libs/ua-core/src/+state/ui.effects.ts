import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { UiState } from './ui.interfaces';
import { LoadData, DataLoaded } from './ui.actions';

@Injectable()
export class UiEffects {
  @Effect()
  loadData = this.dataPersistence.fetch('LOAD_DATA', {
    run: (action: LoadData, state: UiState) => {
      return {
        type: 'DATA_LOADED',
        payload: {}
      };
    },

    onError: (action: LoadData, error) => {
      console.error('Error', error);
    }
  });

  constructor(private actions: Actions, private dataPersistence: DataPersistence<UiState>) {}
}
