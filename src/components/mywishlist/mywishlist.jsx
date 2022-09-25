import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../header/header";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { getWishList, removeFromWishList } from '../../services/dataService';
import { useState } from 'react';


const useStyle = makeStyles({
    headerMWL: {
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
    homeMWL: {
        color: '#9D9D9D',
        fontSize: '12px',
    },
    wishMWL: {
        color: '#0A0102',
        fontSize: '12px',
    },
    mainMWL: {
        width: '77vw',
        height: 'auto',
        border: '1px solid #E4E4E4',
        position: 'relative',
        left: '153px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    titleMWL: {
        width: '100%',
        height: '8vh',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleHeadMWL: {
        width: '94%',
        fontSize: '18px',
        color: '#0A0102',
        textAlign: 'left',
        fontWeight: '500',
    },
    bookDetailMWL: {
        width: '100%',
        height: '25vh',
        borderBottom: '1px solid #E4E4E4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookContentMWL: {
        width: '92%',
        height: '50%',
        border: '0px solid pink',
        display: 'flex',
        justifyContent: 'space-between',
    },
    imgDetailMWL: {
        width: '35%',
        height: '100%',
        border: '0px solid orange',
        display: 'flex',
        justifyContent: 'space-between',
    },
    imgBookMWL: {
        width: '18%',
        height: '100%',
        border: '0px solid pink'
    },
    bookNameMWL: {
        width: '72%',
        height: '100%',
        border: '0px solid pink',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        fontWeight: '500',
    },
    bookTitleMWL: {
        height: '32%',
        fontSize: '18px',
        color: '#0A0102',
    },
    bookAuthorMWL: {
        height: '28%',
        fontSize: '12px',
        color: '#9D9D9D'
    },
    bookPriceMWL: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountMWL: {
        fontSize: '15px',
    },
    priceMWL: {
        fontSize: '12px',
        color: '#9D9D9D',
        textDecorationLine: 'line-through',
    },
    footerMWL: {
        width: '98.9vw',
        height: '15vh',
        border: '0px solid black',
        display: 'flex',
        alignItems: 'flex-end'
    },
    footerTextMWL: {
        width: '100%',
        height: '60%',
        backgroundColor: '#2E1D1E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCopyMWL: {
        width: '80%',
        color: 'white',
        textAlign: 'start',
        font: 'normal normal medium 12px/15px Lato',
        border: '0px solid pink',
        fontSize: '12px',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        headerMWL: {
            left: '35px',
        },
        mainMWL: {
            left: '35px',
        },
        bookDetailMWL: {
            height: '21vh',
        },
        bookContentMWL: {
            width: '85%',
            height: '70%',
            flexDirection: 'column',
            alignItems: 'flex-end',
        },
        imgDetailMWL: {
            width: '100%',
            height: '70%',
            border: '0px solid orange',
        },
        deleteMWL: {
            height: '15%',
            border: '0px solid orange',
        },
        imgBookMWL: {
            width: '20%',
            height: '100%',
            border: '0px solid pink'
        },
        bookNameMWL: {
            width: '70%',
            height: '100%',
        },
        bookTitleMWL: {
            height: '32%',
            fontSize: '16px',
        },
        bookAuthorMWL: {
            height: '28%',
            fontSize: '12px',
        },
        bookPriceMWL: {
            width: '65%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        discountMWL: {
            fontSize: '15px',
        },
        priceMWL: {
            fontSize: '12px',
            color: '#9D9D9D',
            textDecorationLine: 'line-through',
        },
    },
    ['@media only screen and (min-width: 481px) and (max-width: 720px)']: {
        headerMWL: {
            left: '60px',
        },
        mainMWL: {
            left: '60px',
        },
        bookDetailMWL: {
            height: '21vh',
        },
        bookContentMWL: {
            width: '85%',
            height: '65%',
        },
        imgDetailMWL: {
            width: '80%',
            height: '100%',
            border: '0px solid orange',
        },
        deleteMWL: {
            border: '0px solid orange',
        },
        imgBookMWL: {
            width: '22%',
            height: '100%',
            border: '0px solid pink'
        },
        bookNameMWL: {
            width: '70%',
            height: '100%',
        },
        bookTitleMWL: {
            height: '32%',
            fontSize: '16px',
        },
        bookAuthorMWL: {
            height: '28%',
            fontSize: '12px',
        },
        bookPriceMWL: {
            width: '55%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        discountMWL: {
            fontSize: '15px',
        },
        priceMWL: {
            fontSize: '12px',
            color: '#9D9D9D',
            textDecorationLine: 'line-through',
        },
    },
    ['@media only screen and (min-width: 721px) and (max-width: 1024px)']: {
        headerMWL: {
            left: '90px',
        },
        mainMWL: {
            left: '90px',
        },
        bookDetailMWL: {
            height: '21vh',
        },
        bookContentMWL: {
            width: '85%',
            height: '65%',
        },
        imgDetailMWL: {
            width: '60%',
            height: '100%',
            border: '0px solid orange',
        },
        deleteMWL: {
            border: '0px solid orange',
        },
        imgBookMWL: {
            width: '21%',
            height: '100%',
            border: '0px solid pink'
        },
        bookNameMWL: {
            width: '70%',
            height: '100%',
        },
        bookTitleMWL: {
            height: '32%',
            fontSize: '18px',
        },
        bookAuthorMWL: {
            height: '28%',
            fontSize: '12px',
        },
        bookPriceMWL: {
            width: '48%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        discountMWL: {
            fontSize: '15px',
        },
        priceMWL: {
            fontSize: '12px',
            color: '#9D9D9D',
            textDecorationLine: 'line-through',
        },
    }
})
function MyWishList() {
    const classes = useStyle()
    const [wishList, setWishList] = useState([])
    const [refresh, setRefresh] = useReducer(x => x + 1, 0)

    const navigate = useNavigate()

    const openDashBoard = () => {
        navigate('/dashboard')
    }

    const deleteItem = (id) => {
        console.log(id)
        let obj = { cartItem_id: id }
        removeFromWishList(obj).then((response) => {
            console.log(response)
            setRefresh()
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getWishList().then((response) => {
            console.log(response)
            setWishList(response.data.result)
        }).catch((error) => { console.log(error) })
    }, [refresh])
    return (
        <Box>
            <Header />
            <Box className={classes.headerMWL}>
                <span className={classes.homeMWL} onClick={openDashBoard}>Home /</span>&nbsp;<span className={classes.wishMWL}> My Wishlist</span>
            </Box>
            <Box className={classes.mainMWL}>
                <Box className={classes.titleMWL}>
                    <Box className={classes.titleHeadMWL}>
                        <span>My Wishlist (02)</span>
                    </Box>
                </Box>
                {
                    wishList.map((list) => (
                        <Box className={classes.bookDetailMWL}>
                            <Box className={classes.bookContentMWL}>
                                <Box className={classes.imgDetailMWL}>
                                    <Box className={classes.imgBookMWL}>
                                        <img src='images/bookimg.png' width='100%' />
                                    </Box>
                                    <Box className={classes.bookNameMWL}>
                                        <Box className={classes.bookTitleMWL}>
                                            <span>{list.product_id.bookName}</span>
                                        </Box>
                                        <Box className={classes.bookAuthorMWL}><span>{list.product_id.author}</span></Box>
                                        <Box className={classes.bookPriceMWL}>
                                            <Box className={classes.discountMWL}>Rs. {list.product_id.discountPrice}</Box>
                                            <Box className={classes.priceMWL}>Rs. {list.product_id.price}</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.deleteMWL} onClick={() => deleteItem(list.product_id._id)}>
                                    <DeleteIcon sx={{ color: '#9D9D9D' }} fontSize='small' />
                                </Box>
                            </Box>
                        </Box>
                    ))}
            </Box>
            <Box sx={{ height: '12vh' }}></Box>
            <Box className={classes.footerMWL}>
                <Box className={classes.footerTextMWL}>
                    <Box className={classes.textCopyMWL}>
                        <span>Copyright  2020. Bookstore Private Limited. All Rights Reserved</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MyWishList