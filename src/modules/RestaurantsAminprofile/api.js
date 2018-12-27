 const  saveToLocalStorage = (cart) => {
    localStorage.setItem('cart',JSON.stringify(cart));
}


const  deleteLocalStorage = () => {
    localStorage.removeItem('cart');
    
}

 const  getFromLocalStorage= () => {
    const emptyCart= {items:[]};
     let cart = JSON.parse(localStorage.getItem('cart'));
    return cart || emptyCart;
}
 
export const fetchCart = async () => getFromLocalStorage();
export const deleteCart =  () =>  deleteLocalStorage();
export const addToCart =  async (productName,quantity,price) => {
  
    const  cart = await  fetchCart();
   
    

    const  newItem = {productName,quantity,price};
    const newCart  ={
        ...cart,
        items:[
            ...cart.items,
            newItem
        ],
    };

   saveToLocalStorage(newCart);
   
   return newCart;

}

export const  deleteCartElement = async (productName) => {

    var cart =  await fetchCart();
    var value = productName;
   

    cart.items = cart.items.filter((item )=>
     { 
        return item.price !== value
    });
   
   saveToLocalStorage(cart);


   return cart;
    
}