import React from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import TuitListItem from "./TuitListItem";
import '../css/index.css';
import {findAllTuits} from "../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch),[]);
  return (
  <>
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit =>
          <TuitListItem key={tuit._id}
                        tuit={tuit}/>)
      }
    </ul>
   </>
  );
}

export default TuitList;