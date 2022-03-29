import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {

    let profile = useSelector((state) => state.profile[0]);
    const [name, setName] = useState(profile.firstName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [dob, setDOB] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    const editProfileHandler = () => {
    dispatch({type: 'edit-profile',
        name: name,
        bio: bio,
        location: location,
        dob:dob
    });
  }
  return (
    <>
    <div>

        <div className="row">
            <div className="col-1">
                <Link to="/tuiter/profile">
                    <i className="fas fa-remove fa-2x fa-pull-right"></i>
                </Link>
            </div>
            <div className="col-9"></div>
            <div className="col-2">
                <Link to="/tuiter/profile" className="wd-edit-button btn rounded-pill" >
                    <span onClick={editProfileHandler}>Save</span>
                </Link>
            </div>
            <div></div>
        </div>
        <div className="mt-2">
            <img src={profile.bannerPicture} width="100%" height="200px"/>
            <img className="mt-2 wd-profile-picture" src={profile.profilePicture} width="70px" height="70px"/>
        </div>

        <div className="mb-2 mt-2">
            <label>Name</label>
            <input type="text" className="wd-whats-happening-textarea ps-2" defaultValue={profile.name}
             onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
            <label>Bio</label>
            <textarea className="wd-profile-textarea ps-2 pt-2 pe-2 pb-2" defaultValue={profile.bio} cols="100"
            onChange={(event) => setBio(event.target.value)}></textarea>
        </div>
         <div>
             <label>Location</label>
             <input type="text" className="wd-whats-happening-textarea ps-2" defaultValue={profile.location}
             onChange={(event) => setLocation(event.target.value)}/>
         </div>
          <div>
              <label>Date of Birth</label>
              <input type="date" className="wd-whats-happening-textarea ps-2" defaultValue={profile.dateOfBirth}
              onChange={(event) => setDOB(event.target.value)}/>
          </div>
    </div>
    </>
  );
}
export default EditProfile;