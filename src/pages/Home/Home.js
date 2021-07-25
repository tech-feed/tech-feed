import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import 'typeface-poppins'
import banner_crono from './cronograma.png'
import banner_tempo from './tempo.png'
import banner_id from './id.png'

const classes_button = makeStyles({
  root: {
    fontFamily: 'Poppins',
    background: '#FF882C',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 84,
    width: 142,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    "&:hover": {
      backgroundColor: "#FF882C"
    },
  },
  agua: {
    fontFamily: 'Poppins',
    fontSize: '24px',
    background: '#17706E',
    color: 'white',
    height: 84,
    width: 320,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    "&:hover": {
      backgroundColor: "#17706E"
    },
  },
  sais: {
    fontFamily: 'Poppins',
    background: '#867B4E',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 84,
    width: 142,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    "&:hover": {
      backgroundColor: "#867B4E"
    },
  },
  outros: {
    fontFamily: 'Poppins',
    background: '#FFF',
    borderRadius: 5,
    border: 0,
    color: 'black',
    height: 84,
    width: 142,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    "&:hover": {
      backgroundColor: "#FFF"
    },
  },
  pragas: {
    fontFamily: 'Poppins',
    background: '#84B3B2',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 84,
    width: 142,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    "&:hover": {
      backgroundColor: "#84B3B2"
    },
  },
  message: {
    fontFamily: 'Poppins',
    color: 'black',
  },
  label: {
    textTransform: 'capitalize',
  },
});

const HomePage = () => {
  const intl = useIntl()
  const classes = classes_button();

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1, padding: 10 }}
      >
        <div style={{ hover:'none', height: '90%', width: '100%', display: 'flex', flex: 1, padding: '5%' }}>
        <Grid container spacing={1}>
        <Grid item xs>
        <img src={banner_id} alt="Apresentacao" width="320px"></img>
        </Grid>
        <Grid item xs>
        <img src={banner_tempo} alt="Previsão do tempo" width="320px"></img>
        </Grid>
        <Grid item xs={12}>
        <img src={banner_crono} alt="Cronograma" width="320px"></img> 
        </Grid>
        <Grid item xs={12}>
        <Button classes={{root: classes.agua,label: classes.label,}}>
          <AddAPhotoIcon color="white" fontSize="large"/>
          &nbsp;&nbsp;&nbsp;&nbsp;Identificar Praga
        </Button>
        </Grid>
        </Grid>

        </div>
      </Scrollbar>
    </Page>
  )
}
export default HomePage
