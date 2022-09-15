import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../header/header';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import { useState } from 'react';
import CustomerDetails from '../customerdetails/customerdetails';
import OrderSummary from '../order/order';
import { cartBookList, itemsCount, removeFromCart } from '../../services/dataService';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyle = makeStyles({
   headerMC: {
      width: '79vw',
      height: '10vh',
      border: '0px solid blue',
      display: 'flex',
      position: 'relative',
      top: '6px',
      left: '153px',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontWeight: '500',
   },
   homeMC: {
      color: '#9D9D9D',
      fontSize: '12px',
   },
   cartMC: {
      color: '#0A0102',
      fontSize: '12px',
   },
   mainMC: {
      width: '61vw',
      height: 'auto',
      border: '0px solid black',
      position: 'relative',
      left: '153px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
   },
   contentMC: {
      width: '100%',
      height: 'auto',
      border: '1px solid #DBDBDB',
      // opacity: '0.24',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   addressOrderMC: {
      width: '100%',
      height: '10vh',
      border: '1px solid #DBDBDB',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   detailsMC: {
      width: '92%',
      height: 'auto',
      margin: '20px 0px 20px 0px',
      border: '0px solid blue',
      display: 'flex',
      flexDirection: 'column',
   },
   cartBtnMC: {
      width: '100%',
      height: '6vh',
      border: '0px solid blue',
      display: 'flex',
      justifyContent: 'space-between',
   },
   contentTwoMC: {
      width: '38%',
      height: '19vh',
      border: '0px solid pink',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '25px',
   },
   bookImgMC: {
      width: '20%',
      height: '62%',
      marginTop: '5px',
      border: '0px solid orange',
   },
   dataMC: {
      width: '69%',
      height: '100%',
      border: '0px solid orange',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
   },
   priceMC: {
      width: '53%',
      height: '17%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   discountMC: {
      color: '#0A0102',
      fontWeight: '500',
      fontSize: '16px',
   },
   costMC: {
      color: '#878787',
      textDecorationLine: 'line-through',
      fontSize: '10px',
   },
   countMC: {
      width: '100%',
      height: '27%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      border: '0px solid blue'
   },
   // circleMC: {
   //    width: '24px',
   //    height: '24px',
   //    background: '#FAFAFA',
   //    border: '1px solid #DBDBDB',
   //    borderRadius: '50%',
   // },
   addressOrderMC: {
      width: '100%',
      height: '7vh',
      border: '1px solid #DBDBDB',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   textMC: {
      width: '92%',
      textAlign: 'left',
      fontSize: '15px',
      fontWeight: '500',
   },
   footerMC: {
      width: '98.9vw',
      height: '15vh',
      border: '0px solid black',
      display: 'flex',
      alignItems: 'flex-end'
   },
   footerTextMC: {
      width: '100%',
      height: '60%',
      backgroundColor: '#2E1D1E',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   textCopyMC: {
      width: '80%',
      color: 'white',
      textAlign: 'start',
      font: 'normal normal medium 12px/15px Lato',
      border: '0px solid pink',
      fontSize: '12px',
   }
})

function MyCart(props) {
   const [cartList, setCartList] = useState([])
   const [button, setButton] = useState(false)
   const [toggle, setToggle] = useState(false)
   const [order, setOrder] = useState(false)
   const [count, setCount] = useState(1)
   const [quantity, setQuantity] = useState([])
   const navigate = useNavigate()

   const openDashBoard = () => {
      navigate('/dashboard')
   }

   const openDetails = () => {
      setToggle(true)
      setButton(true)
   }

   const openBookDetails = () => {
      setOrder(true)
   }

   const getList = (obj) => {
      console.log('cart list books')
      
      cartBookList().then((response) => {
         console.log(response)
         setCartList(response.data.result)
         setQuantity(response.data.result)
         
//         setCartList(idListArray)
      }).catch((error) => console.log(error))
   }

   const decrementValue = (id) => {
      if (count < 2) {
         setCount(1)
     } else {
         setCount(prevcount => prevcount - 1)
     }
     let inputObj = { cartItem_id:id, quantityToBuy: count - 1 }
     console.log(inputObj, 'value of quantity')
     itemsCount(inputObj ).then((response) => {
         console.log(response, 'decrement value')
     }).catch((error) => console.log(error))
     console.log(quantity, 'quantity value of product dec....')
   }

   const incrementValue = (id) => {
      console.log(id, 'from mycart inc...' )
      setCount(prevcount => prevcount + 1)
      let inputObj = { cartItem_id:id, quantityToBuy: count + 1 }
      console.log(inputObj, 'value of quantity')
      itemsCount(inputObj).then((response) => {
         console.log(response, 'increment value')
      }).catch((error) => console.log(error))
   }

   const removeItem = (id) => {
      console.log(id)
        let obj = {cartItem_id: id}
      removeFromCart(obj).then((response) => {
         console.log(response)
      }).catch((error) => console.log(error))
   }

   useEffect(() => {
      getList()
   }, [])

   const classes = useStyle()
   return (
      <Box>
         <Header />
         <Box className={classes.headerMC}>
            <span className={classes.homeMC} onClick={openDashBoard}>Home /</span>&nbsp;<span className={classes.cartMC}> My cart</span>
         </Box>
         <Box className={classes.mainMC} >
            <Card className={classes.contentMC} variant="outlined" >
               <Box className={classes.detailsMC}>
                  <Box className={classes.cartBtnMC}>
                     <Box sx={{ fontSize: '18px', fontWeight: '500' }}>My cart (1)</Box>
                     <Button startIcon={<LocationOnIcon sx={{ color: '#A03037' }} />} endIcon={<ArrowDropDownIcon sx={{ width: '30px', height: 'auto', color: '#DCDCDC' }} />}
                        variant="outlined" sx={{
                           width: '32%', textTransform: 'none', color: '#0A0102', borderColor: '#DCDCDC', display: 'flex',
                           justifyContent: 'space-around'
                        }}>Use current location</Button>
                  </Box>
                  <Box sx={{ height: '2vh' }}></Box>
                  {
                     cartList.map((list) => (
                        <Box className={classes.contentTwoMC} id={list.product_id._id}>
                           <Box className={classes.bookImgMC}>
                              <img width='100%' height='100%' src='images/bookimg.png' />
                           </Box>
                           <Box className={classes.dataMC}>
                              <Box sx={{ height: '22%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>
                                 {/* Don't Make Me Think */}
                                 {list.product_id.bookName}
                              </Box>
                              <Box sx={{ height: '17%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>{list.product_id.author}
                                 {/* by Steve Krug */}
                              </Box>
                              <Box className={classes.priceMC}>
                                 <Box className={classes.discountMC}>Rs. {list.product_id.discountPrice}</Box><Box className={classes.costMC}>Rs. {list.product_id.price}</Box></Box>
                              <Box sx={{ height: '15%' }}></Box>
                              <Box className={classes.countMC}>
                                 <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'space-between' }}>
                                    <Box className={classes.circleMC}>
                                       <IconButton size='small' sx={{ widht: '20px', border: '1px solid #DBDBDB' }}
                                          onClick={()=>decrementValue(list.product_id._id)} ><RemoveIcon fontSize='small' sx={{ color: '#DBDBDB' }} /></IconButton>
                                    </Box>
                                    <Box sx={{ width: '41px', height: '24px', border: '1px solid #DBDBDB' }}>
                                       <span style={{ fontSize: '14px' }} >{list.quantityToBuy}</span>
                                    </Box>
                                    <Box className={classes.circleMC}>
                                       <IconButton size='small' sx={{ border: '1px solid #DBDBDB' }}
                                          onClick={()=>incrementValue(list.product_id._id)}><AddIcon fontSize='small' sx={{ color: '#333232' }} /></IconButton>
                                    </Box>
                                 </Box>
                                 <Box sx={{ width: '30%' }}>
                                    <span style={{ fontSize: '14px', color: '#0A0102', fontWeight: '500' }} onClick={()=>removeItem(list._id)}>Remove</span>
                                 </Box>
                              </Box>
                           </Box>
                        </Box>
                     ))
                  }
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                     {
                        button ? null
                           :
                           <Button sx={{ backgroundColor: '#3371B5', width: '23%' }} variant="contained" onClick={openDetails}>Place Order</Button>
                     }
                  </Box>
               </Box>
            </Card>


            <Box sx={{ height: '2vh' }}></Box>
            {toggle ? <CustomerDetails openBookDetails={openBookDetails} /> :
               <Card className={classes.addressOrderMC} variant="outlined">
                  <span className={classes.textMC}>Address Details</span>
               </Card>}
            <Box sx={{ height: '2vh' }}></Box>
            {
               order ? <OrderSummary /> :
                  <Card className={classes.addressOrderMC} variant="outlined">
                     <span className={classes.textMC}>Order summery</span>
                  </Card>
            }
         </Box>
         <Box sx={{ height: '12vh' }}></Box>
         <Box className={classes.footerMC}>
            <Box className={classes.footerTextMC}>
               <Box className={classes.textCopyMC}>
                  <span>Copyright  2020. Bookstore Private Limited. All Rights Reserved</span>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default MyCart