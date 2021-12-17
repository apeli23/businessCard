import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  grow: {
    flexGrow: 1,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  main: {
    minHeight: '80vh',
    margin: 20,
    padding:20,
  },
  center: {
    textAlign:'center',
  },
  section: {
    marginTop: 10,
    marginBottom:10,
    maxWidth:800,
    },
  form: {
    maxWidth:500,
    margin: '0 auto',
  },
  modal: {
    backgroundColor: '#d4d4d4',
    borderRadius: '0.5rem',
    marginRight: '0.5rem',
    fontWeight: 10,
    marginTop: '5px',
  },
  imgContainer : {
    margin: 'auto',
  },
  rightItems: {
    marginLeft: '24px',
  }
});

export default useStyles;
