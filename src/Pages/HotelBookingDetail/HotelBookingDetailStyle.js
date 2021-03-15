import {makeStyles} from "@material-ui/core";

const useHotelBookingDetail = makeStyles(theme => ({
    hotelbookingdetailWrapper: {
        boxSizing: 'border-box',
        marginTop: "4.5rem",
        marginBottom: ".02rem",
        backgroundColor: theme.palette.grey[200],
        justifyContent: "center",
        // height: '10rem',
    },

    breadCrumbContainer: {
        padding: theme.spacing(1),
        fontSize: 'inherit',
    },

    bookingDetailContainer: {
        // border: "1px solid rgba(0, 0, 0, 0.2)",
        // boxShadow: "0px 5px 15px rgba(0, 0 , 0, 0.1)",
        padding: theme.spacing(2)
    },

    hotelUserDetailContainer: {
    }

}))

export default useHotelBookingDetail;