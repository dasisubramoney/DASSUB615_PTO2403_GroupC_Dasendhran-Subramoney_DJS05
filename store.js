/**
 * @typedef {object}
 * @prop {integer} counter
 */


/**
 * @typedef {object} State 
 * @prop {'ADD', 'Subtract', 'Reset'} phases 
 * @prop {Record<integer, Task} tasks 
 */


/**
 * @callback getstate
 * @returns {State} 
 */

/** 
 * @callback Dispatch 
 * @param {Action} action 
 */

/** 
 * @callback EmptyFn
 */

/** 
 * @callback Subscribe
 * @param {State} prev
 * @param {State} next 
 * @return {EmptyFn}  
 */



/**
 * @type {Array<Subscribe>}
 */
const subscribers = []

/**
 * @type {Array<State>}
 */
const states = []


/**
 * @return {State}
 */
export const getState = () => {
    return Object.freeze({...states[0]});
}

/**
 * @param {Action} action
 */
const dispatch = (action) => {
  
}




const initialState = {
    counter: 0,
};

const actionTypes = {
    INCREMENT: "ADD",
    DECREMENT: "SUBTRACT",
    RESET: "RESET",
};

// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return { ...state, counter: state.counter + 1 };
      case actionTypes.DECREMENT:
        return { ...state, counter: state.counter - 1 };
      case actionTypes.RESET:
        return { ...state, counter: 0 };
      default:
        return state;
    }
  }

  // Create the store with the reducer
const store = createStore(reducer);

// Subscribe to store changes (for example, to log state updates)
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Dispatch actions to modify the state
store.dispatch({ type: actionTypes.INCREMENT }); // Increment counter
store.dispatch({ type: actionTypes.DECREMENT }); // Decrement counter
store.dispatch({ type: actionTypes.RESET });     // Reset counter