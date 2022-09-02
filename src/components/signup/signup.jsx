import React from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { height } from '@mui/system';

const useStyles = makeStyles({

    loginSU: {
        width: '26vw',
        height: '60vh',
        backgroundColor: '#FFFFFF',
        borderC: '#E4E4E4',
        position: 'relative',
        // bottom: '220px',
        left: '690px',
        top: '150px',
        zIndex: 15,
        borderRadius: '21px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentSU: {
        width: '90%',
        height: '85%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnClassSU: {
        width: '100%',
        height: '12%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    loginBtnSU: {
        fontSize: 'large !important',
        fontWeight: 'bold !important',
        color: 'grey !important',
        width: '40%',
    },
    signupBtnSU: {
        fontSize: 'large !important',
        fontWeight: 'bold !important',
        color: 'black !important',
        width: '40%',
    },
    boxesSU: {
        width: '75%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleTextSU: {
        textAlign: 'left !important',
        fontSize: '12px',
        border: '0px solid blue',
        height: '10px',
    },
    textSU: {
        width: '100%',
    }
})

function SignUp(props) {
    const classes = useStyles()

    const openLogin = () => {
        props.listenToSignupBtn()
    }

    return (
        <Paper elevation={3} className={classes.loginSU}>
            <Box className={classes.contentSU}>
                <Box className={classes.btnClassSU}>
                    <Button className={classes.loginBtnSU} onClick={openLogin}>LOGIN</Button>
                    <Button className={classes.signupBtnSU} >SIGNUP</Button>
                </Box>
                <Box className={classes.boxesSU}>
                    <Box className={classes.titleTextSU}><span>Full Name</span>
                        <TextField className={classes.textSU} variant="outlined" size="small"/>
                    </Box>
                    <Box className={classes.titleTextSU}><span>Email Id</span>
                        <TextField className={classes.textSU} variant="outlined" size="small" />
                    </Box>
                    <Box className={classes.titleTextSU}><span>Password</span>
                        <TextField className={classes.textSU} variant="outlined" size="small" />
                    </Box>
                    <Box className={classes.titleTextSU}><span>Mobile Number</span>
                        <TextField className={classes.textSU} variant="outlined" size="small" />
                    </Box>
                    <Box className={classes.titleTextSU}>
                        <Button className={classes.textSU} variant="contained" color="success">Signup</Button>
                    </Box>

                </Box>
            </Box>
        </Paper>
    )
}

export default SignUp