import PostSummaryList from "../PostSummaryList/";
import React from "react";

const ExploreComponent = ({
isExplore = "explore"

}) => {
    return(
        <>
           <div className="pt-2 row">
            { (isExplore === 'explore')
            ? <div className="col-11"><input className="ps-4 mb-2 wd-input-dark-mode" type="text" placeholder="Search Tuiter"/></div>
            : <div className="col-12"></div>
            }
            { (isExplore === 'explore')
            ? <div className="col-1"><a className="wd-float-left wd-font-size" href="./explore-settings.html"><i className="fa fa-gear"></i></a></div>
            : ""
            }
           </div>
           { (isExplore === 'explore')
           ? <ul className="nav mb-2 nav-tabs">
               <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">For you</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" aria-current="page" href="#">Trending</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" aria-current="page" href="#">News</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" aria-current="page" href="#">Sports</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link d-sm-none d-xxl-block d-xl-block d-lg-block d-md-block" aria-current="page" href="#">Entertainment</a>
               </li>
           </ul>
           : "" }
           { (isExplore === 'explore')
           ? <div className="wd-post-img">
                            <img src={"./images/starship.jpeg"} width="100%"/>
                            <div className="wd-bottom-left"><h4>SpaceX Starship</h4></div>
                        </div>
           : ""}
           {<PostSummaryList/>}
        </>
    );
}
export default ExploreComponent;