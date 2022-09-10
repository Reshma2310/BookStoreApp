import { Box, Button, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
   mainOD: {
      width: '61vw',
      height: '30vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   contentOD: {
      width: '92%',
      height: '85%',
      border: '0px solid pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontWeight: '500',
   },
   headOD: {
      width: '100%',
      height: '15%',
      border: '0px solid orange',
      textAlign: 'left',
      fontSize: '18px', 
   },
   bookOD: {
      width: '38%',
      height: '50%',
      border: '0px solid orange',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
   },
   bookImgOD: {
      width: '20%',
      height: '90%',
      marginTop: '5px',
      border: '0px solid orange',
   },
   dataOD: {
      width: '69%',
      height: '100%',
      border: '0px solid orange',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
   },
   priceOD: {
      width: '53%',
      height: '25%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   discountOD: {
      color: '#0A0102',
      fontWeight: '500',
      fontSize: '16px',
   },
   costOD: {
      color: '#878787',
      textDecorationLine: 'line-through',
      fontSize: '10px',
   },
   btnOD: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
   }
   
})

function OrderSummary() {
   const classes = useStyle()
   return (
      <Card className={classes.mainOD} variant='outlined'>
         <Box className={classes.contentOD}>
            <Box className={classes.headOD}>
               <span>Order summery</span>
            </Box>
            <Box className={classes.bookOD}>
               <Box className={classes.bookImgOD}>
                  <img width='100%' height='100%' src='images/bookimg.png' />
               </Box>
               <Box className={classes.dataOD}>
                  <Box sx={{ height: '30%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>Don't Make Me Think</Box>
                  <Box sx={{ height: '24%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>by Steve Krug</Box>
                  <Box className={classes.priceOD}>
                     <Box className={classes.discountOD}>Rs. 15000</Box><Box className={classes.costOD}>Rs. 20000</Box></Box>
                  <Box sx={{ height: '15%' }}></Box>                  
               </Box>
            </Box>
            <Box className={classes.btnOD}>
               <Button variant='contained' sx={{width: '23%'}}>Checkout</Button>
            </Box>
         </Box>

      </Card>
   )
}

export default OrderSummary