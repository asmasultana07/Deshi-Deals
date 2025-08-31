console.log(document);

// button work
function getElement(id) {
    const element= document.getElementById(id);
    return element;
}
document.getElementById("cart-btn-1").addEventListener('click', function()
{
    const title = getElement("card-title-1").innerText;
    const price = getElement("card-price-1").innerText;
    console.log(title, price);
    
    //total price ke dorbe
    const totalPrice = getElement("total-price").innerText;
    //console.log(title, price);
//total-quantity

    //calculate or count
    currentTotal = Number(price) + Number(totalPrice);

    //price update
    getElement("total-price").innerText = currentTotal.toFixed(2);

    //cart-container dorbo
    const cartContainer = getElement("cart-container");

    //akta div banao
    const newCart = document.createElement("div");
    newCart.innerHTML = `
            <div class="bg-gray-200 rounded-xl p-4 flex justify-between">
                  <img src="./assets/kitchen-1.png" alt="" class="w-10">
                  <div class="">
                    <h2 class="font-bold">${title}</h2>
                    <h2 class="">${price}</h2>
                  </div>
                </div>
`;
 // cart-container e add korbo
 cartContainer.append(newCart);
});
