import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'typeface-poppins'

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
    background: '#17706E',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 84,
    width: 142,
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
        <div style={{ hover:'none', height: '70%', width: '100%', display: 'flex', flex: 1, padding: '5%' }}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Button classes={{root: classes.message,label: classes.label,}}>Bom dia, seu João, acompanhe aqui os dados da sua plantação em tempo real!</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.root,label: classes.label,}}>PERCENTUAL DO TANQUE</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.outros,label: classes.label,}}>Histórico</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.sais,label: classes.label,}}>SAIS MINERAIS</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.outros,label: classes.label,}}>Sua Produção</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.pragas,label: classes.label,}}>QUANTIDADE DE ÁGUA</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.outros,label: classes.label,}}>Serviços Contratados</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.agua,label: classes.label,}}>CONTROLE DE PRAGAS</Button>
        </Grid>
        <Grid item xs>
        <Button classes={{root: classes.outros,label: classes.label,}}>Cadastre Alimentos</Button>
        </Grid>
        </Grid>

        </div>
      </Scrollbar>
    </Page>
  )
}
export default HomePage
