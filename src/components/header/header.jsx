import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

import MyCart from '../mycart/mycart';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FCFCFC',
    //   '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    //   },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'action',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '37vw',
        },
    },
    ['@media only screen and (min-width: 900px) and (max-width: 1024px)']: {
        width: '30vw',
    }
}));

export default function Header({search, searchBook}) {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    // const [search, setSearch] = React.useState("")

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const openCart = () => {
        navigate('/mycart')
    }

    const openWishList =() => {
        navigate('/mywishlist')
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <PermIdentityOutlinedIcon />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={openWishList}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <FavoriteIcon />
                </IconButton>
                <p>WishList</p>
            </MenuItem>
            <MenuItem onClick={openCart}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <ShoppingCartOutlinedIcon />
                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    // const onChange = (event) => {
    //     setSearch(event.target.value)        
    // }
    // console.log(setSearch, 'searched items ....')

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
                <Toolbar>
                    <Box sx={{ width: '8%' }} />
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" >
                        <img src='images/education.svg' />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }} >
                        Bookstore
                    </Typography>
                    <Box sx={{ width: '2%' }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color='action'/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} type="text" value={search} onChange={searchBook}/>
                    </Search>
                    <Box sx={{ width: '8%', border: '0px solid pink' }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, border: '0px solid blue' }}>
                        <IconButton size="medium" color="inherit" sx={{ flexDirection: 'column', width: '6vw', borderLeft: '1px solid #89292f', borderRadius: '0%' }}>
                            <div><PermIdentityOutlinedIcon /></div><Box sx={{ fontSize: '12px' }}>Profile</Box>
                        </IconButton>
                        <IconButton onClick={openWishList} size="medium" color="inherit" sx={{ flexDirection: 'column', width: '6vw', 
                            borderLeft: '1px solid #89292f', borderRadius: '0%' }} >
                            <div><FavoriteIcon fontSize='medium'/></div><Box sx={{ fontSize: '10px' }}>WishList</Box>
                        </IconButton>
                        <IconButton onClick={openCart} size="medium" color="inherit" sx={{ flexDirection: 'column', width: '6vw', 
                            borderLeft: '1px solid #89292f', borderRight: '1px solid #89292f', borderRadius: '0%' }} >
                            <div><ShoppingCartOutlinedIcon /></div><Box sx={{ fontSize: '10px' }}>Cart</Box>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true"
                            onClick={handleMobileMenuOpen} color="inherit" >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ width: '5%' }} />
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
