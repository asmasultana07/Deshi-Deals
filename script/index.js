console.log(document);

// button work
function getElement(id) {
    const element= document.getElementById(id);
    return element;
}

//delegation technique

getElement("product-box").addEventListener('click', function(e){
    if(e.target.className.includes("cart-btn")){
        //alert('card is clicked');
        const cartBtn = e.target;

        const productImg = cartBtn.parentNode.parentNode.children[0].children[0].src;
        const productTitle = cartBtn.parentNode.parentNode.children[1].children[0].innerText;
        const productPrice = cartBtn.parentNode.parentNode.children[1].children[2].children[0].innerText;

       //console.log(productTitle, productPrice);
       const totalPrice = getElement("total-price").innerText;
       const currentTotal = Number(productPrice) + Number(totalPrice);
       getElement("total-price").innerText = currentTotal;

       //card details add
       const cartContainer = getElement("cart-container");

       const newCart = document.createElement("div");
       newCart.innerHTML = `
            <div class="bg-gray-200 rounded-xl p-4 flex justify-between">
                  <img src="${productImg}" alt="" class="w-10">
                  <div class="">
                    <h2 class="font-bold">${productTitle}</h2>
                    <h2 class="">${productPrice} TK</h2>
                  </div>
                </div>
        `;

        cartContainer.append(newCart);

        // for quantity count
        const quantity = getElement("total-quantity").innerText;
        console.log(quantity);

        const currentQuantity = Number(quantity) + 1;
        getElement("total-quantity").innerText = currentQuantity;

    }
})

// clear button work
document.getElementById("btn-clear").addEventListener('click', function(){
    const cartContainer= getElement("cart-container");
    cartContainer.innerHTML="";
    getElement("total-price").innerText = 0;
    getElement("total-quantity").innerText = 0;
})



// ->traverse technique
// const cartbtns = document.getElementsByClassName('cart-btn');
// console.log(cartbtns);

// for(let cartButton of cartbtns)
// {
//     cartButton.addEventListener('click', function(){
//         //const productImg = cartButton.parentNode.parentNode.childNodes[1].childNodes[1].src;
//         const productImg = cartButton.parentNode.parentNode.children[0].children[0].src;
//         const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText;
//         const productPrice = cartButton.parentNode.parentNode.children[1].children[2].children[0].innerText;

//        //console.log(productTitle, productPrice);
//        const totalPrice = getElement("total-price").innerText;
//        const currentTotal = Number(productPrice) + Number(totalPrice);
//        getElement("total-price").innerText = currentTotal;

//        //card details add
//        const cartContainer = getElement("cart-container");

//        const newCart = document.createElement("div");
//        newCart.innerHTML = `
//             <div class="bg-gray-200 rounded-xl p-4 flex justify-between">
//                   <img src="${productImg}" alt="" class="w-10">
//                   <div class="">
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <h2 class="">${productPrice} TK</h2>
//                   </div>
//                 </div>
//         `;

//         cartContainer.append(newCart);

//         // for quantity count
//         const quantity = getElement("total-quantity").innerText;
//         console.log(quantity);

//         const currentQuantity = Number(quantity) + 1;
//         getElement("total-quantity").innerText = currentQuantity;
//     });
    
// }


// traditional way-> try easy way 
// document.getElementById("cart-btn-1").addEventListener('click', function()
// {
//     const title = getElement("card-title-1").innerText;
//     const price = getElement("card-price-1").innerText;
//     console.log(title, price);
    
//     //total price ke dorbe
//     const totalPrice = getElement("total-price").innerText;
//     //total-quantity
//     //console.log(title, price);
    

//     //calculate or count
//     currentTotal = Number(price) + Number(totalPrice);

//     //price update
//     getElement("total-price").innerText = currentTotal.toFixed(2);

//     //cart-container dorbo
//     const cartContainer = getElement("cart-container");

//     //akta div banao
//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//             <div class="bg-gray-200 rounded-xl p-4 flex justify-between">
//                   <img src="./assets/kitchen-1.png" alt="" class="w-10">
//                   <div class="">
//                     <h2 class="font-bold">${title}</h2>
//                     <h2 class="">${price}</h2>
//                   </div>
//                 </div>
// `;
//  // cart-container e add korbo
//  cartContainer.append(newCart);
// });
