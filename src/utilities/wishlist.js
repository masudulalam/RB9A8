import toast from "react-hot-toast";

const addWishList = (gadget) => {
    const wishList = getAllWishList();
    const isExist = wishList.find(item => item.product_id === gadget.product_id);
    if(isExist){return toast.error('This product already exist!')};
   
    wishList.push(gadget);
    localStorage.setItem('wishList', JSON.stringify(wishList));
    toast.success('Successfully added wishlist!');
}

const getAllWishList = () => {
    const allWishList = localStorage.getItem('wishList');
    
    if(allWishList) {
        const wishList = JSON.parse(allWishList);
        console.log(wishList);
        return wishList;
    } else{
        console.log([]);
        return [];
    }
}


export { addWishList, getAllWishList };