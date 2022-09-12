import { Box, Button, buttonBaseClasses, Card, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { display, textAlign } from '@mui/system';
import { useState } from 'react';
import OrderSummary from '../order/order';


const useStyle = makeStyles({
   mainCD: {
      width: '61vw',
      height: '70vh',
      //border: '1px solid #DBDBDB',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   contentCD: {
      width: '92%',
      height: '90%',
      border: '0px solid blue',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   headCD: {
      width: '100%',
      height: '8%',
      border: '0px solid pink',
      display: 'flex',
      justifyContent: 'space-between'
   },
   textCD: {
      color: '#333232',
      fontSize: '18px',
      fontWeight: '500',
   },
   btnCD: {
      width: '23%'
   },
   textfieldsCD: {
      width: '95%',
      height: '75%',
      border: '0px solid orange',
      display: 'flex',
      alignItems: 'center',
      fontWeight: '500',
   },
   ctnBtnCD: {
      width: '100%',
      height: '10%',
      border: '0px solid orange',
      display: 'flex',
      justifyContent: 'flex-end'
   },
   mainFieldCD: {
      width: '72%',
      height: '92%',
      border: '0px solid pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
   },
   inputCD: {
      width: '100%',
      height: '18%',
      display: 'flex',
      justifyContent: 'space-between',
      border: '0px solid blue',
   },
   textHeadCD: {
      textAlign: 'left !important',
      width: '49%',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
   },
   addressCD: {
      width: '100%',
      height: '30%',
      border: '0px solid blue',
      textAlign: 'left !important',
      fontSize: '12px',
   },
   addCD: {
      width: '100%',
      height: '100%',
   },
   radioCD: {
      width: '60%',
      height: '14%',
      border: '0px solid pink',
      textAlign: 'left',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
   }
})

function CustomerDetails(props) {

   const [button, setButton] =useState(false)

   const openOrder = () => {
      props.openBookDetails()
      setButton(true)
   }

   const classes = useStyle()
   return (
      <Card className={classes.mainCD} variant="outlined">
         <Box className={classes.contentCD}>
            <Box className={classes.headCD}>
               <Box className={classes.textCD}>Customer Details</Box>
               <Box className={classes.btnCD}>
                  <Button variant='outlined' sx={{ width: '100%', color: '#A03037', border: '1px solid #A03037', textTransform: 'capitalize' }}>Add New Address</Button>
               </Box>
            </Box>
            <Box className={classes.textfieldsCD}>
               <Box className={classes.mainFieldCD}>
                  <Box className={classes.inputCD}>
                     <Box className={classes.textHeadCD}>
                        <span>Full Name</span>
                        <TextField variant="outlined" size='small' />
                     </Box>
                     <Box className={classes.textHeadCD}>
                        <span>Mobile Number</span>
                        <TextField variant="outlined" size='small' sx />
                     </Box>
                  </Box>
                  <Box className={classes.addressCD}>
                     <Box className={classes.addCD}>
                        <span>Address</span>
                        <OutlinedInput variant="outlined" size='small' sx={{ width: '100%', height: '80%' }} />
                     </Box>
                  </Box>

                  <Box className={classes.inputCD}>
                     <Box className={classes.textHeadCD}>
                        <span>city/town</span>
                        <TextField variant="outlined" size='small' />
                     </Box>
                     <Box className={classes.textHeadCD}>
                        <span>State</span>
                        <TextField variant="outlined" size='small' sx />
                     </Box>
                  </Box>
                  <Box className={classes.radioCD}>
                     <Box> Type</Box>
                     <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box sx={{display: 'flex'}}><input style={{width: '20%'}} type="radio" value="Male" name="gender" /> &nbsp;&nbsp;Home</Box>
                        <Box sx={{display: 'flex'}}><input style={{width: '20%'}} type="radio" value="Female" name="gender" /> &nbsp;&nbsp;Work</Box>
                        <Box sx={{display: 'flex'}}><input style={{width: '20%'}} type="radio" value="Other" name="gender" /> &nbsp;&nbsp;Other</Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
            <Box className={classes.ctnBtnCD}>
               {
                  button ? null
                  :
                  <Button sx={{ width: '23%', height: '80%' }} variant='contained' onClick={openOrder}>Continue</Button>
               }
            </Box>            
         </Box>
      </Card>
   )
}

export default CustomerDetails