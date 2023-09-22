# Learning Redux

Redux is a powerful tool that helps us manage state, or data, in our applications. It utilizes _*STORE*_, _*ACTIONS*_, _*REDUCERS*_, and _*DISPATCH*_ to store and manipulate data.

## The Building Blocks

Each of these building blocks plays a vital role in the data chain of our applications.

### `STORE`

Store is as it sounds, it stores our data. We configure a store using 'configureStore' imported from [redux toolkit](https://www.npmjs.com/package/@reduxjs/toolkit).

### `ACTION`

Actions are intentions. We define them as an intent to change state. Actions are called and in turn call the _*REDUCERS*_ to compute and perform our intentions to update our state. Parameters can be passed to actions, depending on our use case, that are then passed into our _*REDUCERS*_.

### `REDUCERS`

Reducers are triggered by our _*ACTIONS*_. Reducers perform the 'heavy lifting' by executing and updating the state in our _*STORE*_. Reducers are triggered by _*ACTIONS*_ that are triggered by _*DISPATCH*_.

### `DISPATCH`

Dispatch is what glues our _*ACTIONS*_ to our _*REDUCERS*_. When we call dispatch we pass in our _*ACTION*_ function. Our _*ACTION*_ function returns a 'type' and<sup>\*</sup>, if passed parameters, a 'payload'. Our dispatch function then searches our reducers for the cooresponding 'type'. Once dispatch finds the reducer that has our 'type' it will then trigger that _*REDUCER*_ and state is then changed and saved to _*STORE*_ for future reference.

<sub><sup>\*</sup>Payload can also be returned without parameters passed to the action.</sub>

## Summary

In conclusion Redux is a powerful tool in your developer tool kit. It can greatly simplify state especially within a large codebase. With these building blocks we can build robust web applications that keep our data safe, secure, and flowing properly.

## Thoughts on State Management

-Breaking up our Redux structure into bite size pieces can make the code easier to manage.
-Seperating our reducers based on funcitonality can help prevent conflicts<sub>maybe performance?</sub> during dispatch.
-Using the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) can help with visualizing state for debugging.
-Structuring state is important to consider when building out an application. Get the data where it needs to be and keep it out of where it doesn't.
