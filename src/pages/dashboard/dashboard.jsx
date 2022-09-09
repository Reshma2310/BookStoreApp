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
        marginRight: '30px',
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
    }
})

function DashBoard(props) {

    const [inputFields, setInputFields] = useState({})
    const [bookList, setBookList] = useState([])
    const [display, setDisplay] = useState(false)

    const openSummary = (bookObj) => {
        console.log(bookObj, "this is for book details") 
        setInputFields(bookObj)       
        setDisplay(true);
         console.log(inputFields.bookName , 'this is book data')
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

    const classes = useStyle()
    return (
        <Box>
            <Header />
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
                       <BookSummary bookName={inputFields.bookName} author={inputFields.author} quantity={inputFields.quantity} 
                       discountPrice={inputFields.discountPrice} price={inputFields.price} index={bookList.indexOf(inputFields)}  openBookPage = {openBookPage}/>
                    :
                        bookList.map(
                            (book) => (<Box onClick={() => openSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh} 
                             /></Box>)
                        )
                    }
                </Box>
            </Box>
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