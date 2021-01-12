import styled from 'styled-components'
import { Tooltip, withStyles } from '@material-ui/core';

export const StyledCatAction = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 1fr repeat(3, auto);
  grid-gap: 0.5rem;
`

export const StyledCatCard = styled.div`
  padding-top: 56.25%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
`

export const StyledCatList = styled.div`
  display: grid;
  max-width: 1680px;
  margin: 1rem auto;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 1rem;
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
