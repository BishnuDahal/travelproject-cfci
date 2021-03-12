import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

export default function SelectSort({classes}) {
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <>
        <div>
        <Grid container  direction="row" spacing={2} style={{alignItems: 'center'}}>
        <Grid item xs={9}>

        <List style={{padding: "0"}}>
          <ListItem button onClick={handleClick}>
        <ListItemText primary={<Typography variant="h6">
            <b>Nepal Tours and Trips 2020/2021</b>
            {open ? <ExpandLess /> : <ExpandMore />}
          </Typography>} />
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
          <Typography  variant="body2"  style={{fontSize: "12px",marginTop: "8px"}}>
          Nepal, the heart of the Himalayas, boasts plenty of amazing tours. Visit Sherpa villages while trekking the Everest Base Camp trek. Experience Boudhanath Stupa and Pashupatinath temple on a sightseeing tour in Kathmandu, Nepal’s capital and cultural hub. Or, enjoy more nature and see rhinos, tigers and elephants on a jungle safari in Chitwan National Park.
          </Typography>
          <br/><br/>
          <CardActions>
      <Button  className="main_button" style={{width: '40%'}}><b>Travel Guide</b></Button>{""}
      <Button  className="main_button" style={{width: '40%'}}><b>Travel Guide</b></Button>
      </CardActions>   
      </Collapse>
      </List>
        
        </Grid>
        <Grid item xs={3}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label"><b style={{ textAlign: "center"}}>Sort By:</b></InputLabel> 
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Sort By:"
          size="small"
          style={{maxHeight: "50px"}}
        >
          <MenuItem value={1}>
            <em> Popularity</em>
          </MenuItem>
          <MenuItem value={2}>Lowest Price First</MenuItem>
          <MenuItem value={3}>Highest Price First</MenuItem>
          <MenuItem value={4}>Discount Price First</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        </Grid>
        <hr/>
        </div>
      </>
    )}