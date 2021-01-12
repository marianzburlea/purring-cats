import styled from 'styled-components'
import { Button, Tooltip, withStyles } from '@material-ui/core'

export const StyledTopButton = styled(Button)`
  && > span {
    pointer-events: none;
  }
`

export const StyledTopMenu = styled.nav`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
`

export const StyledTopMenuImageWrapper = styled.div`
  grid-column: 2/4;
  grid-row: 1/2;
`

export const ImageTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);
