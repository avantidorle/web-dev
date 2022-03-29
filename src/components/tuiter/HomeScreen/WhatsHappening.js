import React, {useState} from "react";
import {useDispatch} from "react-redux";
import '../css/index.css';

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
  dispatch({type: 'create-tuit',
     tuit: whatsHappening
   });
  }
  return (
    <>
    <div>
      <textarea className="wd-whats-happening-textarea" placeholder="What's Happening" value={whatsHappening}
               onChange={(event) =>
        setWhatsHappening(event.target.value)}>
      </textarea>
                <div className="d-flex flex-row justify-content-between">
                          <div>
                              <i className="fas fa-image pe-2" style={{color: "#2a9fd6"}}></i>
                              <i className="fas fa-chart-line pe-2" style={{color: "#2a9fd6"}}></i>
                              <i className="fas fa-smile pe-2" style={{color: "#2a9fd6"}}></i>
                              <i className="fas fa-calendar" style={{color: "#2a9fd6"}}></i>
                          </div>
                          <button className="btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}>
                              Tuit
                          </button>
                </div>
    </div>
    </>
  );
}
export default WhatsHappening;