import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;


const useNabbarStyles = makeStyles((theme) => ({
  
    navroot: {
      position: 'sticky',
      top: 0,
      flexGrow: 1,
      justifyContent: 'space-around',
      // backgroundColor: '#6099F5',
  
     
    },
    menu_link: {
      textDecoration: 'none',
      listStyleType: 'none',
      padding:' 0px 10px',
      fontSize: 'small',
      fontWeight: 800,
      color: '#f2f8fa',
      transition: '0.4s',
      letterSpacing: '0.1rem',
      '&:hover': {
        backgroundColor: '#6099F5',
        color: '#ffff',
        padding: '4px',
    },
  },
    menuButton: {
      color: '#fff',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        display: 'none',
       },
       [theme.breakpoints.down('sm')]: {
        display: 'block',
       },
  
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
       },
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 4,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#6099F5',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    cardmedia: {
      maxWidth:'60px',
      maxHeight:'60px',
      borderRadius: '50%',
      background: 'transparent',
      objectFit: 'contain',
      margin: 'auto',
    },
  
  }));
export default useNabbarStyles ;
