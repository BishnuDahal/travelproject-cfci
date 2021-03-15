import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import {StyledCheckbox} from "../../Reusable/reusableComponents";
import StyledAutoSizeTextarea from "../../Reusable/reusableComponents/StyledAutoSizeTextarea";

const useSpecialRequest = makeStyles(theme => ({
  specialRequestWrapper: {
    marginTop: '1rem',
    padding: '1rem',
    border: "1px solid rgba(0, 0, 0, 0.2)",
    backgroundColor: '#f4ebe4',
  },

  // reqTextArea: {
  //   marginTop: '1rem',
  //   padding: '1rem',
  //   width: '450px',
  //   '&:active, &:focus': {
  //     borderColor: '#f29807',
  //     outlineColor: '#f29807',
  //   },
  // },

  check:{
    paddingLeft: '.7rem',
    marginLeft: 'none',
  },
}))

const parkingOpt = [
  {key: 'option1', label:'I would like free private parking on site', isChecked: false}
];

const SpecialRequest = ({specialRequests, privateParking, setFieldValue, values, handleCheckbox}) => {
  const classes = useSpecialRequest()
  return (
    <>
      <div style={{marginTop: '1.5rem'}}>
        <Typography variant="h3">Special Requests</Typography>
      </div>
      <Grid container className={classes.specialRequestWrapper}>
        <Grid item>
          <Typography>
            Please write your requests in English or Nepali.
          </Typography>
          <Typography>
            Special requests cannot be guaranteed–but the accommodation will do its best to meet your needs.
          </Typography>
          <Typography>
            You can always make a special request after your booking is complete!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <StyledAutoSizeTextarea
            name={specialRequests}
            values={values}
            setFieldValue={setFieldValue}
          />

         <div className={classes.check} >
           {parkingOpt.map(item => (
             <React.Fragment key={item.key} >
               <StyledCheckbox
                 font={classes}
                 label={item.label}
                 item={item}
                 name={privateParking}
                 handleCheckbox={handleCheckbox}
               />
             </React.Fragment>
          ))}
           </div>
        </Grid>

      </Grid>
    </>
  );
}

export default SpecialRequest;