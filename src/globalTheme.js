import {makeStyles} from "@material-ui/core";

const useglobalTheme= makeStyles(theme => ({
  common: {
    black: "#000",
    white: "#fff",
  },

  shape: {
    borderRadius: "8px",
  },

  background: {
    paper: "#fff",
    headers: "#CECECE",
    default: "rgba(229, 229, 229, 1)",
  },

  palette: {
    primary: {
      light: "#2882F8",
      main: "#2882F8",
      dark: "#212121",
    },
    secondary: {
      main: "#2882F8",
      light: "#fdffe0",
    },
    error: {
      main: "#ff0000",
      dark: "#212121",
    },
  },

  typography: {
    useNextVariants: true,
    fontFamily: "Lato",

    h1: {
      fontSize: 35,
      fontFamily: "Lato",
      fontWeight: "bold",
      color: "white",
      letterSpacing: ".5rem",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center",
      textTransform: "uppercase",
    },

    h2: { //price list in accodion
      fontSize: 17,
      fontWeight: 600,
      fontFamily: "Lato",
      color: "black",
      verticalAlign: "center",
      alignItems: "justify",
    },

    h3: { // hoteldetail card header
      fontSize: 18,
      fontWeight: '600',
      fontFamily: "Lato",
      color: "black",
      letterSpacing: "0.0075em",
      verticalAlign: "middle",
      alignItems: "center",
    },

    h4: { //price in card //price in accodion
      fontSize: 23,
      fontFamily: "Lato",
      color: "green",
      letterSpacing: ".1rem",
      fontWeight: "600",
      verticalAlign: "middle",
      alignItems: "center",
    },

    h5: {
      //hotel address
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "Lato",
      color: "black",
      verticalAlign: "middle",
      alignItems: "center",
      lineHeight: ".2",
    },

    h6: {
      //sort by
      fontSize: 15,
      fontWeight: 500,
      fontFamily: "Lato",
      color: "black",
      verticalAlign: "middle",
      textAlign: "center",
      alignItems: "center",
      letterSpacing: ".3rem",
      textTransform: "uppercase",
    },

    subtitle1: {//hotel name
      fontSize: 20,
      fontFamily: "Lato",
      color: "#171717",
      letterSpacing: "0.0075em",
      fontWeight: "600",
      verticalAlign: "middle",
      alignItems: "center",
    },

    subtitle2: {
      fontSize: 15,
      fontFamily: "Lato",
      color: "black",
      // letterSpacing: "0.0075em",
      fontWeight: "bold",
      verticalAlign: "middle",
      alignItems: "center",
    },

    body1: {
      //breadcrum
      fontSize: 15,
      fontWeight: 500,
      fontFamily: "Lato",
      color: "black",
      // letterSpacing: ".1rem",
      verticalAlign: "middle",
      alignItems: "center",
    },

    body2: {}, //card hotel details by default

    caption: { //check in out
      fontSize: 18,
      fontWeight: 500,
      fontFamily: "Lato",
      color: "black",
      // letterSpacing: ".1rem",
      verticalAlign: "middle",
      alignItems: "center",
      // lineHeight: ".1",
    },

    button: {},

    overline: {
      fontSize: 16,
      fontWeight: 600,
      fontFamily: "Lato",
      color: "#333333",
      // letterSpacing: ".2rem",
      verticalAlign: "middle",
      alignItems: "center",
    },

    srOnly: {
      
    },

    inherit: {
      fontSize: 20,
      fontFamily: "Lato",
      color: "#black",
      letterSpacing: "0.0075rem",
      fontWeight: "bold",
      verticalAlign: "middle",
      alignItems: "center",
    },
  },

 
}))

// globalTheme.overrides = {
//   MuiTextField: {
//     root: {
//       background: globalTheme.background.paper,
//       marginTop: globalTheme.spacing(2),
//       marginBottom: globalTheme.spacing(3),
//       borderRadius: globalTheme.shape.borderRadius,
//     },
//   },

//   MuiInputBase: {
//     root: {
//       padding: globalTheme.spacing(1),
//     },
//   },

//   MuiButton: {
//     root: {
//       fontSize: 14,
//       height: "53px",
//       fontWeight: 600,
//       fontFamily: "Lato",
//       letterSpacing: "0.0075em",
//       marginTop: "18px",
//     },
//   },

//   MuiListItemText: {
//     root: {
//       fontSize: 20,
//       fontWeight: 800,
//       fontFamily: "Lato",
//       color: "#2882F8",
//       letterSpacing: "0.0075em",
//       verticalAlign: "middle",
//       alignItems: "center",
//     },
//   },
// };

export default useglobalTheme;
