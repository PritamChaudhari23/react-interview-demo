import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    country: "",
    hobbies: [],
    gender: "",
    terms: false,
    birthdate: "",
    appointmentTime: "",
    phoneNumber: "",
    bio: "",
    file: null,
    satisfaction: 50,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    country: Yup.string().required("Required"),
    hobbies: Yup.array().min(1, "Select at least one hobby"),
    gender: Yup.string().required("Required"),
    terms: Yup.boolean().oneOf([true], "Must accept terms and conditions"),
    birthdate: Yup.date().required("Required"),
    appointmentTime: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Required"),
    bio: Yup.string().required("Required"),
    file: Yup.mixed().required("A file is required"),
    satisfaction: Yup.number().min(0).max(100).required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage
              name="username"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <Field as="select" id="country" name="country">
              <option value="">Select your country</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
            </Field>
            <ErrorMessage
              name="country"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label>Hobbies</label>
            <div>
              <Field
                type="checkbox"
                id="hobby1"
                name="hobbies"
                value="reading"
              />
              <label htmlFor="hobby1">Reading</label>
            </div>

            <div>
              <Field
                type="checkbox"
                id="hobby2"
                name="hobbies"
                value="traveling"
              />
              <label htmlFor="hobby2">Traveling</label>
            </div>

            <div>
              <Field
                type="checkbox"
                id="hobby3"
                name="hobbies"
                value="cooking"
              />
              <label htmlFor="hobby3">Cooking</label>
            </div>

            <ErrorMessage
              name="hobbies"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label>Gender</label>
            <div>
              <Field type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
            </div>

            <div>
              <Field type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>

            <ErrorMessage
              name="gender"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <Field type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">Agree to terms and conditions</label>
            <ErrorMessage
              name="terms"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="birthdate">Birthdate</label>
            <Field type="date" id="birthdate" name="birthdate" />
            <ErrorMessage
              name="birthdate"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="appointmentTime">Appointment Time</label>
            <Field type="time" id="appointmentTime" name="appointmentTime" />
            <ErrorMessage
              name="appointmentTime"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage
              name="phoneNumber"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <Field as="textarea" id="bio" name="bio" />
            <ErrorMessage
              name="bio"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(event) =>
                formik.setFieldValue("file", event.currentTarget.files[0])
              }
            />
            <ErrorMessage
              name="file"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <div>
            <label htmlFor="satisfaction">Satisfaction</label>
            <Field
              type="range"
              id="satisfaction"
              name="satisfaction"
              min="0"
              max="100"
            />
            <ErrorMessage
              name="satisfaction"
              component="label"
              style={{ color: "red", "margin-left": "5px" }}
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
