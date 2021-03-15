import React from 'react';
import {Grid} from "@material-ui/core";
import StyledCardList from "../../Reusable/reusableComponents/StyledCardList";
import GoodToKnow from "./GoodToKnow";
import UserDetailForm from "./UserDetailForm";

const UserDetails = (props) =>{
  const {handleSubmit, handleCheckbox} = props;
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <StyledCardList />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <GoodToKnow />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <UserDetailForm handleSubmit={handleSubmit} handleCheckbox={handleCheckbox}/>
        </Grid>

      </Grid>
    </>
  );
}

export default UserDetails;