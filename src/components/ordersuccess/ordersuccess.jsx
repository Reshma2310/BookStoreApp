import React from 'react'
import { Box, Button, Card, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Header from '../header/header'
import { height } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const useStyle = makeStyles({
    mainOS: {
        width: '100vw',
        height: '76vh',
        border: '0px solid orange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentOS: {
        width: '58%',
        height: '98%',
        border: '0px solid pink',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderLogoOS: {
        width: '40%',
        height: '40%'
    },
    orderParaOS: {
        width: '45%',
        color: '#333232',
        fontSize: '18px',
        fontWeight: '500',
    },
    orderTableOS: {
        width: '100%',
        height: '20%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        flexDirection: 'column',
    },
    headOS: {
        width: '100%',
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        color: '#333232',
        fontWeight: '500',
        backgroundColor: '#FAFAFA',
        borderBottom: '1px solid #DCDCDC'
    },
    hiddenTable: {
        display: 'none',
    },
    titleOS: {
        width: '31%',
    },
    addTitleOS: {
        width: '38%',
    },
    dataFieldOS: {
        width: '100%',
        height: '60%',
        display: 'flex',
        color: '#333232',
        fontSize: '16px',
        fontFamily: 'calibri'
    },
    dataOS: {
        width: '31%',
        borderRight: '2px solid #DCDCDC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addDataOS: {
        width: '38%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceOS: {
        width: '90%',
        height: '75%',
        border: '0px solid pink'
    },
    orderBtn: {
        width: '100%',
    },
    orderButton: {
        backgroundColor: '#3371B5',
        width: '25%'
    },
    footerOS: {
        width: '100vw',
        height: '15vh',
        border: '0px solid black',
        display: 'flex',
        alignItems: 'flex-end'
    },
    footerTextOS: {
        width: '100%',
        height: '60%',
        backgroundColor: '#2E1D1E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCopyOS: {
        width: '80%',
        color: 'white',
        textAlign: 'start',
        font: 'normal normal medium 12px/15px Lato',
        border: '0px solid pink',
        fontSize: '12px',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainOS: {
            width: '100vw',
            height: '80vh',
            border: '0px solid orange',
        },
        contentOS: {
            width: '85%',
            height: '98%',
            border: '0px solid orange',
        },
        orderLogoOS: {
            width: '60%',
            height: '30%',
            border: '0px solid pink',
        },
        orderParaOS: {
            width: '75%',
            color: '#333232',
            fontSize: '16px',
            fontWeight: '500',
        },
        orderTableOS: {
            display: 'none'
        },
        hiddenTable: {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #DCDCDC',
            textAlign: 'left',
        },
        hiddenTitle: {
            color: '#333232',
            fontSize: '13px',
            fontWeight: '500',
            backgroundColor: '#FAFAFA',
            borderBottom: '1px solid #DCDCDC',
            height: 'auto',
            padding: '5px',
        },
        hiddenOS: {
            textAlign: 'center',
            borderBottom: '1px solid #DCDCDC',
            height: 'auto',
            fontSize: '12px',
            padding: '5px',
        },
        orderButton: {
            backgroundColor: '#3371B5',
            width: '70%',
            fontSize: 'small !important',
        },
    },
    ['@media only screen and (min-width: 481px) and (max-width: 599px)']: {
        contentOS: {
            width: '90%',
            height: '98%',
        },
        orderLogoOS: {
            width: '50%',
            height: '30%',
            border: '0px solid pink',
        },
        orderParaOS: {
            width: '75%',
            color: '#333232',
            fontSize: '18px',
            fontWeight: '500',
        },
        orderTableOS: {
            width: '100%',
            height: '28%',
        },
        headOS: {
            width: '100%',
            height: '30%',
        },
        dataFieldOS: {
            width: '100%',
            height: '70%',
            fontSize: '13px',
        },
        orderButton: {
            width: '44%'
        },
    },
    ['@media only screen and (min-width: 599px) and (max-width: 720px)']: {
        contentOS: {
            width: '90%',
            height: '98%',
        },
        orderLogoOS: {
            width: '40%',
            height: '30%',
            border: '0px solid pink',
        },
        orderParaOS: {
            width: '75%',
            color: '#333232',
            fontSize: '18px',
            fontWeight: '500',
        },
        orderTableOS: {
            width: '100%',
            height: '28%',
        },
        headOS: {
            width: '100%',
            height: '30%',
        },
        dataFieldOS: {
            width: '100%',
            height: '70%',
            fontSize: '14px',
        },
        orderButton: {
            width: '40%'
        },
    },
    ['@media only screen and (min-width: 721px) and (max-width: 1024px)']: {
        contentOS: {
            width: '75%',
            height: '98%',
        },
        orderLogoOS: {
            width: '35%',
            height: '28%',
            border: '0px solid pink',
        },
        orderParaOS: {
            width: '50%',
            color: '#333232',
            fontSize: '16px',
            fontWeight: '500',
        },
        orderTableOS: {
            width: '100%',
            height: '23%',
        },
        dataFieldOS: {
            width: '100%',
            height: '70%',
            fontSize: '13px',
        },
        orderButton: {
            backgroundColor: '#3371B5',
            width: '37%'
        },
    }
})

function OrderSuccess() {

    const classes = useStyle()

    const navigate = useNavigate()

    const openDashBoard = () => {
        navigate('/dashboard')
    }

    return (
        <Box>
            <Header />
            <Box className={classes.mainOS}>
                <Box className={classes.contentOS}>
                    <Box className={classes.orderLogoOS}>
                        <img width='100%' src='images/orderplaced.jpeg' />
                    </Box>
                    <Box className={classes.orderParaOS}>
                        <span>hurray!!! your order is confirmed<br /> the order id is #123456 save the order id for <br /> further communication..</span>
                    </Box>
                    <Paper elevation={0} className={classes.orderTableOS}>
                        {/* <table>
                            <thead style={{border: '1px solid grey !important', height:'20px', backgroungColor: 'pink'}}>
                                <tr>
                                    <th>Email us</th>
                                    <th>Contact us</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>admin@bookstore.com</td>
                                    <td>+91 8163475881</td>
                                    <td>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                                </tr>
                            </tbody>
                        </table> */}
                        <Box className={classes.headOS}>
                            <Box className={classes.titleOS}>Email us</Box>
                            <Box className={classes.titleOS}>Contact us</Box>
                            <Box className={classes.addTitleOS}>Address</Box>
                        </Box>
                        <Box className={classes.dataFieldOS}>
                            <Box className={classes.dataOS}><Box className={classes.spaceOS}>admin@bookstore.com</Box></Box>
                            <Box className={classes.dataOS}><Box className={classes.spaceOS}>+91 8163475881</Box></Box>
                            <Box className={classes.addDataOS}><Box className={classes.spaceOS} sx={{ textAlign: 'left' }}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                near Kumarakom restaurant, HSR Layout, Bangalore 560034</Box></Box>
                        </Box>
                    </Paper>
                    <Paper elevation={0} className={classes.hiddenTable}>
                        <Box>
                            <Box className={classes.hiddenTitle}>Email us</Box><Box className={classes.hiddenOS}>admin@bookstore.com</Box>
                            <Box className={classes.hiddenTitle}>Contact us</Box><Box className={classes.hiddenOS}>+91 8163475881</Box>
                            <Box className={classes.hiddenTitle}>Address</Box><Box className={classes.hiddenOS} sx={{ textAlign: 'left' }}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                near Kumarakom restaurant, HSR Layout, Bangalore 560034</Box>
                        </Box>
                    </Paper>
                    <Box className={classes.orderBtn}>
                        <Button variant='contained' className={classes.orderButton} onClick={openDashBoard}>Continue Shopping</Button>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.footerOS}>
                <Box className={classes.footerTextOS}>
                    <Box className={classes.textCopyOS}>
                        <span>Copyright  2020. Bookstore Private Limited. All Rights Reserved</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OrderSuccess