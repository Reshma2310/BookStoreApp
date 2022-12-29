import React, { useReducer } from 'react';
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
import { getCartItems, cartItemQuantity, removeFromCart, addOrder, } from '../../services/dataService';
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
   locationBtn: {
      width: '32%',
      textTransform: 'none',
      color: '#0A0102 !important',
      borderColor: '#DCDCDC !important',
      display: 'flex',
      justifyContent: 'space-around'
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
   },
   placeBtn: {
      width: '23%',
   },
   mainOD: {
      width: '61vw',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   contentOD: {
      width: '92%',
      height: 'auto',
      margin: '20px 0px 20px 0px',
      border: '0px solid pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontWeight: '500',
   },
   headOD: {
      width: '100%',
      height: '7vh',
      border: '0px solid orange',
      textAlign: 'left',
      fontSize: '18px',
   },
   bookOD: {
      width: '38%',
      height: '14vh',
      marginBottom: '20px',
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
   },
   checkBtnOD: {
      width: '23%',
   },

   ['@media only screen and (min-width: 320px) and (max-width: 481px)']: {
      headerMC: {
         width: '80vw',
         left: '33px',
      },
      mainMC: {
         width: '80vw',
         left: '33px',
      },           
      locationBtn: {
         display: 'none !important',
      },
      contentTwoMC: {
         width: '100%',
         height: '18vh',
         border: '0px solid blue'
      },
      priceMC: {
         width: '60%',
      },
      placeBtn: {
         width: '60%',
      },
      mainOD: {
         width: '80vw',
      },
      bookOD: {
         width: '100%',
         height: '13vh',
         border: '0px solid blue',
      },
      bookImgOD: {
         width: '20%',
         height: '80%',
         marginTop: '5px',
         border: '0px solid orange',
      },
      priceOD: {
         width: '60%',
         height: '25%',
      },
      checkBtnOD: {
         width: '38%',
      },
   },   

   ['@media only screen and (min-width: 481px) and (max-width: 720px)']: {
      headerMC: {
         width: '80vw',
         left: '63px',
      },
      mainMC: {
         width: '80vw',
         left: '63px',
      },
      contentTwoMC: {
         width: '70%',
         height: '19vh',
      },
      placeBtn: {
         width: '40%',
      },
      mainOD: {
         width: '80vw',
      },
      bookOD: {
         width: '80%',
         height: '13vh',
      },
      bookImgOD: {
         width: '20%',
         height: '90%',
         marginTop: '5px',
         border: '0px solid orange',
      },
      priceOD: {
         width: '49%',
         height: '25%',
      },
      locationBtn: {
         width: '50%',
         fontSize: '12px !important',
      },
   },

   ['@media only screen and (min-width: 721px) and (max-width: 1024px)']: {
      headerMC: {
         width: '80vw',
         left: '103px',
      },
      mainMC: {
         width: '80vw',
         left: '103px',
      },
      contentTwoMC: {
         width: '50%',
         height: '19vh',
      },
      placeBtn: {
         width: '30%',
      },
      mainOD: {
         width: '80vw',
      },
      bookOD: {
         width: '55%',
         height: '13vh',
      },
      bookImgOD: {
         width: '20%',
         height: '90%',
         marginTop: '5px',
         border: '0px solid orange',
      },
      priceOD: {
         width: '49%',
         height: '25%',
      },
      locationBtn: {
         width: '40%',
      },
   }
})

