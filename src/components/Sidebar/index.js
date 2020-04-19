import React from "react"
import Profile from "../Profile"
import { SidebarWrapper } from "./styled"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </SidebarWrapper>
)

export default Sidebar
