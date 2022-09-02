import React from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { height } from '@mui/system';

const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^[1-9]{1}[0-9]{9}$/;

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
        textTransform: 'capitalize !important'
    }
})

function SignUp(props) {

    const [signupObj, setSignupObj] = React.useState({ name: "", email: "", password: "", mobile: "" })
    const [rejexObj, setRejexObj] = React.useState({ nameBorder: false, nameHelper: "", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "", mobileBorder: false, mobileHelper: "" })

    const takeUserName = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            name: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeEmail = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeMobileNo = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            mobile: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let nameTest = nameRegex.test(signupObj.name)
        let emailTest = emailRegex.test(signupObj.email)
        let passwordTest = passwordRegex.test(signupObj.password)
        let mobileTest = mobileRegex.test(signupObj.mobile)
        if (nameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                nameBorder: true,
                nameHelper: "Enter valid name"
            }))
        }
        else if (nameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                nameBorder: false,
                nameHelper: ""
            }))
        }
        if (emailTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter valid email"
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
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        if (mobileTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                mobileBorder: true,
                mobileHelper: "Enter valid mobile number"
            }))
        }
        else if (mobileTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                mobileBorder: false,
                mobileHelper: ""
            }))
        }
    }

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
                        <TextField className={classes.textSU} variant="outlined" size="small" onChange={takeUserName}
                            error={rejexObj.nameBorder} helperText={rejexObj.nameHelper} />
                    </Box>
                    <Box className={classes.titleTextSU}><span>Email Id</span>
                        <TextField className={classes.textSU} variant="outlined" size="small" onChange={takeEmail}
                            error={rejexObj.emailBorder} helperText={rejexObj.emailHelper} />
                    </Box>
                    <Box className={classes.titleTextSU}><span>Password</span>
                        <TextField className={classes.textSU} variant="outlined" size="small" onChange={takePassword}
                            error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} />
                    </Box>
                    <Box className={classes.titleTextSU}><span>Mobile Number</span>
                        <TextField className={classes.textSU} variant="outlined" size="small" onChange={takeMobileNo}
                            error={rejexObj.mobileBorder} helperText={rejexObj.mobileHelper} />
                    </Box>
                    <Box className={classes.titleTextSU}>
                        <Button className={classes.textSU} variant="contained" color="success" onClick={submit}>Signup</Button>
                    </Box>

                </Box>
            </Box>
        </Paper>
    )
}

export default SignUp