import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Todos from "./todos-component";
import todos from "./reducers/todos-reducer";
import hello from "./reducers/hello";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);

const ReduxExamples = () => {
  return(
  <Provider store={store}>
    <div>
      <h2>Redux Examples</h2>
      <Todos/>
      <HelloReduxExampleComponent/>
    </div>
    </Provider>
  );
};
export default ReduxExamples;