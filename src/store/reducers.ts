import { Action, AccountDetails, PaymentDetails, State } from '../models';
import { Actions } from './actions';

const initialState = {
  loaded: false,
  loading: false,
  data: {},
};

export function accountDetailsReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case Actions.ACCOUNT_DETAILS: {
      const accountDetails: AccountDetails = action.payload;
      const data = accountDetails;
      console.log('data', data);
      return {
        ...state,
        data,
      };
    }
  }
  return state;
}

export function paymentDetailsReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case Actions.PAYMENT_DETAILS: {
      const paymentDetails = action.payload;
      const data = paymentDetails;
      return {
        ...state,
        data,
      };
    }
  }
  return state;
}
