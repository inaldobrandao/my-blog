import React from "react"
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"
import {
  PostItemLink,
  PostItemWrapper,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription,
} from "./styled"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <PostItemWrapper>
      <PostItemTag background={background}>{category}</PostItemTag>
      <PostItemInfo>
        <PostItemDate>
          {date} • {timeToRead}a
        </PostItemDate>
        <PostItemTitle>{title}</PostItemTitle>
        <PostItemDescription>{description}</PostItemDescription>
      </PostItemInfo>
    </PostItemWrapper>
  </PostItemLink>
)

PropTypes.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
