import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
    <>
    <div className="p-2 pe-4 wd-float-left">
         <a className="wd-tabs-link" href="#"><i className="me-2 fa-regular fa-comment"></i>{tuit.comments}</a>
    </div>

    <div className="p-2 pe-4 wd-float-left">
        <a className="wd-tabs-link" href="#"><i className='me-2 fa fa-retweet'></i>{tuit.retuits}</a>
    </div>

    <div className="p-2 pe-4 wd-float-left">
        <a className="wd-tabs-link">
            <i  onClick={() => updateTuit(dispatch, {...tuit, likes: tuit.likes + 1})} className="me-2 fa-solid fa-thumbs-up"></i>
            {tuit && tuit.likes}
        </a>
    </div>
    <div className="p-2 pe-4 wd-float-left">
        <a className="wd-tabs-link">
            <i  onClick={() => updateTuit(dispatch, {...tuit, dislikes: tuit.dislikes + 1})} className="me-2 fa-solid fa-thumbs-down"></i>
                {tuit && tuit.dislikes}
        </a>
    </div>

    <div className="p-2 pe-4 wd-float-left">
        <a className="wd-tabs-link" href="#"><i className="me-2 fa-solid fa-arrow-up-from-bracket"></i>{tuit.reshares}</a>
    </div>
    </>
  );
}
export default TuitStats;