const PostItem = (
{
    post = {
                   "userName": "New York Post",
                   "handle": "nypost",
                   "time": "24h",
                   "avatarIcon": "./images/nypostavatar.png",
                   "title": "Can`t sleep? Try these foods for a good night snooze https://trib.al/ZwVvTN4",
                   "image": "/images/nycpost.jpeg",
                   "contentTitle": "",
                   "content": "",
                   "comments": "15K",
                   "likes": "5.5K",
                   "retuits": "534",
                   "reshares": "234"
               }
}
) => {
    return (
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-1">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src={post.avatarIcon}/>
                </div>
                <div className="col-11">
                    <div className="ps-1">
                        <span className="wd-author"><strong>{post.userName}</strong></span>
                        <i className="fa fa-check-circle"></i>
                        <span className="wd-handle">@{post.handle}</span>
                        <span className="wd-time">. {post.time}</span>
                    </div>
                    <div className="ps-1">
                        <span>{post.title}</span>
                    </div>
                </div>
            </div>

            <div className="card mt-4" width="100%">
                <img src={post.image} className="card-img-top rounded-top" alt="..."/>
                <div className="card-body">
                    <span className="card-title" style={{"fontSize": "14pt"}}>{post.contentTitle}</span>
                    <p className="card-text wd-topic">{post.content}</p>
                </div>
            </div>

            <div>
                <div className="ms-2">
                    <div className="p-2 pe-4 wd-float-left">
                        <a className="wd-tabs-link" href="#"><i className="me-2 fa-regular fa-comment"></i>{post.comments}</a>
                    </div>

                    <div className="p-2 pe-4 wd-float-left">
                        <a className="wd-tabs-link" href="#"><i className='me-2 fa fa-retweet'></i>{post.retuits}</a>
                    </div>

                    <div className="p-2 pe-4 wd-float-left">
                        <a className="wd-tabs-link" href="#"><i className="me-2 fa-solid fa-heart"></i>{post.likes}</a>
                    </div>

                    <div className="p-2 pe-4 wd-float-left">
                        <a className="wd-tabs-link" href="#"><i className="me-2 fa-solid fa-arrow-up-from-bracket"></i>{post.reshares}</a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default PostItem;