import React, { useState } from 'react'
import Header from "../../components/header/header";
import { Box } from "@mui/material";
import Book from '../../components/book/book';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getBooksList } from '../../services/dataService';
import { useEffect } from 'react';


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
        width: '10.5%',
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
    }
})

function DashBoard() {

    const [bookList, setBookList] = useState([])

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
                <Box className={classes.headerDB}>
                    <Box className={classes.headDB}>
                        <Box className={classes.nameDB}>Books</Box>
                        <Box className={classes.numberDB}>(128 items)</Box>
                    </Box>
                    <Box className={classes.btnDB}>
                        <Button variant="outlined" color='inherit' disableElevation // onClick={handleClick}
                           className={classes.dropDownDB} endIcon={<KeyboardArrowDownIcon />} size='small'
                        >
                            Sort by relevance
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    {
                        bookList.map((book) => (<Book key={book._id} book = {book} autoRefresh = {autoRefresh}/>))
                    }                
                </Box>
            </Box>
        </Box>
    )
}

export default DashBoard