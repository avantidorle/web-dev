import WhoToFollowListItem from "./WhoToFollowListItem"
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return(
    <>
        <div className="pt-2 wd-border-corner">
            <div className="ps-4 pt-3 list-group-item"><h5><strong>Who to follow</strong></h5></div>
            <ul className="list-group">
            {
                who.map(whoItem => {
                    return(<WhoToFollowListItem who={whoItem}/>);
                })
            }
            </ul>
        </div>
    </>
    );
}
export default WhoToFollowList;