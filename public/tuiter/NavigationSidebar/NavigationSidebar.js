const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="/">
                    <div class="wd-float-left" width="20%"><i class="fa fa-hashtag"></i></div>
                    <div class="wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Explore</div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-bell"></i></div>
                    <div class="wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Notifications</div></a>
                </a>
                <a class="list-group-item" href="/">
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-envelope"></i></div>
                    <div class="wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Messages</div></a>
                </a>
                <a class="list-group-item" href="/">
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-bookmark"></i></div>
                    <div class="wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Bookmarks</div></a>
                </a>
                <a class="list-group-item" href="/">
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-list"></i></div>
                    <div class="wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Lists</div></a>
                </a>
                <a class="list-group-item" href="/">
                    <div class="wd-float-left" width="20%"><i class="fa-solid fa-user"></i></div>
                    <div class="wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Profile</div></a>
                </a>
                 <a class="list-group-item" href="/">
                     <div class="wd-float-left" width="20%"><i class="fa-solid fa-ellipsis-v"></i></div>
                     <div class="wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">More</div></a>
                 </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
