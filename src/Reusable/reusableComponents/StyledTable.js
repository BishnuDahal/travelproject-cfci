import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useTableStyle = makeStyles((theme) => ({
  table: {
    "& thead th": {
      fontWeight: "700",
      backgroundColor: "#deae53",
      padding: '.6rem',
    },
    "& tbody td": {
      fontWeight: "400",
      color: "#444444",
      padding: '.6rem',
    },

    '& tbody tr:nth-of-type(even)': {
      backgroundColor: 'rgb(244, 235, 228)',
    },
  },
}));

const StyledTable = ({tableHeadCells, tableBodyCells}) => {
  const classes = useTableStyle();
  return (
    <>
      <TableContainer>
        <Table className={classes.table} >
          <TableHead>
            <TableRow>
              {tableHeadCells.map(headCell => (
                <TableCell key={headCell.id}>{headCell.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {tableBodyCells.map(bodyCell => (
              <TableRow key={bodyCell.id}>
                {bodyCell.address && <TableCell>{bodyCell.address}</TableCell> }
                {bodyCell.time && <TableCell>{bodyCell.time}</TableCell>}
                {bodyCell.amount && <TableCell>{bodyCell.amount}</TableCell>}
                {bodyCell.policy && <TableCell>{bodyCell.policy}</TableCell>}
                {bodyCell.deduction && <TableCell>{bodyCell.deduction}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>

  )
}

export default StyledTable;