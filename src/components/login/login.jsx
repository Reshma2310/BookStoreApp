import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material'
import { login } from '../../services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const useStyles = makeStyles({
    loginSIP: {
        width: '26vw',
        height: '60vh',
        backgroundColor: '#FFFFFF',
        borderC: '#E4E4E4',
        position: 'relative',
        // bottom: '220px',
        top: '150px',
        left: '690px',
        zIndex: 15,
        opacity: '1',
        borderRadius: '21px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentSIP: {
        width: '90%',
        height: '85%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },    
    btnClassSIP: {
        width: '100%',
        height: '17%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    loginBtnSIP: {
        fontSize: 'large !important',
        fontWeight: 'bold !important',
        color: 'black !important',
        width: '40%',
    },
    signupBtnSIP: {
        fontSize: 'large !important',
        fontWeight: 'bold !important',
        color: 'grey !important',
        width: '40%',
    },
    boxesSIP: {
        width: '75%',
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    emailSIP: {
        width: '100%',
    },
    titleTextSIP: {
        textAlign: 'left !important',
        fontSize: '12px',
        border: '0px solid blue'
    },
    pwdSIP: {
        width: '100%',
    },
    loginKeySIP: {
        width: '100%',
        textTransform: 'capitalize !important',
        backgroundColor: '#A03037 !important',
    },
    fbgoogleSIP: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    fbBtnSIP: {
        width: '48%',
    },
    fbSIP: {
        fontWeight: '500 !important',
        textTransform: 'capitalize !important',
        width: '100%'
    },
    googlebtnSIP: {
        width: '48%',
    },
    googleSIP: {
        color: 'black !important',
        fontWeight: '500 !important',
        textTransform: 'capitalize !important'
    }
})

function LoginPage(props) {

    const [loginObj, setLoginObj] = React.useState({ email: "", password: "" })
    const [rejexObj, setRejexObj] = React.useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })

    const takeUserName = (event) => {
        setLoginObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    
    const takePassword = (event) => {
        setLoginObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let emailTest = emailRegex.test(loginObj.email)
        let passwordTest = passwordRegex.test(loginObj.password)
        if (emailTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter an email or phone number"
            }))
        }
        else if (emailTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Incorrect password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        if (emailTest === true && passwordTest === true) {
            login(loginObj).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.result.accessToken)                
            }).catch((error) => { console.log(error) })
            console.log("login successful");
        }
    }    

    const classes = useStyles()

    const openSignup = () => {
        props.listenToLoginBtn()
    }

    return (
        <Paper elevation={3} className={classes.loginSIP}>
            <Box className={classes.contentSIP}>
                <Box className={classes.btnClassSIP}>
                    <Button className={classes.loginBtnSIP}>LOGIN</Button>
                    <Button className={classes.signupBtnSIP} onClick={openSignup}>SIGNUP</Button>
                </Box>
                <Box className={classes.boxesSIP}>
                    <Box className={classes.titleTextSIP}><span>Email Id</span>
                        <TextField className={classes.emailSIP} variant="outlined" size="small"
                            onChange={takeUserName} error={rejexObj.emailBorder} helperText={rejexObj.emailHelper} />
                    </Box>
                    <Box className={classes.titleTextSIP}><span>Password</span>
                        <TextField className={classes.pwdSIP} variant="outlined" size="small" 
                            onChange={takePassword} error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper}/>
                    </Box>
                    <Box >
                        <Button className={classes.loginKeySIP} variant="contained" onClick={submit}>Login</Button>
                    </Box>
                    {/* <Box sx={{fontWeight: 'bold'}}>     ----- OR -----   </Box> */}
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', fontWeight: 'bold'}}><Divider sx={{ borderBottomWidth: 3, width: '30%' }} />OR <Divider sx={{ borderBottomWidth: 3, width: '30%' }} /></Box>
                    <Box className={classes.fbgoogleSIP}>
                        <Box className={classes.fbBtnSIP}> <Button className={classes.fbSIP} variant="contained" >Facebook</Button></Box>
                        <Box className={classes.googlebtnSIP}><Button className={classes.googleSIP} variant="contained" disabled sx={{ width: '100%', color: 'black' }}>Google</Button></Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default LoginPage