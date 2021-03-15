import React from "react";
import { Formik, Form } from "formik";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import RateReviewIcon from "@material-ui/icons/RateReview";
import RoomIcon from "@material-ui/icons/Room";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PoolIcon from '@material-ui/icons/Pool';
import {
  StyledAccordion,
  StyledSlider,
  StyledCheckbox,
} from "../../Reusable/reusableComponents";

const funActivitiesOptions = [
  { key: "option1", label: "Cycling", isChecked: false },
  { key: "option2", label: "Hiking", isChecked: false },
  { key: "option3", label: "Sight Seeing", isChecked: false },
  { key: "option4", label: "Jungle Safari", isChecked: false },
];

const facilitiesOptions = [
  { key: "option1", label: "Swimming Pool", isChecked: false },
  { key: "option2", label: "Indoor Gym", isChecked: false },
  
];



const ResponsiveFilterSection = ({ handleSliderChange, handleCheckbox }) => {

  const initialValues = {
    price: [0, 2000],
    rating: [0, 3],
    distance: [0, 10],
    funActivitiesOption: [],
    facilitiesOption:[],
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      handleChange={handleSliderChange}
      handleCheckbox={handleCheckbox}
    >
      {({ values, setFieldValue, handleReset, }) => (
        <>
          <Form>
            <StyledAccordion
              label="Price"
              rsLabel="Rs."
              minPrice={`${values.price[0]}`}
              maxPrice={`${values.price[1]}`}
              dash="-"
              iconSrc={<MonetizationOnIcon />}
            >
              <StyledSlider
                name="price"
                min={0}
                max={5000}
                defaultValue={[initialValues.price[0], initialValues.price[1]]}
                values={values}
                setFieldValue={setFieldValue}
                handleSliderChange={handleSliderChange}
              />
            </StyledAccordion>
            <StyledAccordion
              label="Rating"
              minRating={`${values.rating[0]}`}
              maxRating={`${values.rating[1]}`}
              dash="-"
              iconSrc={<RateReviewIcon />}
            >
              <StyledSlider
                name="rating"
                min={0}
                max={5}
                defaultValue={[
                  initialValues.rating[0],
                  initialValues.rating[1],
                ]}
                values={values}
                setFieldValue={setFieldValue}
                handleSliderChange={handleSliderChange}
              />
            </StyledAccordion>

            <StyledAccordion
              label="Distance from current location"
              minDistance={`${values.distance[0]}`}
              maxDistance={`${values.distance[1]}`}
              km="KM"
              dash="-"
              iconSrc={<RoomIcon />}
            >
              <StyledSlider
                name="distance"
                min={0}
                max={100}
                defaultValue={[
                  initialValues.distance[0],
                  initialValues.distance[1],
                ]}
                values={values}
                setFieldValue={setFieldValue}
                handleSliderChange={handleSliderChange}
              />
            </StyledAccordion>

            <StyledAccordion
              label="Fun activities to do"
              minSelect={values.funActivitiesOption.length}
              selected="Selected"
              iconSrc={<DirectionsRunIcon />}
            >
              <div style={{marginLeft: '5rem'}}>
                {funActivitiesOptions.map((item) => (
                  <React.Fragment key={item.key}>
                    <StyledCheckbox
                      font=""
                      label={item.label}
                      name="funActivitiesOption"
                      item={item}
                      values={values}
                      handleCheckbox={handleCheckbox}
                      setFieldValue={setFieldValue}
                    />
                  </React.Fragment>
                ))}
              </div> 
            </StyledAccordion>

            <StyledAccordion 
              label="Facilities"
              minSelect={values.facilitiesOption.length}
              selected="Selected"
              iconSrc={<PoolIcon />}
            >
              <div style={{marginLeft: '5rem'}}>
                {facilitiesOptions.map(item => (
                  <React.Fragment key={item.key}>
                    <StyledCheckbox
                      font=""
                      label={item.label}
                      name="facilitiesOption"
                      item={item}
                      values={values}
                      handleCheckbox={handleCheckbox}
                    />
                  </React.Fragment>
                ))}
              </div>

            </StyledAccordion>
            
            <button type="submit">submit</button>
          </Form>

         
        </>
      )}
    </Formik>
  );
};

export default ResponsiveFilterSection;
