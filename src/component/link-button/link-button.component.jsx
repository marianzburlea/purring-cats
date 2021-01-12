import React from  'react'

import { StyledLink } from './link-button.style'

const LinkButton = ({ to, label, image, onMouseEnter, onMouseLeave, name }) => {
  return (
    <StyledLink
      data-label={label}
      to={to}
      name={name}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </StyledLink>
  )
}

export { LinkButton }
