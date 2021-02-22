import { makeStyles } from '@material-ui/core/styles';

const useSinglePageStyles = makeStyles((theme) => ({
    singlepage: {
        width: '100vw',
        height: 'auto',
        margin: 'auto',
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
      },
      gridroot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        maxWidth: 800,
        height: 450,
      },
      hotelsurrounding: {
        padding: theme.spacing(2),
      },
      facilities: {
        padding: theme.spacing(2),
      },
}))
export default useSinglePageStyles;