export const cart =[];

export function addToCart(productId){
    let matchingItem;
            cart.forEach((cartItem)=>{
                if(productId===cartItem.matchingItem){
                    matchingItem = item;
                }
            });

            if(matchingItem){
                matchingItem += 1;
            } else{
                cart.push({
                    productId: productId,
                    quantity: 1,
                });
            };
};