import { Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { fontSize } from "@mui/system";

const useStyle = makeStyles({
    mainB: {
        width: '18vw',
        height: '45vh',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '23px',
        marginRight: '30px',
    },
    bookImgB: {
        width: '100%',
        height: '60%',
        // border: '1px solid blue',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsB: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageB: {
        width: '45%',
        height: '80%'
    },
    ImgB: {
        width: '100%',
        height: '100%',
    },
    textB: {
        width: '85%',
        height: '80%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        lineHeight: '1.5'
    },
    titleB: {
        height: '22%',
        color: '#0A0102',
        fontWeight: '500',
        letterSpacing: '0px',
        fontFamily: 'normal normal normal 14px/19px Roboto',
    },
    authorB: {
        height: '22%',
        color: '#878787',
        fontFamily: 'normal normal normal 10px/13px Roboto',
    },
    pointsB: {
        width : '30%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingB: {
        width: '60%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },
    markB: {
        width: '30%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '14px',
    },
    priceB: {
        width: '50%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountB: {
        fontWeight: '500',
        fontSize: '14px',
    },
    costB: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '12px',
    }
})
function Book() {
    const classes = useStyle()
    return (
        <Paper elevation={2} className={classes.mainB}>
            <Box className={classes.bookImgB}>
                <Box className={classes.ImageB}><img className={classes.ImgB} src="images/bookimg.png" /></Box>
            </Box>
            <Box className={classes.detailsB}>
                <Box className={classes.textB}>
                    <Box className={classes.titleB}>Don't Make Me Think</Box>
                    <Box className={classes.authorB}>by Steve Krug</Box>
                    <Box className={classes.pointsB}>
                        <Box className={classes.ratingB}>
                            <Box sx={{ fontSize: '12px' }}>4.5</Box>
                            <StarIcon fontSize="10px" sx={{ color: 'white' }} />
                        </Box><Box className={classes.markB}> (20)</Box>
                    </Box>
                    <Box className={classes.priceB}>
                        <Box className={classes.discountB}>Rs. 1500</Box><Box className={classes.costB}>Rs. 20000</Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default Book