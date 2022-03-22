import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo";

const Labs = () => {
    return(
      <>
        <Link to="/hello"> Hello</Link> |
        <Link to="/tuiter/home">Tuiter</Link>
        <h1>Labs</h1>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
      </>
    )
};

export default Labs;