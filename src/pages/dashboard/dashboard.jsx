import React, { useState } from 'react'
import Header from "../../components/header/header";
import { Box } from "@mui/material";
import Book from '../../components/book/book';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getBooksList } from '../../services/dataService';
import { useEffect } from 'react';
import BookSummary from '../../components/booksummary/booksummary';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";


const useStyle = makeStyles({
    mainDB: {
        width: '80vw',
        height: 'auto',
        position: 'relative',
        top: '0px',
        left: '150px',
        border: '0px solid black',
    },
    headerDB: {
        width: '100%',
        height: '12vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headDB: {
        width: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '0px solid black',
    },
    nameDB: {
        fontWeight: '500',
        fontSize: '22px',
    },
    numberDB: {
        fontSize: '12px',
        color: '#878787',
    },
    btnDB: {
        marginRight: '40px',
    },
    dropDownDB: {
        textTransform: 'none !important',
    },
    footerDB: {
        width: '98.9vw',
        height: '15vh',
        border: '0px solid black',
        display: 'flex',
        alignItems: 'flex-end'
    },
    footerTextDB: {
        width: '100%',
        height: '60%',
        backgroundColor: '#2E1D1E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCopyDB: {
        width: '80%',
        color: 'white',
        textAlign: 'start',
        font: 'normal normal medium 12px/15px Lato',
        border: '0px solid pink',
        fontSize: '12px',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainDB: {
            // width: '80vw',
            left: '30px',
            border: '0px solid black',
        },
        headerDB: {
            border: '0px solid black',
            
            height: '15vh',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        },
        headDB: {
            width: '45%',
        },
        btnDB: {
            marginRight: '0px',
        },
    },
    ['@media only screen and (min-width: 481px) and (max-width: 600px)']: {
        mainDB: {
            // width: '60vw',
            border: '0px solid black',
            left: '80px',
        },
        headerDB: {
            border: '0px solid black',
            width: '80%',
            height: '15vh',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        },
        headDB: {
            width: '45%',
        },
        btnDB: {
            marginRight: '0px',
        },
    },
    ['@media only screen and (min-width: 601px) and (max-width: 720px)']: {
        mainDB: {
            // width: '60vw',
            border: '0px solid black',
            left: '50px',
        },
        headerDB: {
            border: '0px solid black',
            height: '15vh',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headDB: {
            width: '25%',
        },
        btnDB: {
            marginRight: '0px',
        },
    },
    ['@media only screen and (min-width: 721px) and (max-width: 800px)']: {
        mainDB: {
            // width: '90vw',
            border: '0px solid black',
            left: '70px',
        },
        headerDB: {
            border: '0px solid black',
            height: '12vh',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headDB: {
            width: '25%',
        },
        btnDB: {
            marginRight: '50px',
        },
    },
    ['@media only screen and (min-width: 801px) and (max-width: 850px)']: {
        mainDB: {
            width: '80vw',
            border: '0px solid black',
            left: '70px',
        },
        headerDB: {
            border: '0px solid black',
            height: '12vh',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headDB: {
            width: '20%',
        },
        btnDB: {
            marginRight: '40px',
        },
    },
    ['@media only screen and (min-width: 851px) and (max-width: 1024px)']: {
        mainDB: {
            width: '90vw',
            border: '0px solid black',
            left: '40px',
        },
        headerDB: {
            border: '0px solid black',
            height: '12vh',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headDB: {
            width: '16%',
        },
        btnDB: {
            marginRight: '40px',
        },
    }
})

function DashBoard(props) {

    const [inputFields, setInputFields] = useState({})
    const [bookList, setBookList] = useState([])
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [page, setPage] = useState(1)

    const [pageNum, setPageNum] = useState(false)
    const navigate = useNavigate()

    const openSummary = (bookObj) => {
        console.log(bookObj, "this is for book details")
        setInputFields(bookObj)
        setDisplay(true);
        setPageNum(true)
        console.log(inputFields.bookName, 'this is book data')
    };

    const openBookPage = () => {
        setDisplay(false)
    }

    const getBooks = () => {
        console.log('fetching books')
        getBooksList().then((response) => {
            console.log(response)
            setBookList(response.data.result)
        }).catch((error) => console.log(error))
    }

    const autoRefresh = () => {
        getBooks()
    }

    useEffect(() => {
        getBooks()
    }, [])

    const searchBook = (eve) => {
        setSearch(eve.target.value)
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = bookList.filter(book => book.bookName.toLowerCase().includes(search)).slice(firstPostIndex, lastPostIndex);

    const classes = useStyle()
    return (
        <Box>
            <Header setSearch={setSearch} searchBook={searchBook} />

            <Box className={classes.mainDB}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', border: '0px solid blue' }}>
                    <Box className={classes.headerDB}>
                        <Box className={classes.headDB}>
                            <Box className={classes.nameDB}>Books</Box>
                            <Box className={classes.numberDB}>(30 items)</Box>
                        </Box>
                        <Box className={classes.btnDB}>
                            <Button variant="outlined" color='inherit' disableElevation // onClick={handleClick}
                                className={classes.dropDownDB} endIcon={<KeyboardArrowDownIcon />} size='small'
                            >
                                Sort by relevance
                            </Button>
                        </Box>
                    </Box>
                    {display ?
                        <BookSummary id={inputFields._id} bookName={inputFields.bookName} author={inputFields.author} quantity={inputFields.quantity}
                            discountPrice={inputFields.discountPrice} price={inputFields.price} index={bookList.indexOf(inputFields)}
                            description={inputFields.description} openBookPage={openBookPage} />
                        :
                        // bookList.map(
                        //     (book) => (<Box onClick={() => openSummary(book)}><Book key={book._id} book={book}  autoRefresh={autoRefresh}
                        //     /></Box>)
                        // )
                        <Grid container spacing={1}>{
                            // page === 1 ?
                            //     bookList.filter(book => book.bookName.toLowerCase().includes(search)).slice(0, 8).map(
                            //         (book) => (<Grid item lg={3} md={4} xs={12} sm={6} onClick={() => openSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                            //         /></Grid>)
                            //     ) :
                            //     page === 2 ?
                            //         bookList.slice(8, 16).map(
                            //             (book) => (<Box onClick={() => openSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                            //             /></Box>)
                            //         ) :
                            //         page === 3 ?
                            //             bookList.slice(16, 24).map(
                            //                 (book) => (<Box onClick={() => openSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                            //                 /></Box>)
                            //             ) :
                            //             page === 4 ?
                            //                 bookList.slice(24, 30).map(
                            //                     (book) => (<Box onClick={() => openSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                            //                     /></Box>)
                            //                 ) :
                            //                 null

                            currentPosts.map((book)=>(<Box onClick={() => openSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}/></Box>))
                        }
                        </Grid>
                    }
                </Box>
            </Box>
            <Box sx={{ height: '2vh', border: '0px solid pink' }}></Box>
            {
                pageNum ? null :

                    <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: '18px', color: '#878787' }}>
                        {/* <Stack spacing={3}>
                            <Pagination count={4} onChange={(event, value) => setPage(value)}
                                //  totalPosts={bookList.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} 
                                shape="rounded" />
                        </Stack> */}
                        <Pagination count={8} sx={{color:'#A03037'}} onChange={(e,value)=>setCurrentPage(value)}/>
                    </Box>
            }
            <Box className={classes.footerDB}>
                <Box className={classes.footerTextDB}>
                    <Box className={classes.textCopyDB}>
                        <span>Copyright  2020. Bookstore Private Limited. All Rights Reserved</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DashBoard