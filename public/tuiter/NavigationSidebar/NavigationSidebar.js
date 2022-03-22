const NavigationSidebar = (active) => {
    return(`
            <div class="pt-2 list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>

                ${active === 'home'? `<a class="list-group-item active" href="../HomeScreen/index.html">` : `<a class="list-group-item" href="../HomeScreen/index.html">`}
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-house"></i></div>
                    <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Home</div>
                </a>
                ${active === 'explore'? `<a class="list-group-item active" href="../ExploreScreen/index.html">` : `<a class="list-group-item" href="../ExploreScreen/index.html">`}
                    <div class="wd-float-left" width="20%"><i class="fa fa-hashtag"></i></div>
                    <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Explore</div>
                </a>

                ${active === 'notifications'? `<a class="list-group-item active" href="#">` : `<a class="list-group-item" href="#">`}
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-bell"></i></div>
                    <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Notifications</div></a>
                </a>

                ${active === 'messages'? `<a class="list-group-item active" href="#">` : `<a class="list-group-item" href="#">`}
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-envelope"></i></div>
                    <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Messages</div></a>
                </a>

                ${active === 'bookmarks'? `<a class="list-group-item active" href="#">` : `<a class="list-group-item" href="#">`}
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-bookmark"></i></div>
                    <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Bookmarks</div></a>
                </a>

                ${active === 'lists'? `<a class="list-group-item active" href="#">` : `<a class="list-group-item" href="#">`}
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-list"></i></div>
                    <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Lists</div></a>
                </a>

                ${active === 'profile'? `<a class="list-group-item active" href="#">` : `<a class="list-group-item" href="#">`}
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-user"></i></div>
                    <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Profile</div></a>
                </a>

                ${active === 'more'? `<a class="list-group-item active" href="#">` : `<a class="list-group-item" href="#">`}
                     <div class="wd-float-left" width="20%"><i class="fa-solid fa-ellipsis-v"></i></div>
                     <div class="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">More</div></a>
                 </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
