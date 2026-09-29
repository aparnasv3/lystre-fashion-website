

let wishlist = document.getElementById("wishlistContainer");

let likedProducts = JSON.parse(localStorage.getItem("likeProduct")) || [];

likedProducts.map(product => {
    wishlist.innerHTML += `
    <div class="productCard" 
    data-id='${product.id}' data-category = '${product.category}' >
        <div id="imgDiv">
         <img src="${product.img}" alt="product Img">
         
        </div>
         <div id="text">
            <p>${product.name}</p>
            <span>${product.rs}</span>
        </div>
        <div>
           <button class='buyNowBtn'>Buy Now</button>
        </div>
        
    </div>
    `
});
 
// buy Now
let buyNow = document.querySelectorAll('.buyNowBtn');
 

buyNow.forEach(btn=> {
    btn.addEventListener('click', eventObj =>{
      let product =  eventObj.target.closest('.productCard');
      let id= product.dataset.id
      let category = product.dataset.category
console.log('product gete sucessfuly',product);

console.log("Clicked ID:", id);
console.log("Clicked Category:", category);
console.log("Liked Products:", likedProducts);

      let summaryProduct = likedProducts.find(product => {

  console.log(
        "Checking:",
        product.id,
        product.category
    );

      return   product.id== id && 
        product.category == category
    });
    console.log(summaryProduct);
      sessionStorage.setItem('summaryProduct', JSON.stringify(summaryProduct) );

      window.location.href = "checkout.html";
    })
})