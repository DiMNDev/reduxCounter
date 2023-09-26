# Learning Redux

Redux is a powerful tool that helps us manage state, or data, in our applications. It utilizes _*STORE*_, _*ACTIONS*_, _*REDUCERS*_, and _*DISPATCH*_ to store and manipulate data.

## The Building Blocks

Each of these building blocks plays a vital role in the data chain of our applications.

### `STORE`

Store is as it sounds, it stores our data. We configure a store using 'configureStore' imported from [redux toolkit](https://www.npmjs.com/package/@reduxjs/toolkit).

_*In this snippet we configure our store*_

```javascript
import { configureStore } from "@reduxjs/toolkit";

//I'll go over reducers more below
import allReducers from "./reducers";

export const store = configureStore({
  reducer: allReducers,
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
```

_*Above I have already combined all of my reducers and pass "allReducers" into the store.*_

### `ACTION`

Actions are intentions. We define them as an intent to change state. Actions are called and in turn call the _*REDUCERS*_ to compute and perform our intentions to update our state. Parameters can be passed to actions, depending on our use case, that are then passed into our _*REDUCERS*_.

_*Creating an action is super simple!*_

```javascript
import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("increment");
export const login = createAction("login");
```

_*Note: The value passed into createAction should match a case created in your reducer.*_

### `REDUCERS`

Reducers are triggered by our _*ACTIONS*_. Reducers perform the 'heavy lifting' by executing and updating the state in our _*STORE*_. Reducers are triggered by _*ACTIONS*_ that are triggered by _*DISPATCH*_.

```javascript
import { createReducer } from "@reduxjs/toolkit";
import { increment } from "../actions";

const counterReducer = createReducer(0, (builder) => {
  builder.addCase(increment, (state, action) => {
    return (state += action.payload);
  });
});
```

_*I mentioned earlier, above that I already combined my reducers. That's what this looks like.*_

```javascript
import { combineReducers } from "redux";
import counterReducer from "./counter";
import loginReducer from "./isLogged";
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loginReducer,
});
```

### `DISPATCH`

Dispatch is what glues our _*ACTIONS*_ to our _*REDUCERS*_. When we call dispatch we pass in our _*ACTION*_ function. Our _*ACTION*_ function returns a 'type' <sup>\*</sup>and, if passed parameters, a 'payload'. Our dispatch function then searches our reducers for the cooresponding 'type'. Once dispatch finds the reducer that has our 'type' it will then trigger that _*REDUCER*_ and state is then changed and saved to _*STORE*_ for future reference.

<sub><sup>\*</sup>Payload can also be returned without parameters passed to the action.</sub>

_*Defining dispatch*_

```javascript
import { useDispatch } from "react-redux";
//useDispatch to call actions
const dispatch = useDispatch();
```

_*Using dispatch in context*_

```jsx
<button
  className="incrementBtn"
  onClick={() => dispatch(canLogin() ? login() : increment(5))}
>
  +5
</button>

//Dispatch simplified -- dispatch will call the action increment -> find reducer with matching case -> perform work/update store.
<button className="incrementBtn" onClick={() => dispatch(increment(5))}>
  +5
</button>
```

_*The above code is triggered by clicking the button. When we click the button the ternary operator checks if canLogin() returns true then dispatch will call the action login() else dispatch will call the action increment(). Increment and Login in this snippet are both actions created in actions/index.js. *_

All of these things are great but how do we _*SELECT*_ them from the store? The _*useSelector()*_ function baked right into redux.

### `useSelector`

We use "useSelector" to access our store. We pass in an arrow function we point, using dot operator syntax, to the data that we are wanting to access within the store. This arrow function will the return the value for us to use in our application.

```jsx
import { useSelector } from "react-redux";
const counter = useSelector((state) => state.counter);
```

_*Now we can use counter to access the data for use in our application.*_

## Summary

In conclusion Redux is a powerful tool in your developer tool kit. It can greatly simplify state especially within a large codebase. With these building blocks we can build robust web applications that keep our data safe, secure, and flowing properly.

## Thoughts on State Management

-Breaking up our Redux structure into bite size pieces can make the code easier to manage.
-Seperating our reducers based on funcitonality can help prevent conflicts<sub>maybe performance?</sub> during dispatch.
-Using the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) can help with visualizing state for debugging.
-Structuring state is important to consider when building out an application. Get the data where it needs to be and keep it out of where it doesn't.
