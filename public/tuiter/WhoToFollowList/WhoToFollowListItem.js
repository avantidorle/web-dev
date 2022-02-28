const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="pt-1 pb-1 row">
                <div class="col-2">
                    <img class="wd-round" width="50px" height="50px" src=${who.avatarIcon}>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-7">
                    <span>${who.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    <br>
                    <span class="wd-handle">@${who.handle}</span>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-3">
                    <button class="wd-button rounded-pill"> Follow </button>
                </div>
            </div>
        </li>
    `)
}

export default WhoToFollowListItem;