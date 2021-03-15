import React from "react";
import SearchField from "..//../Reusable/reusableComponents/SearchField";
import StyledTextField from "../../Reusable/reusableComponents/StyledTextField";
import StyledButton from "../../Reusable/reusableComponents/StyledButton";
import StyledDatePicker from "../../Reusable/reusableComponents/StyledDatePicker";
import { Formik, Form, } from "formik";
import { searchFormValidation } from "../../Utils/util/Validation";



const minCheckout = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2)
  return tomorrow
};

export const initialValues = {
  location: "",
  checkinDate: new Date(),
  checkoutDate: minCheckout(),
  adult: "",
  room: "",
  child: "",
};

const HotelSearchForm = ({ handleSubmit, handleChange ,classes }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={searchFormValidation}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, }) => (
          <>
            <Form className={classes.formWrapper}>
              <div>
                <SearchField
                  placeholder="Where do you want to go? "
                  name="location"
                  type="location"
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
                {/* <ErrorMessage name="location"/> */}
              </div>
              <div>
                <StyledDatePicker
                  label="Check In"
                  name="checkinDate"
                  value={values.checkinDate}
                  setFieldValue={setFieldValue}
                />
              </div>
              <div>
                <StyledDatePicker
                  label="Check Out"
                  name="checkoutDate"
                  value={values.checkoutDate}
                  setFieldValue={setFieldValue}
                />
              </div>
              <div>
                <StyledTextField label="Adult" name="adult" type="number" />
              </div>
              <div>
                <StyledTextField label="Child" name="child" type="number" />
              </div>
              <div>
                <StyledTextField label="Room" name="room" type="number" />
              </div>

              <div>
                <StyledButton type="submit" text="Search" />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default HotelSearchForm;
