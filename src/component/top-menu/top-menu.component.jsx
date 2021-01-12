import { Button, Typography } from '@material-ui/core'
import { navigate } from '@reach/router'
import React, { useState } from 'react'
import { DynamicImage } from '../dynamic-image'
import { LinkButton } from '../link-button/link-button.component'
import * as TMS from './top-menu.style'

const TopMenu = () => {
  const [image, setImage] = useState('')

  const handleClick = e => {
    const { name } = e.target
    console.log(name, e.target)
    navigate(name)
  }

  const handleOut = () => {
    setImage('')
  }

  return (
    <TMS.StyledTopMenu>
      <TMS.ImageTooltip
        title={<DynamicImage image="home.gif" />}
      >
        <TMS.StyledTopButton
          variant="contained"
          color="primary"
          name="/"
          onClick={handleClick}
        >
          Purring Cats
        </TMS.StyledTopButton>
      </TMS.ImageTooltip>

      <TMS.ImageTooltip
        title={<DynamicImage image="upload.gif" />}
      >
        <TMS.StyledTopButton
          variant="contained"
          color="primary"
          name="/upload"
          onClick={handleClick}
        >
          Upload
        </TMS.StyledTopButton>
      </TMS.ImageTooltip>
    </TMS.StyledTopMenu>
  )
}

export { TopMenu }
