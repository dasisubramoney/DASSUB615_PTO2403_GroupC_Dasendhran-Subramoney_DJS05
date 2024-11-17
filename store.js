// Set initial state
const initialState = {
    counter: 0,
};

// Set actiontypes
const actionTypes = {
    INCREMENT: "ADD",
    DECREMENT: "SUBTRACT",
    RESET: "RESET",
};

// Reducer function, to increase, decrease and reset counter 
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

// Create the store 
function createStore(reduce) {
  let state = reducer.state; 

  const subscription = [];

  return {
      getState() {
        return Object.freeze({...state[0]});
      },

      dispatch(action) {
        const prev = getState();
        const next = reducer(prev, action);

        subscription.forEach((item) => item());
      },

      subscribe(subscription){
        subscribers.push(subscription)
        const handler = (item) => item != subscription;
      
        const newSubscribers = subscribers.filter(handler)
        subscribers = newSubscribers;
      }

    };
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