function MyCart(props) {
   const [cartList, setCartList] = useState([])
   const [button, setButton] = useState(false)
   const [toggle, setToggle] = useState(false)
   const [order, setOrder] = useState(false)
   const [count, setCount] = useState(1)
   const [quantity, setQuantity] = useState([])
   const [orderList, setOrderList] = useState([])
   const [refresh, setRefresh] = useReducer(x => x + 1, 0)
   // const [inputFields, setInputFields] = ({product_id: '', product_name: '', product_quantity: '', product_price: ''})
   const navigate = useNavigate()

   const openDashBoard = () => {
      navigate('/dashboard')
   }

   const openDetails = () => {
      setToggle(true)
      setButton(true)
   }

   const openOrderDetails = () => {
      setOrder(true)
   }

   const getList = () => {
      console.log('cart list books')

      getCartItems().then((response) => {
         console.log(response, "from mycart page")
         setCartList(response.data.result)
         setQuantity(response.data.result)
         setOrderList(response.data.result)
      }).catch((error) => console.log(error))
   }

   const decrementValue = (id, quan) => {
      if (count > 1) {
         setCount(count => count - 1)
         let inputObj = {
            cartItem_id: id,
            quantityToBuy: quan - 1
         }
         console.log(inputObj, 'value of quantity')
         cartItemQuantity(inputObj).then((response) => {
            console.log(response, 'decrement value');
            setRefresh()
         }).catch((error) => console.log(error))
      } else {
         setCount(1)
      }
      console.log(quantity, 'quantity value of product dec....')
   }

   const incrementValue = (id, quan) => {
      console.log(id, 'from mycart inc...')
      setCount(count => count + 1)
      let inputObj = {
         cartItem_id: id,
         quantityToBuy: quan + 1
      }
      console.log(inputObj, 'value of quantity')
      cartItemQuantity(inputObj).then((response) => {
         console.log(response, 'increment value');
         setRefresh()
      }).catch((error) => console.log(error))
   }

   const removeItem = (id) => {
      console.log(id)
      let obj = { cartItem_id: id }
      removeFromCart(obj).then((response) => {
         console.log(response)
         // setRefresh()
      }).catch((error) => console.log(error))
   }

   const placedSuccess = () => {
      console.log(cartList, 'list of ordered books')
      let orderList = [];

      for (let i = 0; i < cartList.length; i++) {
         let inObj = {
            product_id: cartList[i].product_id._id,
            product_name: cartList[i].product_id.bookName,
            product_quantity: cartList[i].quantityToBuy,
            product_price: cartList[i].product_id.discountPrice
         }
         orderList.push(inObj);
      }
      console.log(orderList, 'printing ordered data...')
      let orderObj = { orders: orderList }
      addOrder(orderObj).then((response) => {
         console.log(response)
      })
         .catch((error) => { console.log(error) })

      navigate('/ordersuccess')
   }

   useEffect(() => {
      getList()
   }, [refresh])

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
                        variant="outlined" className={classes.locationBtn} >Use current location</Button>
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
                                          onClick={() => decrementValue(list._id, list.quantityToBuy)} ><RemoveIcon fontSize='small' sx={{ color: '#DBDBDB' }} /></IconButton>
                                    </Box>
                                    <Box sx={{ width: '41px', height: '24px', border: '1px solid #DBDBDB' }}>
                                       <span style={{ fontSize: '14px' }} >{list.quantityToBuy}</span>
                                    </Box>
                                    <Box className={classes.circleMC}>
                                       <IconButton size='small' sx={{ border: '1px solid #DBDBDB' }}
                                          onClick={() => incrementValue(list._id, list.quantityToBuy)}><AddIcon fontSize='small' sx={{ color: '#333232' }} /></IconButton>
                                    </Box>
                                 </Box>
                                 <Box sx={{ width: '30%' }}>
                                    <span style={{ fontSize: '14px', color: '#0A0102', fontWeight: '500' }} onClick={() => removeItem(list._id)}>Remove</span>
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
                           <Button className={classes.placeBtn} sx={{ backgroundColor: '#3371B5' }} variant="contained" onClick={openDetails}>Place Order</Button>
                     }
                  </Box>
               </Box>
            </Card>
            <Box sx={{ height: '2vh' }}></Box>
            {toggle ? <CustomerDetails openOrderDetails={openOrderDetails} /> :
               <Card className={classes.addressOrderMC} variant="outlined">
                  <span className={classes.textMC}>Address Details</span>
               </Card>}
            <Box sx={{ height: '2vh' }}></Box>
            {
               order ?
                  // <Box>{ orderList.map((item) => (<OrderSummary item = {item}/>)) }</Box>
                  <Card className={classes.mainOD} variant='outlined'>
                     <Box className={classes.contentOD}>
                        <Box className={classes.headOD}>
                           <span>Order summery</span>
                        </Box>
                        {orderList.map((item) => (
                           <Box className={classes.bookOD}>
                              <Box className={classes.bookImgOD}>
                                 <img width='100%' height='100%' src='images/bookimg.png' />
                              </Box>
                              <Box className={classes.dataOD}>
                                 <Box sx={{ height: '30%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>{item.product_id.bookName}</Box>
                                 <Box sx={{ height: '24%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>{item.product_id.author}</Box>
                                 <Box className={classes.priceOD}>
                                    <Box className={classes.discountOD}>Rs. {item.product_id.discountPrice}</Box><Box className={classes.costOD}>Rs. {item.product_id.price}</Box></Box>
                                 <Box sx={{ height: '15%' }}></Box>
                              </Box>
                           </Box>))
                        }
                        <Box className={classes.btnOD}>
                           <Button variant='contained' className={classes.checkBtnOD} onClick={placedSuccess}>Checkout</Button>
                        </Box>
                     </Box>

                  </Card>
                  :
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