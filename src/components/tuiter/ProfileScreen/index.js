import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileScreen = () => {
const profile = useSelector((state) => state.profile[0]);
  return (
    <>
    <div>

        <div>
            <img className="mt-2" src={profile.bannerPicture} width="100%" height="200px"/>
        </div>
        <div className="row mt-2 mb-2 wd-overlap">
            <div className="col-9">
                <img className="wd-profile-picture" src={profile.profilePicture} width="70px" height="70px"/>
            </div>
            <div className="col-3 mt-4">
                <Link to="/tuiter/editProfile" className="wd-edit-button btn rounded-pill">
                <span>Edit profile</span></Link>
            </div>
        </div>
        <h5><strong>{profile.name}</strong></h5>
        @{profile.handle}
        <p>{profile.bio}</p>
        <div>
            <div className="wd-profile-details"><i className="fa fa-map-marker me-2" aria-hidden="true"></i>{profile.location}</div>
            <div className="wd-profile-details"><i className="fa-solid fa-baby me-2 ms-4"></i>
            Born {profile.dateOfBirth}
            </div>
            <div className="wd-profile-details">
            <i className="fa fa-calendar me-2 ms-4" aria-hidden="true">
            </i>Joined {profile.dateJoined}</div>
        </div>
        <br/>
        <div><strong>{profile.followingCount}</strong> Following <strong>{profile.followersCount}</strong> Followers</div>
    </div>
    </>
  );
}
export default ProfileScreen;