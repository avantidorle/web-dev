import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js"

const ExploreScreen = () => {
    return(
    <>
        <ExploreComponent isExplore='explore'/>
    </>
    )
};

export default ExploreScreen;