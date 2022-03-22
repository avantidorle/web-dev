import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem"

const WhoToFollowList = () => {
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