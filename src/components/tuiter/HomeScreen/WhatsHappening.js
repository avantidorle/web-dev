import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";
import '../css/index.css';

const WhatsHappening = () => {
  const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
  const dispatch = useDispatch();

  return (
    <>
    <div>
      <textarea className="wd-whats-happening-textarea mt-2 ps-2" placeholder="What's Happening"
               onChange={(e) => setNewTuit({...newTuit, title: e.target.value})}>
      </textarea>
                <div className="d-flex flex-row justify-content-between">
                          <div>
                              <i className="fas fa-image pe-2" style={{color: "#2a9fd6"}}></i>
                              <i className="fas fa-chart-line pe-2" style={{color: "#2a9fd6"}}></i>
                              <i className="fas fa-smile pe-2" style={{color: "#2a9fd6"}}></i>
                              <i className="fas fa-calendar" style={{color: "#2a9fd6"}}></i>
                          </div>
                          <button className="btn btn-primary btn-block rounded-pill mb-2"
                          onClick={() => createTuit(dispatch, newTuit)}>
                              Tuit
                          </button>
                </div>
    </div>
    </>
  );
}
export default WhatsHappening;