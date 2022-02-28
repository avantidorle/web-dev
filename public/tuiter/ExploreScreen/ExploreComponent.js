import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
              <div class="col-11">
                 <input class="wd-input-dark-mode wd-input-dark-focus wd-border wd-border-round" type="text" placeholder="Search Tuiter"/>
              </div>
              <div class="col-1">
                 <a class="wd-float-left wd-font-size" href="./explore-settings.html">
                 <i class="fa fa-gear"></i></a>
              </div>
           </div>
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
                <div class="wd-post-img">
                    <img src="../images/starship.jpeg" style="width: 100%;"/>
                    <div class="wd-bottom-left"><h3>SpaceX Starship</h3></div>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;