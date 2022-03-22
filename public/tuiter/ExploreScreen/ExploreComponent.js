import PostSummaryList from "../PostSummaryList";

const ExploreComponent = (isExplore) => {
    return(
           <div class="pt-2 row">
            {isExplore === 'explore'? `
              <div class="col-11"> ` : `<div class="col-12">` }
                 <input class="ps-4 mb-2 wd-input-dark-mode" type="text" placeholder="Search Tuiter"/>
              </div>
              ${isExplore === 'explore'? `
                 <div class="col-1">
                    <a class="wd-float-left wd-font-size" href="./explore-settings.html">
                    <i class="fa fa-gear"></i></a>
                 </div> ` : ``
              }
           </div>
           ${isExplore === 'explore'? `
           <ul class="nav mb-2 nav-tabs">
               <li class="nav-item">
                   <a class="nav-link active" aria-current="page" href="#">For you</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" aria-current="page" href="#">Trending</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" aria-current="page" href="#">News</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" aria-current="page" href="#">Sports</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link d-sm-none d-xxl-block d-xl-block d-lg-block d-md-block" aria-current="page" href="#">Entertainment</a>
               </li>
           </ul>
           ` : ``
           }

                <div class="wd-post-img">
                    <img src="../images/starship.jpeg" style="width: 100%;"/>
                    <div class="wd-bottom-left"><h4>SpaceX Starship</h4></div>
                </div>
           ${PostSummaryList()}
    );
}
export default ExploreComponent;