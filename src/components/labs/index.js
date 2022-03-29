import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
      <>
        <Link to="/hello"> Hello</Link> |
        <Link to="/tuiter">Tuiter</Link>
        <h1>Labs</h1>
        <h4>A7 labs</h4>
        <ReduxExamples/>
        <h4>A6 labs</h4>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
      </>
    )
};

export default Labs;