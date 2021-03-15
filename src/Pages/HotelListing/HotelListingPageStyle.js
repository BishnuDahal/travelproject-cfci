import { makeStyles } from "@material-ui/core";

const useHotelListingPage = makeStyles((theme) => ({
  hotelListingWrapper: {
    boxSizing:'border-box',
    marginTop: "4.5rem",
    backgroundColor: theme.palette.grey[200],
    justifyContent: "center",
  },

  breadCrumbContainer: {
    padding: theme.spacing(1),
    fontSize: 'inherit'

  },


  searchResult:{
    border: "1px solid rgba(0, 0, 0, 0.2)",
    // boxShadow: "0px 5px 15px rgba(0, 0 , 0, 0.1)",
    padding: theme.spacing(2)
  },

  filterSectionWrapper: {
    boxShadow: "0px 5px 15px rgba(0, 0 , 0, 0.2)",
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },

  formWrapper: {
    borderRadius: '5px',
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1)

  },

  hotelListingContainer: {
    paddingTop:'0px',
    marginLeft: '25px',
    position: 'relative',
  },

  filterIcon:{
    padding: '.5rem',
    width: '4.375rem',
    height: '3.125rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position:'fixed',
    cursor: 'pointer',
    bottom: '3rem',
    right: '4rem',
    borderRadius: '8px',
    zIndex: 10,
    backgroundColor: theme.palette.grey[400],
    color:'#F5F5F5',
    opacity: '.9',
    "&:hover": {
      backgroundColor: "#f29807", 
    },
  },
}));

export default useHotelListingPage;
