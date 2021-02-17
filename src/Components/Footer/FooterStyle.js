import { makeStyles } from '@material-ui/core/styles';

const useFooterStyles = makeStyles((theme) => ({
    footer: {
      position: 'relative',
      backgroundColor: '#1c1c1c',
      height: 'auto',
      padding: theme.spacing(5),
      margin: theme.spacing(0.4),
    },
    paper: {
       background: 'transparent',
       margin: theme.spacing(2),
       padding: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
       margin: theme.spacing(0),
       padding: theme.spacing(0),
       },
    },
    cardmedia: {
      maxWidth:'60px',
      maxHeight:'60px',
      borderRadius: '50%',
      background: 'transparent',
      objectFit: 'contain',
      margin: 'auto',
    },
    menu_link: {
      textDecoration: 'none',
      listStyleType: 'none',
      fontSize: 'small',
      fontWeight: 800,
      color: '#FFF',
      transition: '0.4s',
      letterSpacing: '0.05rem',
      '&:hover': {
        backgroundColor: '#6099F5',
        color: '#ffff',
        padding: '4px',
    },
  },
  footerheader: {
    color: '#f6a82f',
    fontWeight: 'bold',
  },
  
  }))

  export default useFooterStyles;