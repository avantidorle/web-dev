const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div>
                        <span class="wd-topic">${post.topic}</span>
                        <span class="wd-author">${post.userName}</span>
                        <i class="fa fa-check-circle"></i>
                        <span class="wd-time">. ${post.time}</span>
                    </div>
                    <div class="ps-1">
                        <span>${post.title}</span>
                    </div>
                </div>
                <div class="col-3">
                    <img class="wd-post-image" src=${post.image}/>
                </div>
            </div>
        </li>
    `)
}

export default PostSummaryItem;