import { makeStyles } from '@material-ui/core/styles';
import light5 from '../../assets/light5.jpg'

const useTravelLandingPageStyles = makeStyles((theme) => ({
    travellandingpage: {
        position: 'relative',
        height: "90vh",
        [theme.breakpoints.down('sm')]: {
           height: '100vh',
          },
    },
   landingtravelimage: {
       overflow: 'hidden',
       width: '100%',
       height: '115%',
       position:'absolute',
       top:'-18%',
       backgroundImage:`url(${light5})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       zIndex:  '-1',
   },
   landingpagecontent: {
       position: 'relative',
       width: "100%",
       margin: 'auto',
       padding: theme.spacing(1),
       color: "fff",
       marginTop: theme.spacing(1),
       zIndex: 2,
   },
   landingcontent: {
       margin: 'auto',
       padding: theme.spacing(5),
       color: "#fff",
       // opacity: "0.5",
   },
   landingformcontent: {
       margin: 'auto',
       padding: theme.spacing(1),
   },
   subtitle: {
        letterSpacing: "0.4px",
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
           display: 'none',
         },
   },
   reservePageCard: {
    maxWidth: '320px',
    // width: "100%",
    //  maxHeight: '800px',
     padding: theme.spacing(3),
     alignItems: "center",
     background: '#fff',
     borderRadius: '10px',
     margin: 'auto',
    //  textAlign: 'center',
 },
 reservecontent:{
   width: '98%',
   padding: theme.spacing(1),
 },
 reserveitem:{
   marginLeft:'auto',
   alignItems: 'center',
 },
 overlay: {
        overflow: 'hidden',
        width: '100%',
        height: '115%',
        position:'absolute',
        top:'-17%',
        backgroundColor: '#000000',
        opacity: 0.4,
        zIndex:  '1',
 },
 abouticon: {
  paddingRight: theme.spacing(1),
  textAlign: 'center',
  marginRight: theme.spacing(1),
},
aboutbutton: {
  backgroundColor: '#f6a82f',
  borderRadius: '50%',
  padding: '10px',
},
}))

export default useTravelLandingPageStyles;