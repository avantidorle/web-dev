const PostItem = (post) => {
    return (`
        <li class="list-group-item pt-3">
            <div class="row">
                <div class="col-1">
                    <img class="wd-who-to-follow-img" width="50px" height="50px" src=${post.avatarIcon}>
                </div>
                <div class="col-11">
                    <div class="ps-1">
                        <span class="wd-author"><strong>${post.userName}</strong></span>
                        <i class="fa fa-check-circle"></i>
                        <span class="wd-handle">@${post.handle}</span>
                        <span class="wd-time">. ${post.time}</span>
                    </div>
                    <div class="ps-1">
                        <span>${post.title}</span>
                    </div>
                </div>
            </div>

            <div class="card mt-4" style="width: 100%;">
                <img src=${post.image} class="card-img-top rounded-top" alt="...">
                <div class="card-body">
                    <span class="card-title" style="font-size: 14pt;">${post.contentTitle}</span>
                    <p class="card-text wd-topic">${post.content}</p>
                </div>
            </div>

            <div>
                <div class="ms-2">
                    <div class="p-2 pe-4 wd-float-left">
                        <a class="wd-tabs-link" href="#"><i class="me-2 fa-regular fa-comment"></i>${post.comments}</a>
                    </div>

                    <div class="p-2 pe-4 wd-float-left">
                        <a class="wd-tabs-link" href="#"><i class='me-2 fa fa-retweet'></i>${post.retuits}</a>
                    </div>

                    <div class="p-2 pe-4 wd-float-left">
                        <a class="wd-tabs-link" href="#"><i class="me-2 fa-solid fa-heart"></i>${post.likes}</a>
                    </div>

                    <div class="p-2 pe-4 wd-float-left">
                        <a class="wd-tabs-link" href="#"><i class="me-2 fa-solid fa-arrow-up-from-bracket"></i>${post.reshares}</a>
                    </div>
                </div>
            </div>
        </li>
    `)
}

export default PostItem;