import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats";
import {deleteTuit} from "../actions/tuits-actions";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    return(
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-1 me-2">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src={tuit.avatarIcon} alt="avatar"/>
                </div>
                <div className="col-9 me-2">
                    <div className="ps-1">
                        <span className="wd-author me-2"><strong>{tuit.userName}</strong></span>
                        <i className="fa fa-check-circle"></i>
                        <span className="wd-handle">@{tuit.handle}</span>
                        <span className="wd-time">. {tuit.time}</span>
                    </div>
                    <div className="ps-1">
                        <span>{tuit.title}</span>
                    </div>
                </div>
                <div className="col-1">
                    <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}></i>
                </div>
            </div>

            {
                tuit.image !== "" &&
                <div className="card mt-4" width="100%">
                    <img src={tuit.image} className="card-img-top rounded-top" alt="..."/>
                    <div className="card-body">
                        <span className="card-title" style={{"fontSize": "14pt"}}>{tuit.contentTitle}</span>
                        <p className="card-text wd-topic">{tuit.content}</p>
                    </div>
                </div>
            }

            <div>
                <div className="ms-2">

                <TuitStats tuit={tuit}/>

                </div>
            </div>
        </li>
    )
}

export default TuitListItem;