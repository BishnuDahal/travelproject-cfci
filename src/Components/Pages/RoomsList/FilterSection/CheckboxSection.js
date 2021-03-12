import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';

export default function CheckboxSection({classes}) {
  const [checked, setChecked] = React.useState({
      checkedA: true,
      checkedB: true,
  })
  const [open, setOpen] = React.useState(true);

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };
  const handleClick = () => {
    setOpen(!open);
  };
    return (
        <div style={{ padding: '10px'}}>
             <Typography gutterBottom variant="h6" component="h2">
            <b>Filter By</b>
          </Typography>

          <List>
          <ListItem button onClick={handleClick} className={classes.listitem}>
        <ListItemIcon>
          <ExploreRoundedIcon />
        </ListItemIcon>
        <ListItemText primary={<b style={{fontSize:"15px", fontWeight:"600"}}>Tour Types</b>} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button >
          <FormGroup row>
      <FormControlLabel
        control=
        {
        <Checkbox
             checked={checked.checkedA}
             onChange={handleChange} 
             name="checkedA" />
            }
        label= {<Typography gutterBottom variant="body2">
        Private Tours
      </Typography>}
      />
      </FormGroup>
          </ListItem>
          <ListItem button >
          <FormGroup row>
      <FormControlLabel
        control=
        {
        <Checkbox
             checked={checked.checkedB}
             onChange={handleChange} 
             name="checkedB" />
            }
            label= {<Typography gutterBottom variant="body2">
            Self Guided Tours
          </Typography>}
      />
      </FormGroup>
          </ListItem>
        </List>
      </Collapse>
      </List>       
        </div>
    )
}
