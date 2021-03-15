import * as Yup from "yup";

const numberRegExp = /(?:\b|-)([1-9]{1,2}[0]?|99)\b/; //1 to 99 not preceding 0


const searchFormValidation = Yup.object().shape({
  location: Yup.string().required("Location is required"),
  checkinDate: Yup.date().required(" Check in date required").nullable(),
  checkoutDate: Yup.date().required(" Check out date required").nullable(),
  adult: Yup.string().matches(numberRegExp, "Value must be a positive number").required('required'),
  room: Yup.string().matches(numberRegExp, "Value must be a positive number").required('required'),
});

const userDetailFromValidation = Yup.object().shape({
  fName: Yup.string().required("is required"),
  lName: Yup.string().required("is required"),
  email: Yup.string().email().required("email is required"),
  cemail: Yup.string().oneOf([Yup.ref('email'), null], 'email must match'),
})

export { searchFormValidation, userDetailFromValidation };
