//addToCart.js
let cartContainer = document.getElementById('cartContainer');

let cartArray =
    JSON.parse(localStorage.getItem('addToCart')) || [];
  

// Display cart products

cartArray.forEach(productObj => {
       
    cartContainer.innerHTML += `

        <div class="card"
             data-id="${productObj.productId}"
             data-category="${productObj.productCategory}">

            <img src="${productObj.img}" alt="product image">

            <div>
                <p>${productObj.name}</p>
                <span>${productObj.rs}</span>
            </div>

            <div class="btn">

                <button class='buyNow'>Buy Now</button>

                <button class="removeBtn">
                    Remove
                </button>

            </div>

        </div>

    `;

});


// Remove button

let removeBtn = document.querySelectorAll('.removeBtn');


removeBtn.forEach(btn => {

    btn.addEventListener('click', eventObj => {

        let removeCard =
            eventObj.target.closest('.card');
         
        let id =
            removeCard.dataset.id;

        let category =
            removeCard.dataset.category;
            
         cartArray = cartArray.filter(product => {

            return !(
                product.productId == id &&
                 product.productCategory == category
             );

         });

             
        localStorage.setItem(
            'addToCart',
            JSON.stringify(cartArray)
        );
          
        console.log( "LocalStorage after update:",
            JSON.parse(localStorage.getItem('addToCart')));

        removeCard.remove();

    });

});

// Buy Now

let buyNowBtn = document.querySelectorAll('.buyNow');
 
buyNowBtn.forEach(btn =>{
    btn.addEventListener('click', eventObj=>{
        let card = eventObj.target.closest('.card');
        let id = card.dataset.id;
        let category = card.dataset.category;
    
       let summaryProduct = cartArray.find(product =>
          product.productId == id &&
          product.productCategory == category
        );
        // console.log(' summaryProduct issss' , summaryProduct)
        sessionStorage.setItem('summaryProduct', JSON.stringify(summaryProduct));

        window.location.href = "checkout.html";
    })
}
)