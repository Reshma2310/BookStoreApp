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
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`, id,
    headerConfig)
    //  console.log(response, 'added to cart')
     return response
}

export const addToWishList = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`, id,
    headerConfig)
     return response
}

export const itemsCount = (inputObj) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${inputObj.id}`, inputObj,
     headerConfig)
      return response
}

export const cartBookList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)
    return response
}

export const removeFromCart = (id) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`, id,
    headerConfig)
    return response
}