import axios from "axios";

const headerConfig = {
    headers: {'x-access-token': localStorage.getItem('token')}
}

export const getBooksList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
    headerConfig)
     return response
}

export const addToCart = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id.product_id}`, id,
    headerConfig)
    //  console.log(response, 'added to cart')
     return response
}

export const addToWishList = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id.product_id}`, id,
    headerConfig)
     return response
}

export const cartItemQuantity = (inputObj) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${inputObj.cartItem_id}`, inputObj,
     headerConfig)
      return response
}

export const getCartItems = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)
    return response
}

export const removeFromCart = (obj) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${obj.cartItem_id}`,
    headerConfig)
    return response
}

export const editUser = (inputObj) => {
    let response = axios.put('https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user', inputObj,
     headerConfig)
      return response
}

export const wishBookList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items', headerConfig)
    return response
}

export const addOrder = (inputObj) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order', inputObj,
    headerConfig)
     return response
}