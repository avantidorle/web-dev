import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js"

const WhoToFollowList = () => {
    return(`
    <div class="pt-2 wd-border-corner">
        <div class="ps-4 pt-3 list-group-item"><h4><strong>Who to follow</strong></h4></div>
        <ul class="list-group">
        ${
            who.map(whoItem => {
                return(WhoToFollowListItem(whoItem));
            }).join('')
        }
        </ul>
        </div>
        </div>
    `);
}
export default WhoToFollowList;