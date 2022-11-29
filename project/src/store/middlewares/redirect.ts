import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import browseHistory from '../../browser-history';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'auth/redirectToRoute') {
          browseHistory.push(action.payload);
        }

        return next(action);
      };
