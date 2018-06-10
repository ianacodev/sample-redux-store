import { AccountDetails, PaymentDetails } from '../models';

export const Actions = {
  ACCOUNT_DETAILS: '[Details] Account Details',
  PAYMENT_DETAILS: '[Details] Payment Details',
};

// action creators
export class AccountDetailsAction {
  readonly type: string = Actions.ACCOUNT_DETAILS;
  payload: AccountDetails;
  constructor(payload: AccountDetails) {
    this.payload = payload;
  }
}

export class PaymentDetailsAction {
  readonly type: string = Actions.PAYMENT_DETAILS;
  payload: PaymentDetails;
  constructor(payload: PaymentDetails) {
    this.payload = payload;
  }
}
