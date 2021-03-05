import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rooms from './Rooms';
import Price from './Price';
import YourChoices from './YourChoices';
import SelectRooms from './SelectRooms';
import Sleeps from './Sleeps';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1c1c1c',
    color: '#FFF',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id,rooms, sleeps) {
  return {id, rooms, sleeps};
}

const rows = [
  createData(
       '1',
      {
        room_type: 'classic',
       bed: '1 double bed 🛏 ', 
      facilities:  '🛁 Private Bathroom, 😉 Free Wifi,📺 Flat Screen Tv, 🔉 soundproofing',
      other_facilities:  '⤵  Free toiletries, ⤵  Shower, ⤵ Toilet, ⤵ Towels ,⤵ TV, ⤵ Telephone,⤵  Fan, ⤵ Carpeted, ⤵ Cable channels, ⤵ Upper floors, ⤵ accessible by stairs only Toilet paper, ⤵ Single-room air conditioning for guest accommodation',
      }, 
     
         [
         {
             persons:  ' 🧖 🧖 ',
             last_price: 6000, 
             new_price: 5900,
             breakfast: 'Superb_breakfast',
             cancellation: 'Free Cancellation',
             payment: 'NO PREPAYMENT NEEDED – pay at the property'
         },
         {
            persons:  ' 🧖 ',
            last_price: 6000, 
            new_price: 5900,
            breakfast: 'Superb_breakfast',
            cancellation: 'Free Cancellation',
            payment: 'NO PREPAYMENT NEEDED – pay at the property'
        },
           {
     persons:  ' 🧖 🧖 🧖  ',
     last_price: 6000, 
     new_price: 5900,
     breakfast: 'Superb_breakfast',
     cancellation: 'Free Cancellation',
     payment: 'NO PREPAYMENT NEEDED – pay at the property'
 },
     ],
      ),
  createData( '2', 
  {room_type: 'deluxe', bed: '1 double bed 🛏 ', facilities:  '🛁 Private Bathroom, 😉 Free Wifi,📺 Flat Screen Tv, 🔉 soundproofing', other_facilities:  '⤵  Free toiletries, ⤵  Shower, ⤵ Toilet, ⤵ Towels ,⤵ TV, ⤵ Telephone,⤵  Fan, ⤵ Carpeted, ⤵ Cable channels, ⤵ Upper floors, ⤵ accessible by stairs only Toilet paper, ⤵ Single-room air conditioning for guest accommodation'},
  [
    {
        persons:  ' 🧖 🧖 ',
        last_price: 6000, 
        new_price: 5900,
        breakfast: 'Superb_breakfast',
        cancellation: 'Free Cancellation',
        payment: 'NO PREPAYMENT NEEDED – pay at the property'
    },
    {
       persons:  ' 🧖 ',
       last_price: 6000, 
       new_price: 5900,
       breakfast: 'Superb_breakfast',
       cancellation: 'Free Cancellation',
       payment: 'NO PREPAYMENT NEEDED – pay at the property'
   },
   {
    persons:  ' 🧖 🧖 🧖',
    last_price: 6000, 
    new_price: 5900,
    breakfast: 'Superb_breakfast',
    cancellation: 'Free Cancellation',
    payment: 'NO PREPAYMENT NEEDED – pay at the property'
},
],
     ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="30%">Rooms</StyledTableCell>
            <StyledTableCell align="center" width="70%">Availabilty as per individuals</StyledTableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
               <>
              <StyledTableCell component="th" scope="row">
                  <Rooms row={row} />
              </StyledTableCell>
              </>
              {row.sleeps.map(sleep => <div>
                <TableHead>
          <TableRow >
           {/* style={{backgroundColor: "#1c1c1c"}}  */}
           {/* style={{backgroundColor: "#1c1c1c", padding: "4px", color: "white"}} */}
             <TableCell align="center"><b >Sleeps</b></TableCell>
            <TableCell align="center"><b>Today's Price</b></TableCell>
            <TableCell align="center"><b>Your's Choice</b></TableCell>
            <TableCell align="center"><b>Select</b></TableCell> 
          </TableRow> 
         </TableHead> 
              <StyledTableCell  component="th" scope="row" >
                 <Sleeps sleep={sleep} />
                  </StyledTableCell>
                
              <StyledTableCell align="center">
                 <Price sleep={sleep} />
                  </StyledTableCell>

              <StyledTableCell align="center" >
                  <YourChoices sleep={sleep} />
              </StyledTableCell>

              <StyledTableCell align="center"> 
                    <SelectRooms />
                </StyledTableCell>
                </div>
                )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
