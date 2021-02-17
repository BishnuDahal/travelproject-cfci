import { makeStyles } from '@material-ui/core/styles';

const useHotelStyles = makeStyles((theme) => ({
    hotelsection: {
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
    },
    aboutitle: {
        padding: theme.spacing(2),
    },
    hotelcontent: {
        flex: '10%',
        padding: theme.spacing(1),
    },
    hotellistcontent: {
        flex: '80%',
    },
    aboutimage: {
        width: '15%',
        height: '40%',
        position: 'absolute',
        bottom: '1%',
      },
      menu_link: {
          color: '#010101'
      },
   
}))

export default useHotelStyles;