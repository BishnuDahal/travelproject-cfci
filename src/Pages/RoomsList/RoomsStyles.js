import { makeStyles } from '@material-ui/core/styles';

const useRoomsStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    roomslist: {
      padding: theme.spacing(2),
      background: '#fff',  
    },
    paper: {
        padding: theme.spacing(2),
        // color: theme.palette.text.primary,
          
      },
    rootroomcard: {
        height: '320px',
      },
      listitem: {
        padding: '2px',
      },
      body1: {
        fontSize:'12px',
        marginLeft:'40px',
        fontWeight:'800',

      },
      body2: {
        fontSize:'12px',
        fontWeight:'800',
      },
      formControl: {
        minWidth: '140px',
      },
  }));
  export default useRoomsStyles;