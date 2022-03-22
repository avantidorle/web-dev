import posts from "./posts.json";
import PostSummaryListItem from "./PostSummaryListItem.js"

const PostSummaryList = () => {
    return(
    <>
        <ul className="list-group">
        {
            posts.map(post => {
                return(<PostSummaryListItem post={post}/>);
            })
        }
        </ul>
    </>
    );
}
export default PostSummaryList;