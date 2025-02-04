import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"
import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <ProfileWrapper>
      <ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  )
}

export default Profile
