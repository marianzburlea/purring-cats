import * as Yup from 'yup'

export const initialValues = {
  file: null,
}

export const validationSchema = Yup.object().shape({
  file: Yup.mixed().required('Select a file to upload first')
})
