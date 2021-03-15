import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CustomizedBreadcrumbs = withStyles((theme) => ({
  root: { 
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontSize: theme.typography.body1,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const  StyledBreadcrumb = () =>{
  return (
    <Breadcrumbs aria-label="breadcrumb" >
      <CustomizedBreadcrumbs
        component="a"
        href="#"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <CustomizedBreadcrumbs component="a" href="#" label="Catalog" onClick={handleClick} />
      <CustomizedBreadcrumbs
        label="Accessories"
        deleteIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        onDelete={handleClick}
      />
    </Breadcrumbs>
  );
}
export default StyledBreadcrumb;