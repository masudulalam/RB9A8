// add a gadget to local storage
const addToCart = (gadget) => {
    const cart = getAllCart();
    const isExist = cart.find(item => item.product_id === gadget.product_id)
    if(isExist) return alert('Already Exist!');

    cart.push(gadget);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// get all gadget from local storage
const getAllCart = () => {
    const allCart = localStorage.getItem('cart');
    
    if(allCart){
        const cart = JSON.parse(allCart);
        console.log(cart);
        return cart; 
    } else{
        console.log([]);
        return [];
    }
}


// remove a gadget from local storage




export {addToCart, getAllCart};