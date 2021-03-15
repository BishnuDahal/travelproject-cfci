import { makeStyles } from '@material-ui/core/styles';

 const useAboutStyles = makeStyles((theme) => ({
    aboutsectionpage: {
        position: 'relative',
        width: '98vw',
        margin: 'auto',
    },
    paper: {
        width: '90%',
        margin: 'auto',
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    papercontent: {
        width: '90%',
        margin: 'auto',
        padding: theme.spacing(4),
    },
   
    abouticon: {
        paddingRight: theme.spacing(1),
        textAlign: 'center',
        margin: theme.spacing(1),
    },
    aboutbutton: {
        backgroundColor: '#f6a82f',
        borderRadius: '50%',
        padding: '10px',
    },
    aboutitle: {
        padding: theme.spacing(2),
    },
    aboutcontent: {
        flex: '30%',
        // padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
             width: '90%',
           },
    },
    aboutimage: {
         flex: '50%',
         height: 'auto',
         marginTop: '-3%',
         marginLeft: theme.spacing(2),
         opacity: '0.9',
          [theme.breakpoints.down('xs')]: {
            display: 'none',
          },
       },
}))
export default useAboutStyles;