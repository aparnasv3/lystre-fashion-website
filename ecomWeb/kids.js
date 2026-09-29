import { addToCart } from "./addToCartFunction.js"

let boysContainer = document.getElementById("boysContainer")

 fetch("data.json")
  .then(response => response.json())
  .then(data => {data.boys.map(obj => {
    boysContainer.innerHTML+=`
      <div class="productCard"  data-id='${obj.id}'  data-category='${obj.category}'>
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
    addToCart(boysContainer)
}).catch(e => console.log("error" ,e))

//girls section starts
let girlsContainer = document.getElementById('girlsContainer')

fetch("data.json")
.then(response => response.json())
.then(data =>{ data.girls.map(obj => {
    girlsContainer.innerHTML+= `
      <div class="productCard"  data-id='${obj.id}'  data-category='${obj.category}'>
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
     addToCart(girlsContainer)
}).catch(e => console.log('error', e))


// baby section starts
let babyContainer = document.getElementById('babyContainer')
  
fetch('data.json')
.then(response => response.json())
.then(data =>{ data.baby.map(obj => {
    babyContainer.innerHTML+=`
     <div class="productCard"  data-id='${obj.id} ' data-category='${obj.category}'>
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
    `});
    addToCart(babyContainer)
})
    
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