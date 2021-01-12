import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'
import { Field } from 'formik'

export const StyledUploadFormGrid = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr repeat(2, auto) 1fr;
  grid-template-rows: repeat(2, auto);
  grid-gap: 1rem;
`

export const StyledUploadPreviewImage = styled.div`
  background-image: url(${({ src }) => src});
  width: 160px;
  height: 90px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  grid-row: 1/3;
  grid-column: 2/3;
`

export const StyledUploadSubmitButton = styled(Button)`
  grid-row: 2/3;
  grid-column: 3/4;
`

export const StyledUploadButton = styled(Button)`
  width: 120px;
  overflow: hidden;
  position: relative;
  grid-row: 1/2;
  grid-column: 3/4;
`

export const StyledUploadField = styled(Field)`
`

export const StyledTextField = styled(TextField)`
  && {
    position: absolute;
    left: -999px;
  }
`
