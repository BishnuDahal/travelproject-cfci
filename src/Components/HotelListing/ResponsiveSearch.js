import React from "react";
import { Formik, Form } from "formik";
import { searchFormValidation } from "../../Utils/util/Validation";
import { SearchField } from "../../Reusable/reusableComponents";
import StyledTextField from "../../Reusable/reusableComponents/StyledTextField";
import StyledButton from "../../Reusable/reusableComponents/StyledButton";
import StyledDatePicker from "../../Reusable/reusableComponents/StyledDatePicker";
import { initialValues } from "./HotelSearchForm";
import { Grid } from "@material-ui/core";

const ResponsiveSearch = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={searchFormValidation}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <>
            <Form>
              <Grid container spacing={1} style={{ padding: '2rem'}}>
                <Grid item sm={12}>
                  <SearchField
                    placeholder="Where do you want to go? "
                    name="location"
                    type="location"
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                </Grid>
                <Grid item sm={5}>
                  <StyledDatePicker
                    label="Check In"
                    name="checkinDate"
                    value={values.checkinDate}
                    setFieldValue={setFieldValue}
                  />
                </Grid>
                <Grid item sm={5} style={{ marginLeft: "7rem" }}>
                  <StyledDatePicker
                    label="Check Out"
                    name="checkoutDate"
                    value={values.checkoutDate}
                    setFieldValue={setFieldValue}
                  />
                </Grid>
                <Grid item sm={5}>
                  <StyledTextField label="Adult" name="adult" type="number" />
                </Grid>
                <Grid item sm={5} style={{ marginLeft: "7rem" }}>
                  <StyledTextField label="Child" name="child" type="number" />
                </Grid>
                <Grid item sm={5}>
                  <StyledTextField label="Room" name="room" type="number" />
                </Grid>
                <Grid item sm={5} style={{ marginLeft: "7rem" }}>
                  <StyledButton type="submit" text="Search" />
                </Grid>
              </Grid>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default ResponsiveSearch;
