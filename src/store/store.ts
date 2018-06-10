import { Action, Reducers, State } from '../models';

// contains subscribers
// manages reducers
// contains state
export class Store {
  private subscribers: Function[];
  private reducers: Reducers;
  private state: State;

  constructor(reducers: Reducers = {}, initialState: State = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value(): State {
    return this.state;
  }

  subscribe(fn: Function): void {
    console.log('fn', fn);
    this.subscribers = [...this.subscribers, fn];
    this.notify();
  }

  dispatch(action: Action): void {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  reduce(state: State, action: Action | Object): State {
    const newState = {};
    for (const property in this.reducers) {
      newState[property] = this.reducers[property](state[property], action);
    }
    return newState;
  }

  // run each subscriber method, passing in the new state
  notify(): void {
    this.subscribers.forEach(fn => fn(this.state)); // state
  }
}
