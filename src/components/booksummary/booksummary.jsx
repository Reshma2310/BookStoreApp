import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useReducer, useState } from 'react'
import Header from '../header/header'
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import InputBase from '@mui/material/InputBase';
import { addToCart, addToWishList, getCartItems, getBooksList, cartItemQuantity, wishBookList } from '../../services/dataService';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect } from 'react';


const useStyle = makeStyles({
    headerBS: {
        width: '79vw',
        height: '10vh',
        border: '0px solid blue',
        display: 'flex',
        position: 'relative',
        backgroundColor: 'white',
        bottom: '80px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontWeight: '500'
    },
    homeBS: {
        color: '#9D9D9D',
        fontSize: '12px',
    },
    bookBS: {
        color: '#0A0102',
        fontSize: '12px',
    },
    mainBS: {
        width: '77vw',
        height: '120vh',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'relative',
        bottom: '80px',
    },
    bookImgBS: {
        width: '4%',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid blue',
    },
    bookOneBS: {
        width: '100%',
        height: '50%',
        border: '1px solid #7C1E1E',
        backgroundColor: '#FFE7E9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookTwoBS: {
        width: '100%',
        height: '50%',
        border: '1px solid #D1D1D1',
        borderRadius: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookDesBS: {
        width: '95.8%',
        height: '100%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    bookImageBS: {
        width: '35%',
        height: '57%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookCoverBS: {
        width: '100%',
        height: '90%',
        border: '1px solid #D1D1D1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookBtnBS: {
        width: '100%',
        height: '10%',
        display: 'flex',
        alignItems: 'flex-end',
    },
    bookDetailsBS: {
        width: '65%',
        height: '100%',
        border: '0px solid yellow',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    buttonsBS: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addBtnBS: {
        width: '45%',
        backgroundColor: '#A03037 !important',
    },
    listBtnBS: {
        width: '45%',
        backgroundColor: '#333333 !important',
    },
    detailsBS: {
        width: '93%',
        height: '100%',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    bookTitleBS: {
        fontSize: '28px',
        fontWeight: '500',

    },
    bookAuthorBS: {
        fontSize: '18px',
        color: '#878787',
    },
    pointsBS: {
        width: '12%',
        height: '4%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingBS: {
        width: '60%',
        height: '60%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },
    markBS: {
        width: '30%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '15px',
    },
    priceBS: {
        width: '26%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountBS: {
        fontWeight: '500',
        fontSize: '30px',
    },
    costBS: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '15px',
    },
    paraBS: {
        width: '100%',
        height: '23%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    paraTextBS: {
        width: '100%',
        height: '55%',
        border: '0px solid blue',
        overflow: 'hidden',
        textAlign: 'justify',

    },
    feedbackBS: {
        height: '5%',
        border: '0px solid blue',
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        color: '#0A0102',
    },
    fbStarBS: {
        width: '100%',
        height: '24%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fbBoxBS: {
        width: '95%',
        height: '86%',
        border: '0px solid pink',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    fbStartBS: {
        width: '10%',
        height: '22%',
    },
    inputBS: {
        width: '100%',
        height: '37%',
        backgroundColor: 'white',
        textAlign: 'left',
    },
    btnBS: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    fbOneBS: {
        width: '100%',
        height: '14%',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    fbContentBS: {
        width: '27px',
        height: '27px',
        backgroundColor: '#F5F5F5',
        border: '1px solid #E4E4E4',
        color: '#707070',
        borderRadius: '50%',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // circleBS: {
    //     width: '24px',
    //     height: '24px',
    //     background: '#FAFAFA',
    //     border: '1px solid #DBDBDB',
    //     borderRadius: '50%',
    // }
})

function BookSummary(props) {
    const [cartId, setCartId] = useState([])
    const [count, setCount] = useState(1)
    const [cartBtn, setCartBtn] = useState(false)
    const [wishBtn, setWishBtn] = useState(false)
    const [cartBookId, setCartBookId] = useState([])
    const [wishId, setWishId] = useState([])
    const [refresh, setRefresh] = useReducer(x => x + 1, 0)

    const classes = useStyle()
    // const [refresh, forceUpdate] = useReducer(x => x + 1, 0);

    const openBook = () => {
        props.openBookPage()
        setCartBtn(true)
    }
    const increment = () => {
        setCount(count + 1);
        let inputObj = { cartItem_id: props.id, quantityToBuy: count + 1 }
        console.log(inputObj, 'value of quantity')
        cartItemQuantity(inputObj).then((response) => {     
            console.log(response, 'increment value')
        }).catch((error) => console.log(error))
    }

    const decrement = () => {
        if (count < 2) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
        let inputObj = {cartItem_id: props.id, quantityToBuy: count - 1 }
        console.log(inputObj, 'value of quantity')
        cartItemQuantity(inputObj).then((response) => {
            console.log(response, 'decrement value')
        }).catch((error) => console.log(error))
    }

    const addingToCart = () => {
        setCartBtn(true)
        console.log(props.id)
        let cartObj={product_id: props.id}
        addToCart(cartObj).then((response) => {
            console.log(response, 'add from booksummary')            
            setRefresh()
        }).catch((error) => { console.log(error) })
    }

    const addingToWishList = () => {
        let wishObj={product_id: props.id}
        addToWishList(wishObj).then((response) => {
            console.log(response, 'wishlist from booksummary')
            setRefresh()                 
        }).catch((error) => { console.log(error) })
        setWishBtn(true)        
        console.log('Added to Wishlist')
    }

    useEffect(() => {
        getCartItems().then((response)=> {
            console.log(response)
            let idListArray = response.data.result.filter((cart) => {
                if(props.id === cart.product_id._id){
                    setCount(cart.quantityToBuy)
                    setCartId(cart._id)
                    console.log(cart._id,cart.quantityToBuy, 'added cart item.. quantity.....')
                   return cart
                }           
             })  
             setCartBookId(idListArray)
        }).catch((error)=> console.log(error))
    
        wishBookList().then((response)=> {
            console.log(response)
            let idWishList = response.data.result.filter((wish) => {
                if(props.id === wish.product_id._id){
                    // setCount(cart.quantityToBuy)
                    setCartId(wish._id)
                    console.log(wish._id, 'added Wishlist......')
                   return wish
                }           
             })  
             setWishId(idWishList)
        }).catch((error)=> console.log(error)) 
     }, [refresh])

    return (
        <Box>
            <Box className={classes.headerBS}>
                <span className={classes.homeBS} onClick={openBook}>Home /</span>&nbsp;<span className={classes.bookBS}> Book({props.index + 1})</span>
            </Box>
            <Box className={classes.mainBS}>
                <Box className={classes.bookImgBS}>
                    <Box className={classes.bookOneBS}><img src='images/bookimg.png' width='85%' /></Box>
                    <Box className={classes.bookTwoBS}><img src='images/book2.png' width='97%' height='90%' /></Box>
                </Box>
                <Box sx={{ width: '0.2%' }}></Box>
                <Box className={classes.bookDesBS}>
                    <Box className={classes.bookImageBS}>
                        <Box className={classes.bookCoverBS}><img src='images/bookimg.png' width='80%' /></Box>
                        <Box className={classes.bookBtnBS}>
                            <Box className={classes.buttonsBS}>
                                {
                                    (cartId.length === 0) ? <Button variant="contained" className={classes.addBtnBS} onClick={addingToCart}>Add to Bag</Button> :
                                        <Box sx={{ display: 'flex', alignItems: 'center', width: '45%', justifyContent: 'space-between', border: '0px solid orange' }}>
                                            <Box >
                                                <IconButton onClick={decrement} size='medium' sx={{ border: '1px solid #DBDBDB' }}>
                                                    <RemoveIcon fontSize='small' sx={{ color: '#DBDBDB' }} /></IconButton>
                                            </Box>
                                            <Box sx={{ width: '40%', height: '95%', border: '1px solid #DBDBDB' }} >
                                                <span style={{ fontSize: '22px' }} >{count}</span>
                                            </Box>
                                            <Box>
                                                <IconButton onClick={increment} size='medium' sx={{ border: '1px solid #DBDBDB' }}>
                                                    <AddIcon fontSize='small' sx={{ color: '#333232' }} /></IconButton>
                                            </Box>
                                        </Box>
                                }
                                {
                                    (wishId.length != 0) ?
                                        <Button variant="contained" className={classes.listBtnBS} startIcon={<FavoriteIcon sx={{ color: 'red' }} />}>Added</Button>
                                        :
                                        <Button variant="contained" className={classes.listBtnBS} startIcon={<FavoriteIcon />} onClick={addingToWishList}>Wishlist</Button>
                                }
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.bookDetailsBS}>
                        <Box className={classes.detailsBS}>
                            <Box className={classes.bookTitleBS}>
                                {props.bookName}
                                {/* Don't Make Me Think */}
                            </Box>
                            <Box sx={{ height: '1%' }}></Box>
                            <Box className={classes.bookAuthorBS}>{props.author}</Box>
                            <Box sx={{ height: '0.6%' }}></Box>
                            <Box className={classes.pointsBS}>
                                <Box className={classes.ratingBS}>
                                    <Box sx={{ fontSize: '12px' }}>4.5</Box>
                                    <StarIcon fontSize="10px" sx={{ color: 'white' }} />
                                </Box>
                                <Box className={classes.markBS}>({props.quantity})</Box>
                            </Box>
                            <Box className={classes.priceBS}>
                                <Box className={classes.discountBS}>Rs. {props.discountPrice}</Box><Box className={classes.costBS}>Rs. {props.price}</Box>
                            </Box>
                            <Box sx={{ height: '1.5%' }}></Box>
                            <Box sx={{ width: '100%' }}><Divider sx={{ borderBottomWidth: 3, width: '100%' }} /></Box>
                            <Box className={classes.paraBS}>
                                <Box className={classes.paraTextBS}>
                                    <span style={{ color: '#878787', display: 'flex', alignItems: 'center' }}> <Box style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#878787' }}>
                                    </Box>&nbsp;Book Detail</span>
                                    <Box sx={{ marginLeft: '9px' }}>
                                        {props.description}
                                        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estundefined */}
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%' }}><Divider sx={{ borderBottomWidth: 3, width: '100%' }} /></Box>
                            <Box className={classes.feedbackBS}>
                                <span style={{ fontWeight: '500' }}>Customer Feedback</span>
                            </Box>
                            <Box className={classes.fbStarBS}>
                                <Box className={classes.fbBoxBS}>
                                    <Box sx={{ fontSize: '14px', height: '18%' }}>Overall rating</Box>
                                    <Box className={classes.fbStartBS}>
                                        <Rating defaultValue={0} size="medium" style={{ color: 'black !important' }} readOnly />
                                    </Box>
                                    <Box className={classes.inputBS}><InputBase sx={{ marginLeft: '8px' }} placeholder='write your review' />
                                    </Box>
                                    <Box sx={{ height: '8%' }}></Box>
                                    <Box className={classes.btnBS}><Button variant="contained" sx={{ width: '15%', height: '85%', textTransform: 'capitalize' }}>Submit</Button></Box>
                                </Box>
                            </Box>
                            <Box sx={{ height: '1.5%' }}></Box>
                            <Box className={classes.fbOneBS}>
                                <Box sx={{ display: 'flex' }}>
                                    <Box className={classes.fbContentBS}>AC</Box>
                                    <Box sx={{ marginLeft: '8px', fontSize: '15px', fontWeight: '500' }}>Aniket Chile</Box>
                                </Box>
                                <Box sx={{ height: '27%' }}>
                                    <Rating defaultValue={3} size="medium" style={{ color: 'black !important', marginLeft: '35px' }} readOnly />
                                </Box>
                                <Box sx={{ height: '50%', marginLeft: '35px', fontSize: '14px', textAlign: 'justify', color: '#707070' }}>
                                    <span>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                                        Chanakya has written on many different topics and his writings are succinct.</span>
                                </Box>
                            </Box>
                            <Box className={classes.fbOneBS}>
                                <Box sx={{ display: 'flex' }}>
                                    <Box className={classes.fbContentBS}>SB</Box>
                                    <Box sx={{ marginLeft: '8px', fontSize: '15px', fontWeight: '500' }}>Shweta Bodkar</Box>
                                </Box>
                                <Box sx={{ height: '27%' }}>
                                    <Rating defaultValue={4} size="medium" style={{ color: 'black !important', marginLeft: '35px' }} readOnly />
                                </Box>
                                <Box sx={{ height: '50%', marginLeft: '35px', fontSize: '14px', textAlign: 'justify', color: '#707070' }}>
                                    <span>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                                        Chanakya has written on many different topics and his writings are succinct.</span>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BookSummary