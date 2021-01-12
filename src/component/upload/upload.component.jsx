import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { post } from "axios";

import * as US from "./upload.style";
import { initialValues, validationSchema } from "./upload.form";
import { API_URL, API_KEY } from "../../config";
import { toast } from "react-toastify";
import { navigate } from "@reach/router";

const Upload = () => {
  const [image, setImage] = useState();
  const handleChange = (e, setFieldValue) => {
    const { files } = e.target;
    setFieldValue("file", e.target.files[0]);
    setImage(files.length ? URL.createObjectURL(e.target.files[0]) : "");
  };

  const onSubmit = (values) => {
    const url = `${API_URL}/images/upload`;
    const formData = new FormData();
    formData.append("file", values.file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-Api-Key": API_KEY,
      },
    };

    const getResult = async () => {
      let result = null;
      try {
        // upload image
        result = await post(url, formData, config);
        toast.success(
          `File "${result.data.original_filename}" uploaded successfully`
        )
        navigate('/')
      } catch ({ response }) {
        result = response;
      } finally {
        const { status, data } = result;
        if (status === 400) {
          toast.error(data.message);
        }
      }
    };

    getResult();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <US.StyledUploadFormGrid>
              <US.StyledUploadPreviewImage src={image} />
              <Field name="file" id="file" type="file">
                {({ field, form, meta }) => (
                  <US.StyledUploadButton
                    variant="contained"
                    component="label"
                    color="primary"
                  >
                    <span>select file</span>
                    <US.StyledTextField
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleChange(e, form.setFieldValue)}
                    />
                  </US.StyledUploadButton>
                )}
              </Field>
              <US.StyledUploadSubmitButton
                type="submit"
                variant="contained"
                color="secondary"
                disabled={!isValid}
              >
                Upload
              </US.StyledUploadSubmitButton>
            </US.StyledUploadFormGrid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { Upload };
