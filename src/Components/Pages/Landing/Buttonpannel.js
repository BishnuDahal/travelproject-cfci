import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LocalHotelTwoToneIcon from '@material-ui/icons/LocalHotelTwoTone';
import FlightTwoToneIcon from '@material-ui/icons/FlightTwoTone';
import ConfirmationNumberTwoToneIcon from '@material-ui/icons/ConfirmationNumberTwoTone';
import ReserveCardUnit from './ReserveCardUnit';
import ReserveCardRental from './ReserveCardRental';
import useTravelLandingPageStyles from './LandingStyle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Buttonpannel() {
const classes = useTravelLandingPageStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.buttonpannelroot}>
      <div position="static" className={classes.abouticon} >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab  icon={<LocalHotelTwoToneIcon fontSize="large" className={classes.aboutbutton} />} {...a11yProps(0)}  />
          <Tab icon={<ConfirmationNumberTwoToneIcon fontSize="large" className={classes.aboutbutton} />} {...a11yProps(1)} />
          <Tab icon={<FlightTwoToneIcon fontSize="large" className={classes.aboutbutton} />} {...a11yProps(2)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
      <ReserveCardUnit classes={classes} />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <ReserveCardRental classes={classes} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
