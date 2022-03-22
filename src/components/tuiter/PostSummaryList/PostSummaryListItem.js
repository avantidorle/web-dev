const PostSummaryListItem = ({
    post = {
                   "id": "111",
                   "topic": "Web Development",
                   "userName": "ReactJS",
                   "time": "2h",
                   "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                   "image": "../images/react.png"
    }
}) => {
    return (
    <>
        <li id={post.id} className="list-group-item">
            <div className="row">
                <div className="col-9">
                    <div className="ps-1">
                        <span className="wd-topic">{post.topic}</span>
                        <span className="wd-author">{post.userName}</span>
                        <i className="fa fa-check-circle"></i>
                        <span className="wd-time">. {post.time}</span>
                    </div>
                    <div className="ps-1">
                        <span>{post.title}</span>
                    </div>
                </div>
                <div className="col-3">
                    <img className="wd-post-image" src={post.image}/>
                </div>
            </div>
        </li>
    </>
    )
}

export default PostSummaryListItem;