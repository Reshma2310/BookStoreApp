import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import LoginPage from '../../components/login/login';
import SignUp from '../../components/signup/signup';

const useStyles = makeStyles({
    mainLP: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#777777',
        // backgroundColor: '#000000',
        // opacity: '0.31',
    },
    containerLP: {
        width: '45%',
        height: '50%',
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: '185px',
        left: '360px',
        zIndex: 5,
        borderRadius: '21px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        opacity: '1',
    },
    logoTextLP: {
        width: '50%',
        height: '76%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgLogoLP: {
        width: '14rem',
        height: '14rem',
    },
    imgLP: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    },
    imgBookLP: {
        width: '30px',
        
        position: 'relative',
        bottom: '184px',
        left: '56px',        
    },
    textLogoLP: {
        fontSize: 'large',
        fontWeight: '500',
    },
    loginLP: {
        width: '26%',
        height: '60%',
        backgroundColor: '#FFFFFF',
        borderC: '#E4E4E4',
        position: 'relative',
        bottom: '225px',
        left: '690px',
        zIndex: 15,
        opacity: '1',
        borderRadius: '21px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

function LanderPage() {
    const classes = useStyles()
    const [toggle, setToggle] = useState(false)

    const listenToLoginBtn = () => {
        setToggle(true)
    }
    
    const listenToSignupBtn = () => {
        setToggle(false)
    }

    return (
        <Box className={classes.mainLP}>
            <Box className={classes.containerLP}>
                <Box className={classes.logoTextLP}>
                    <Box className={classes.imgLogoLP}>
                        <img className={classes.imgLP} src='images/bslogo.png' />
                        <img className={classes.imgBookLP} src='images/book.png'/>
                    </Box>
                    <Box className={classes.textLogoLP}>ONLINE BOOK SHOPPING</Box>
                </Box>
                <Box className={classes.emptyBox}></Box>
            </Box>
            <div>
            {
                toggle ? <SignUp listenToSignupBtn={listenToSignupBtn}/> : <LoginPage listenToLoginBtn={listenToLoginBtn}/>
            }
            </div>
        </Box>
    )
}

export default LanderPage