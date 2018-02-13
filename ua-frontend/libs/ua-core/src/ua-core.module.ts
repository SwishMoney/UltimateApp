import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { uiReducer } from './+state/ui.reducer';
import { uiInitialState } from './+state/ui.init';
import { UiEffects } from './+state/ui.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ ui: uiReducer }, { initialState: { ui: uiInitialState } }),
    EffectsModule.forRoot([UiEffects]),
    StoreRouterConnectingModule
  ],
  providers: [UiEffects]
})
export class UaCoreModule {}
