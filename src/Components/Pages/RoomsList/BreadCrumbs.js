import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function Breadcrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{margin: "10px"}}>
      <Link color="textSecondary" to="/" >
        Home
      </Link>
      {/* <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link> */}
      <Link
        color="textSecondary"
        to="/roomslist"
        // onClick={handleClick}
        aria-current="page"
      >
        HotelList
      </Link>
    </Breadcrumbs>
  );
}
