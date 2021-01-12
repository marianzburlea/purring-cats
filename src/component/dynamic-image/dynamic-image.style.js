import styled from 'styled-components'

export const StyledDynamicImage = styled.div`
  width: 160px;
  height: 90px;
  background-image: url(/image/${({ image }) => image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`
