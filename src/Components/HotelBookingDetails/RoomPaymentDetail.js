import React from 'react';
import {StyledDetailCard} from '../../Reusable/reusableComponents';
import BookingDetail from "./BookingDetail";
import PriceSummary from "./PriceSummary";
import PaymentSchedule  from "./PaymentSchedule";
import Cancellation from "./Cancellation";
import BookingInclude from "./BookingInclude";
import FinePrint from "./FinePrint";


const RoomPaymentDetail = () => {
   return (
      <>
         <StyledDetailCard label="Your booking details">
            <BookingDetail/>
         </StyledDetailCard>
        <StyledDetailCard label="Your price summary">
          <PriceSummary />
        </StyledDetailCard>
        <StyledDetailCard label="Your payment schedule">
          <PaymentSchedule />
        </StyledDetailCard>
        <StyledDetailCard label="How much will it cost to cancel?">
          <Cancellation />
        </StyledDetailCard>
        <StyledDetailCard label="Your booking includes">
          <BookingInclude />
        </StyledDetailCard>
        <StyledDetailCard label="The fine print">
          <FinePrint />
        </StyledDetailCard>
      </>
   );
};

export default RoomPaymentDetail;
