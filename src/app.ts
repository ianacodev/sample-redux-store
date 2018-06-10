import * as fromStore from './store';
import { renderDetails } from './util';
import { Reducers } from './models';
import { AccountDetailsMocks, PaymentDetailsMocks } from './mocks';

const accountDetailsCardEl = document.querySelector(
  '.account-details-card',
) as HTMLLIElement;
const paymentDetailsCardEl = document.querySelector(
  '.payment-details-card',
) as HTMLLIElement;
const changeAccountDetailsBtnEl = document.querySelector(
  '.change-account-details-btn',
) as HTMLLIElement;
const changePayDetailsBtnEl = document.querySelector(
  '.change-pay-details-btn',
) as HTMLLIElement;

const reducers: Reducers = {
  accountDetails: fromStore.accountDetailsReducer,
  paymentDetails: fromStore.paymentDetailsReducer,
};

const store = new fromStore.Store(reducers);
let accountIndex = 0;
let payIndex = 0;

changeAccountDetailsBtnEl.addEventListener(
  'click',
  () => {
    const accountDetails = AccountDetailsMocks[accountIndex];
    store.dispatch(new fromStore.AccountDetailsAction(accountDetails));
    accountIndex < 2 ? accountIndex++ : (accountIndex = 0);
  },
  false,
);

changePayDetailsBtnEl.addEventListener(
  'click',
  () => {
    const paymentDetails = PaymentDetailsMocks[payIndex];
    store.dispatch(new fromStore.PaymentDetailsAction(paymentDetails));
    payIndex < 2 ? payIndex++ : (payIndex = 0);
  },
  false,
);

store.subscribe(state =>
  renderDetails(accountDetailsCardEl, state.accountDetails.data),
);
store.subscribe(state =>
  renderDetails(paymentDetailsCardEl, state.paymentDetails.data),
);

changeAccountDetailsBtnEl.click();
changePayDetailsBtnEl.click();
