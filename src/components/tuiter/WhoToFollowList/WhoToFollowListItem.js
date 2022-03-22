const WhoToFollowListItem = (
{
    who = {
                avatarIcon: './images/java.png',
                userName: 'Java',
                handle: 'Java'
       }
}
) => {
    return (
     <>
        <li className="list-group-item">
            <div className="pt-1 pb-1 row">
                <div className="col-2">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src={who.avatarIcon}/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-7">
                    <span>{who.userName}</span>
                    <i className="fa fa-check-circle"></i>
                    <br/>
                    <span className="wd-handle">@{who.handle}</span>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-3">
                    <button className="btn btn-primary btn-block rounded-pill"> Follow </button>
                </div>
            </div>
        </li>
    </>
    )
}

export default WhoToFollowListItem;