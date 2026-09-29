// checkout.js
let summaryProduct = JSON.parse(sessionStorage.getItem('summaryProduct'));

console.log(summaryProduct)
let summaryTop = document.getElementById('summaryTop');
let summaryCenter = document.getElementById('summaryCenter');
let summaryBottom = document.getElementById('summaryBottom');


summaryTop.innerHTML+=`
    <h3>Order Summary</h3>
   
    <div id="Product">
       <div id="img"> 
          <img src= '${summaryProduct.img}.src'>
       </div>
       
       <div>
          <p>${summaryProduct.name}</p>
          <span>${summaryProduct.rs}</span>
       </div>
 </div>

`


let price = Number(
    summaryProduct.rs.replace('₹', '').replace(',', '')
);

const shipping = 40;

const discount = 100;

const totalAmount = price + shipping - discount;

 summaryCenter.innerHTML +=`
       
              <div class="price">
                <p class="price">Price (1 item)</p>
                <p>${price}</p>
                </div>
                <div class="price">
                <p >Shipping</p>
                <p id="shipping">${shipping}</p> 
                </div>
                <div class="price">
                <p >Discount</p>
                <p id="discount">${discount}</p>
                 </div>
           
            `
        
 summaryBottom.innerHTML+=`
              
               
                <p>Total Amount</p>
                <p>${totalAmount}</p>
               

            `
            console.log('summaryBottom',summaryBottom)

  
let proceedPayment = document.getElementById('proceedPayment')  ;
 
proceedPayment.addEventListener('click', ()=> {
    console.log('click zall aheeeeeeeeeeeeee')
      window.location.href = 'payment.html';

});

