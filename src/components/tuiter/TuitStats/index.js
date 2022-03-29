import {useDispatch} from "react-redux";

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
        <span onClick={likeTuit}>
            {
              tuit.liked &&
              <i className="me-2 fa-solid fa-heart"
                 style={{color: 'red'}}></i>
            }
            {
              !tuit.liked &&
              <i className="me-2 fa-solid fa-heart"></i>
            }
            {tuit && tuit.likes}
        </span>
        </a>
    </div>

    <div className="p-2 pe-4 wd-float-left">
        <a className="wd-tabs-link" href="#"><i className="me-2 fa-solid fa-arrow-up-from-bracket"></i>{tuit.reshares}</a>
    </div>
    </>
  );
}
export default TuitStats;