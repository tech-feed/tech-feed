import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Button, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';

import 'typeface-poppins'
import logoImg from '../../assets/logo.png'
import backImg from '../../assets/back-header.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontFamily: 'Poppins',
    },
    container: {
      fontFamily: 'Poppins',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    headerContainer: {
      width: '92%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      backgroundColor: '#FFF',
      top: 0,
      padding: '4%',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
    },
    drawerContainer: {
      fontFamily: 'Poppins',
      width: '80vw',
      marginTop: '10%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    drawerItens: {
      textDecoration: 'none',
      color: '#17706E',
      fontWeight: 'bold',
      marginTop: '10%'
    },
    topContainer: {
      display: 'flex',
      backgroundImage: `url(${backImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }, 
    topContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',                                                           
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0, 0.3)',
    },
    cta: {
      marginTop: '70vh',
      padding: '3% 10%',
      backgroundColor: '#17706E',
      color: '#FFF',
    },
    ctaText: {
      marginLeft: 20,
      fontSize: '4vw',
    }
  }),
);

const LandingPage = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => (
    event,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <img src={logoImg} alt="Tech +feed" height="80px" />
        <Button onClick={toggleDrawer()}>
          <MenuIcon color="#17706E" fontSize="large" />
        </Button>
      </div>

      <div className={classes.topContainer}>
        <div className={classes.topContent}>
          <Button className={classes.cta}>
            <AddBoxIcon color="#17706E" fontSize="large" />
            <p className={classes.ctaText}>Doe Agora!</p>
          </Button>
        </div>
      </div>

    
      <Drawer anchor='right'
          open={isOpen} 
          onClose={toggleDrawer()}
        >
          <div className={classes.drawerContainer}>
            <Link className={classes.drawerItens} to="/home">Home</Link>
            <Link className={classes.drawerItens} to="/about">Sobre</Link>
            <Link className={classes.drawerItens} to="/signin">Entrar</Link>
          </div>
        </Drawer>
    </div>
  )
}
export default LandingPage