import { Box, Button, buttonBaseClasses, Card, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { display, textAlign } from '@mui/system';
import { useState } from 'react';
import OrderSummary from '../order/order';
import { editUser } from '../../services/dataService';

const cityRegex = /^[A-Z]{1}[a-z]{2,}$/;
const stateRegex = /^[A-Z]{1}[a-z]{2,}$/;
const addressRegex = /^[#.0-9a-zA-Z/s,-]+$/;

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
      width: '30%'
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
   },
   contBtn: {
      width: '23%',
      height: '80%',
   },
   ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
      mainCD: {
         width: '80vw',
         height: '82vh',
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
         height: '5%',
         border: '0px solid black'
      },
      textCD: {
         color: '#333232',
         fontSize: '18px',
         fontWeight: '500',
      },
      btnCD: {
         display: 'none',
      },

      textfieldsCD: {
         height: '80%',
         border: '0px solid orange',
      },

      ctnBtnCD: {
         width: '100%',
         height: '10%',
         border: '0px solid black',
         display: 'flex',
         justifyContent: 'flex-end'
      },

      mainFieldCD: {
         width: '100%',
         height: '100%',
         border: '0px solid yellow',
      },
      inputCD: {
         height: '30%',
         flexDirection: 'column',
         border: '0px solid pink'
      },
      textHeadCD: {
         width: '100%',
         height: '45%',
      },
      addressCD: {
         width: '100%',
         height: '15%',
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
      },
      contBtn: {
         width: '35%',
         height: '80%',
         fontSize: '13px !important',
      },
   },
   ['@media only screen and (min-width: 481px) and (max-width: 720px)']: {
      mainCD: {
         width: '80vw',
      },
   },
   ['@media only screen and (min-width: 721px) and (max-width: 1024px)']: {
      mainCD: {
         width: '80vw',
      },
   }
})

function CustomerDetails(props) {

   const [button, setButton] = useState(false)
   const [inputFields, setInputFields] = useState({ addressType: '', fullAddress: '', city: '', state: '' })
   const [regexObj, setRegexObj] = useState({ cityBorder: false, cityHelper: '', stateBorder: false, stateHelper: '' , addBorder: false, addHelper: ''})

   const takingCity = (event) => {
      setInputFields(prevState => ({
         ...prevState,
         city: event.target.value
      }))
      console.log(event.target.value)
   }

   const takingState = (event) => {
      setInputFields(prevState => ({
         ...prevState,
         state: event.target.value
      }))
      console.log(event.target.value)
   }

   const selectOption = (event) => {
      setInputFields(prevState => ({
         ...prevState,
         addressType: event.target.value
      }))
      console.log(event.target.value)
   }

   const takingAddress = (event) => {
      setInputFields(prevState => ({
         ...prevState,
         fullAddress: event.target.value
      }))
      console.log(event.target.value)
   }


   const openOrder = () => {
      

      let cityTest = cityRegex.test(inputFields.city)
      let stateTest = stateRegex.test(inputFields.state)
      let addressTest = addressRegex.test(inputFields.fullAddress)
      if (cityTest === false) {
         setRegexObj(prevState => ({
            ...prevState,
            cityBorder: true,
            cityHelper: "Enter city name"
         }))
      }
      else if (cityTest === true) {
         setRegexObj(prevState => ({
            ...prevState,
            cityBorder: false,
            cityHelper: ""
         }))
      }
      if (stateTest === false) {
         setRegexObj(prevState => ({
            ...prevState,
            stateBorder: true,
            stateHelper: "Enter state name"
         }))
      }
      else if (stateTest === true) {
         setRegexObj(prevState => ({
            ...prevState,
            stateBorder: false,
            stateHelper: ""
         }))
      }
      if (addressTest === false) {
         setRegexObj(prevState => ({
            ...prevState,
            addBorder: true,
            addHelper: "Enter address"
         }))
      }
      else if (addressTest === true) {
         setRegexObj(prevState => ({
            ...prevState,
            addBorder: false,
            addHelper: ""
         }))
      }
      if(cityTest === true && stateTest === true && addressTest === true) {
         editUser(inputFields).then((response) => {
            console.log(response)
            setButton(true)
            props.openOrderDetails() 
         }).catch((error) => { console.log(error) })
      }           
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
                        <TextField variant="outlined" size='small' />
                     </Box>
                  </Box>
                  <Box className={classes.addressCD}>
                     <Box className={classes.addCD}>
                        <span>Address</span>
                        <OutlinedInput variant="outlined" size='small' sx={{ width: '100%', height: '80%' }} onChange={takingAddress} error={regexObj.addBorder} helperText={regexObj.addHelper}
                           />
                     </Box>
                  </Box>

                  <Box className={classes.inputCD}>
                     <Box className={classes.textHeadCD}>
                        <span>city/town</span>
                        <TextField required variant="outlined" size='small' onChange={takingCity} error={regexObj.cityBorder} helperText={regexObj.cityHelper} />
                     </Box>
                     <Box className={classes.textHeadCD}>
                        <span>State</span>
                        <TextField required variant="outlined" size='small' onChange={takingState} error={regexObj.stateBorder} helperText={regexObj.stateHelper} />
                     </Box>
                  </Box>
                  <Box className={classes.radioCD}>
                     <Box> Type</Box>
                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onChange={selectOption}>
                        <Box sx={{ display: 'flex' }}><input style={{ width: '20%' }} type="radio" value="Home" name="type" /> &nbsp;&nbsp;Home</Box>
                        <Box sx={{ display: 'flex' }}><input style={{ width: '20%' }} type="radio" value="Work" name="type" /> &nbsp;&nbsp;Work</Box>
                        <Box sx={{ display: 'flex' }}><input style={{ width: '20%' }} type="radio" value="Other" name="type" /> &nbsp;&nbsp;Other</Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
            <Box className={classes.ctnBtnCD}>
               {
                  button ? null
                     :
                     <Button className={classes.contBtn} variant='contained' onClick={openOrder}>Continue</Button>
               }
            </Box>
         </Box>
      </Card>
   )
}

export default CustomerDetails