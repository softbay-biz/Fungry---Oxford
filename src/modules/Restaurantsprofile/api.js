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
export const addToCart =  async (productName,quantity,price,id) => {
  
    const  cart = await  fetchCart();
   
    

    const  newItem = {productName,quantity,price,id};


    cart.items = cart.items.filter((item )=>
     { 
         if(item.id === newItem.id){
             let tot = parseFloat(item.price) + parseFloat(newItem.price);
             newItem.price = tot.toString();
           let totq =  parseInt(item.quantity) + parseInt(newItem.quantity);
           newItem.quantity = totq.toString();
         }  

        return item.id !== newItem.id
    });

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
        return item.productName !== value
    });
   
   saveToLocalStorage(cart);


   return cart;
    
}
export const  replaceCartElement = async (productNam,price,quantity,id) => {

    let carts =  await fetchCart();
    carts.items.find(v => v.productName == productNam).quantity = quantity;


   
  

   saveToLocalStorage(carts);

   return  carts;


    
}