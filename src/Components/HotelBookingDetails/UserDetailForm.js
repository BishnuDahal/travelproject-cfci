import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Formik, Form} from 'formik';
import {StyledTextField, StyledRadioGroup,} from "../../Reusable/reusableComponents";
import BookedRoomDetail from "./BookedRoomDetail";
import SpecialRequest from "./SpecialRequest";
import {userDetailFromValidation} from "../../Utils/util/Validation"
import PlannedArrival from "./PlannedArrival";


const useUserDetailForm = makeStyles(theme => ({
  useUserFormWrapper: {
    marginTop: '1rem',
    padding: '1rem',
    border: "1px solid rgba(0, 0, 0, 0.2)",
    backgroundColor: '#f4ebe4',
  },

  labelFont: {
    marginTop: '1rem',
    fontFamily: 'Lato',
    fontSize: 15,
    fontWeight: 600,
  },
}))


const travellingForOpts = [
  {key: 'option1', value: "Yes", },
  {key: 'option2', value: "No", },
];
const bookingForOpts = [
  {key: 'option1', value: "I am the main guest", },
  {key: 'option2', value: "Booking is for someone else",},
];

const initialValues = {
  travellingForWork: '',
  fName: '',
  lName: '',
  email: '',
  cemail: '',
  bookingFor: '',
  guestEmail: '',
  guestEmailOp: '',
  transport: [],
  specialRequests: '',
  privateParking: [],
  plannedTime: '',

}

const UserDetailForm = ({handleSubmit, handleCheckbox}) => {
  const classes = useUserDetailForm();
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userDetailFromValidation}
        // onSubmit={(values) => console.log(values)}
      >
        {({values, setFieldValue, handleReset, handleChange}) => (
          <>
            <Form>
              <div style={{marginTop: '1.5rem'}}>
                <Typography variant="h3">Enter your details</Typography>
              </div>

              {/*//User Details Form*/}
              <Grid container className={classes.useUserFormWrapper}>

                <Grid item style={{backgroundColor: '#D2EDD5', borderRadius: '3px'}}>
                  <Typography gutterBottom style={{color: '#006607', padding: '.5rem'}}>
                    Almost done! Just fill in the required info
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.labelFont}>
                    Are you travelling for work?
                  </Typography>
                  {travellingForOpts.map(item => (
                    <Grid item key={item.key} style={{display: 'inline'}}>
                      <StyledRadioGroup label={item.value} name="travellingForWork" setFieldValue={setFieldValue}/>
                    </Grid>
                  ))}
                </Grid>
                <Grid item xs={4}>
                  <StyledTextField type="text" name="fName" label="First Name"/>
                </Grid>
                <Grid item xs={4} style={{marginLeft: '3rem'}}>
                  <StyledTextField type="text" name="lName" label="Last Name"/>
                </Grid>
                <Grid item xs={4} style={{position: 'relative'}}>
                  <StyledTextField type="email" name="email" label="Email Address"/>
                  <small style={{position: 'absolute', left: '0', bottom:'-5px', fontStyle: 'italic'}}>Confirmation email goes to this address</small>
                </Grid>
                <Grid item xs={4} style={{marginLeft: '3rem'}}>
                  <StyledTextField type="email" name="cemail" label="Confirm Email Address"/>
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.labelFont}>
                    Who are you booking for?
                  </Typography>
                  {bookingForOpts.map(item => (
                    <Grid item key={item.key}>
                      <StyledRadioGroup label={item.value} name="bookingFor" setFieldValue={setFieldValue} values={values}/>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/*Booked Room Details*/}
              <BookedRoomDetail
                guestEmail="guestEmail"
                guestEmailOp="guestEmailOp"
                transport="transport"
                values={values}
                setFieldValue={setFieldValue}
                handleCheckbox={handleCheckbox}
              />

              {/*Special Request*/}
              <SpecialRequest
                specialRequests="specialRequests"
                privateParking="privateParking"
                values={values}
                setFieldValue={setFieldValue}
                handleCheckbox={handleCheckbox}
              />

              {/*Planned Arrival*/}
              <PlannedArrival values={values} time="plannedTime" handleChange={handleChange} />
              <Button type="submit">Submit</Button>
            </Form>
          </>
        )}

      </Formik>
    </>
  );
}

export default UserDetailForm;