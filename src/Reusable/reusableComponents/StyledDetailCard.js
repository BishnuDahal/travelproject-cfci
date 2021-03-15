import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyledDetailCard = makeStyles({
   cardWrapper: {
      minWidth: 275,
      // maxWidth: 323,
      border: "1px solid rgba(0, 0, 0, 0.2)",
      marginBottom: '1rem',

   },
   cardHeader: {
      backgroundColor: '#efce98',
      padding: '.8rem',
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
   },
});

const StyledDetailCard = ({label, children}) => {
   const classes = useStyledDetailCard();
   return (
      <>
         <Card className={classes.cardWrapper} variant="outlined">
            <CardContent className={classes.cardHeader}>
               <Typography variant="h3">{label}</Typography>
            </CardContent>
            {children}
         </Card>
      </>
   );
}

export default StyledDetailCard;
