import React from "react";
import {Link} from "react-router-dom";
import '../css/index.css'

const NavigationSidebar = (
{
    active='explore'
}
) => {
    return(
        <>
            <div className="pt-2 list-group">
            <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
            </Link>

                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-house"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Home</div>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <div className="wd-float-left" width="20%"><i className="fa fa-hashtag"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Explore</div>
                </Link>

                <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="#">
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-bell"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Notifications</div>
                </a>

                 <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`} href="#">
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-envelope"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Messages</div>
                </a>

                 <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="#">
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-bookmark"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Bookmarks</div>
                </a>

                 <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="#">
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-list"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Lists</div>
                </a>

                 <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="#">
                    <div className="wd-float-left" width="20%"><i className="fa-solid fa-user"></i></div>
                    <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">Profile</div>
                </a>

                 <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="#">
                     <div className="wd-float-left" width="20%"><i className="fa-solid fa-ellipsis-v"></i></div>
                     <div className="ps-2 wd-float-left d-lg-none d-md-none d-sm-none d-xl-block">More</div>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
       </>
    );
}
export default NavigationSidebar;
