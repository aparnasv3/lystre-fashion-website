import { addToCart } from "./addToCartFunction.js";

 //shirts starts
 let shirtContainer = document.getElementById('shirtContainer');
 fetch('data.json')
 .then( response => response.json())
 .then( data => {
    data.shirt.map(obj => {
        shirtContainer.innerHTML+= `
        <div class="productCard"  data-id="${obj.id}"  data-category="${obj.category}">
        <div id="imgContainer">
          <img src="${obj.img}" alt="img not found">
          <i class="fa-regular fa-heart heartIcon"></i>
        </div>
        <div id="textContainer">
        <div>
         <p>${obj.name}</p>
         <span>${obj.rs}</span>
         <div class="rating">
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-regular fa-star"></i>
         </div>
        </div>
        <div class="addToCart">
         <iconify-icon icon="iconoir:add-to-cart"></iconify-icon>
        </div>
       </div>
       <div>
         <button class="buyNow">Buy Now</button>
        </div>
        `
    });
  
    addToCart(shirtContainer)

}).catch(e => console.log("error" ,e))

// t-shirts starts
 let tShirtContainer = document.getElementById('tShirtContainer');
 fetch('data.json')
 .then( response => response.json())
 .then( data => {
    data.tShirt.map(obj => {
       tShirtContainer.innerHTML+= `
        <div class="productCard"  data-id="${obj.id}"  data-category="${obj.category}">
        <div id="imgContainer">
          <img src="${obj.img}" alt="img not found">
          <i class="fa-regular fa-heart heartIcon"></i>
        </div>
        <div id="textContainer">
        <div>
         <p>${obj.name}</p>
         <span>${obj.rs}</span>
         <div class="rating">
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-regular fa-star"></i>
         </div>
        </div>
        <div class="addToCart">
         <iconify-icon icon="iconoir:add-to-cart"></iconify-icon>
        </div>
       </div>
       <div>
         <button class="buyNow">Buy Now</button>
        </div>
        `
    });

    addToCart(tShirtContainer)

}).catch(e => console.log("error" ,e))

// jeans starts

let jeansContainer = document.getElementById('jeansContainer');

fetch('data.json')
.then(response => response.json())
.then(data => {

    data.jeans.map(obj => {

        jeansContainer.innerHTML += `

        <div class="productCard"
             data-id="${obj.id}"
             data-category="${obj.category}">

            <div id="imgContainer">

                <img src="${obj.img}" alt="img not found">

                <i class="fa-regular fa-heart heartIcon"></i>

            </div>


            <div id="textContainer">

                <div>

                    <p>${obj.name}</p>

                    <span>${obj.rs}</span>

                    <div class="rating">

                        <i class="fa-solid fa-star" style="color:yellow"></i>
                        <i class="fa-solid fa-star" style="color:yellow"></i>
                        <i class="fa-solid fa-star" style="color:yellow"></i>
                        <i class="fa-solid fa-star" style="color:yellow"></i>
                        <i class="fa-regular fa-star"></i>

                    </div>

                </div>


                <div class="addToCart">

                    <iconify-icon icon="iconoir:add-to-cart"></iconify-icon>

                </div>

            </div>


            <div>
                <button class="buyNow">Buy Now</button>
            </div>

        </div>

        `;
    });

    addToCart(jeansContainer);

})
.catch(e => console.log("error", e));


/*
let tShirts = document.getElementById('tShirts');
 fetch('data.json')
 .then( response => response.json())
 .then( data => 
    data.tShirt.map(obj => {
        tShirtContainer.innerHTML+= `
        <div class="productCard"  data-id="${obj.id}"  data-category="${obj.category}">
        <div id="imgContainer">
          <img src="${obj.img}" alt="img not found">
          <i class="fa-regular fa-heart heartIcon"></i>
        </div>
        <div id="textContainer">
        <div>
         <p>${obj.name}</p>
         <span>${obj.rs}</span>
         <div class="rating">
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-solid fa-star" style="color:yellow"></i>
          <i class="fa-regular fa-star"></i>
         </div>
        </div>
        <div class="addToCart">
         <iconify-icon icon="iconoir:add-to-cart"></iconify-icon>
        </div>
       </div>
        `
    })
).catch(e => console.log("error" ,e)) */


//like Function

  let likeProduct = JSON.parse(localStorage.getItem("likeProduct")) || [];
   document.addEventListener("click" , e =>{
    if(e.target.classList.contains("heartIcon")){

      e.target.classList.toggle("activeHeart");
      e.target.classList.toggle("fa-solid");
      e.target.classList.toggle("fa-regular");

         let productCard = e.target.closest('.productCard');

         let productId = productCard.dataset.id;
         let productCategory = productCard.dataset.category;

        //like
        if(e.target.classList.contains("activeHeart")){

          let product = {
    id: productId,
    category: productCategory,
    img: productCard.querySelector("img").src,
    name: productCard.querySelector("p").textContent,
    rs: productCard.querySelector("span").textContent
};
          likeProduct.push(product);
        }

        //unlike
        else{
          likeProduct = likeProduct.filter(product =>{
            return  product.id != productId || product.category != productCategory 
          });
           
        }
        localStorage.setItem("likeProduct", JSON.stringify(likeProduct));

       }
   });
  
  
 //  buy Now
 document.addEventListener("click", e => {

    if (e.target.classList.contains("buyNow")) {

        let productCard = e.target.closest(".productCard");

        let product = {
            id: productCard.dataset.id,
            category: productCard.dataset.category,
            img: productCard.querySelector("img").src,
            name: productCard.querySelector("p").textContent,
            rs: productCard.querySelector("span").textContent
        };

        sessionStorage.setItem(
            "summaryProduct",
            JSON.stringify(product)
        );

        location.href = "checkout.html";
    }

});